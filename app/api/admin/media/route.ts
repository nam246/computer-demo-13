import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";

export async function GET(req: NextRequest) {

    let statusText: string;
    let media;

    if (req) {
        media = await prisma.media.findMany({});

    }

    return NextResponse.json({
        status: 200,
        statusText: 'get media data',
        media: media
    })
}

export async function POST(req: NextRequest) {

    let statusText: string

    if (req) {

        const formData = await req.formData();

        const files = formData.getAll('file') as File[];

        // cannot use async / await in foreach loop use for... of instead
        for (const file of files) {
            // console.log(file);
            // get binary data of file
            const genericRawBinaryDataBuffer = await file.arrayBuffer();
            // binary data of file to object
            const buffer = Buffer.from(genericRawBinaryDataBuffer);
            const newPath = `${process.cwd()}/public/uploads/${file.name}`
            await fs.writeFile(newPath, buffer);

            await prisma.media.create({
                data: {
                    name: file.name
                },
            })
        }

        return NextResponse.json({
            status: 200,
            statusText: 'Upload file route',
        })
    }
}

export async function DELETE(req: NextRequest) {

    let statusText: string = 'delete media';

    if (req) {
        const request = await req.json();
        const objectId = await request.objectId;

        const action = await prisma.media.delete({
            where: {
                id: objectId
            }
        })

        if (action) {
            statusText = 'Deleted';
        }
    }

    return NextResponse.json({
        status: 203,
        statusText: statusText
    })
}

export async function PATCH(req: NextRequest) {

    let statusText = 'patch route';

    if (req) {
        const request = await req.json();
    }

    return NextResponse.json({
        status: 204,
        statusText: statusText
    })
}