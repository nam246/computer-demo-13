import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { RmOptions, rmdir } from "fs";

class Node<T> {
    data: T
    next: Node<T> | null = null

    constructor(data: T) {
        this.data = data
    }
}

class LinkedList<T> {
    head: Node<T> | null = null
    len: number = 0

    constructor() {

    }

    append(data: T) {
        if (!this.head) {
            this.head = new Node(data)
        } else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = new Node(data);
        }

        this.len++
    }
}

async function findPublicFiles(folderName: string) {
    let result = [] as Array<{
        name: string,
        parse: object,
        isDir: boolean
    }>

    const files = await fs.readdir(path.join(process.cwd(), folderName), {
        withFileTypes: true
    })

    let filesLinkedList = new LinkedList;

    for await (const file of files) {
        if (file.isDirectory()) {
            result.push({
                name: file.name,
                parse: path.parse(`${folderName}/${file.name}`),
                isDir: true,
            })
            filesLinkedList.append(file)
        } else {
            result.push({
                name: file.name,
                parse: path.parse(`${folderName}/${file.name}`),
                isDir: false,
            })
            filesLinkedList.append(file)
        }
    }
    
    return result;
}

export async function GET(req: NextRequest) {
    let publicDir = 'public/uploads';

    const files = await findPublicFiles(publicDir);

    return NextResponse.json({
        status: 200,
        statusText: 'readdir',
        files: files
    })
}

export async function POST(req: NextRequest) {

    if (req) {
        let request = await req.json()
        let dir = request.dir
        let base = request.base

        let nextDir = `${dir}` + `/${base}`

        const files = await findPublicFiles(nextDir);

        return NextResponse.json({
            status: 200,
            statusText: 'post dir',
            files: files
        })
    }
}

export async function PATCH(req: NextRequest) {

    return NextResponse.json({
        status: 203,
        statusText: 'Rename file'
    })
}

export async function DELETE(req: NextRequest) {

    let statusText = '';

    if (req) {
        const path = await req.json();

        const options: RmOptions = {}

        const rm = await fs.rm(`${process.cwd()}/${path}`, options)

        if (rm == undefined) {
            statusText = "file Deleted"
        }

    }

    return NextResponse.json({
        status: 204,
        statusText: statusText
    })
}