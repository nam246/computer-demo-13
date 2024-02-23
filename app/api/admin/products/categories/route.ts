import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {

    if (req) {
        const data = await prisma.products_categories.findMany({})

        return NextResponse.json({
            status: 200,
            statusText: 'get cate',
            data: data
        })
    }
}

export async function POST(req: NextRequest) {

    if (req) {
        const data = await req.json();

        const name = data.name;
        const parentId = parseInt(data.parentId);

        if (name !== '' && parentId == 0) {
            await prisma.category.create({
                data: {
                    name: name,
                }
            })
        }
        else {
            await prisma.category.create({
                data: {
                    name: name,
                    parent_id: parentId
                }
            })
        }

        return NextResponse.json({
            status: 200,
            statusText: 'ok la'
        })
    }
}

export async function DELETE(req: NextRequest) {

    if (req) {

        const body = await req.json();

        const res = await prisma.category.delete({
            where: {
                id: body.objectId
            }
        })

        return NextResponse.json({
            status: 201,
            statusText: `deleted ${res.name}`,
        })
    }
}