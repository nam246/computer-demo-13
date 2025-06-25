import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";

export async function GET(req: NextRequest) {
    
}

export async function POST(req: NextRequest) {
    if (req) {

        const formData = await req.formData();

        const title = formData.get('title') as string;
        const slug = formData.get('slug') as string;
        const images = formData.get('images') as File;
        const externalLink = formData.get('externalLink') as string;
        const price = formData.get('price') as string;
        const categoriesId = formData?.get('categories') as any;
        const description = formData.get('description') as string;
        const content = formData.get('content') as string;

        if (categoriesId) {
            await prisma.product.create({
                data: {
                    title: title,
                    slug: slug,
                    image: images ? images.name : externalLink,
                    price: price,
                    description: description,
                    content: content,
                    products_categories: {
                        create: [
                            {
                                assignedBy: 'me',
                                category_id: parseInt(categoriesId),
                            }
                        ],
                    },
                },
                include: {
                    products_categories: true,
                }
            })
        }
        else {
            await prisma.product.create({
                data: {
                    title: title,
                    slug: slug,
                    image: images.name,
                    price: price,
                    description: description,
                    content: content,
                },
                include: {
                    products_categories: true,
                }
            })
        }


        return NextResponse.json({
            status: 200,
            statusText: 'add product route'
        })
    }
}

export async function DELETE(req: NextRequest) {

    if (req) {
        const body = await req.json();

        await prisma.product.delete({
            where: {
                id: body.objectId
            }
        })

        return NextResponse.json({
            status: 201,
            statusText: 'Delete route'
        })
    }
}


export async function PATCH(req: NextRequest) {

    if (req) {

        return NextResponse.json({
            status: 203,
            statusText: 'Edit post'
        })
    }
}