import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {

    if (req) {

        const formData = await req.formData();

        const title = formData.get('title') as string;
        const slug = formData.get('slug') as string;
        const description = formData.get('description') as string;
        const content = formData.get('content') as string;

        await prisma.page.create({
            data: {
                title: title,
                slug: slug,
                description: description,
                content: content
            }
        })

        return NextResponse.json({
            status: 201,
            statusText: 'add pages route'
        })
    }
}