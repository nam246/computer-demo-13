import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";

export async function POST(req: NextRequest) {

    if (req) {

        const formData = await req.formData();

        console.log(formData);
        

        // const formData = await req.formData();
        // const pathName = formData.get('pathName');
        // const files = formData.getAll('files') as File[];

        // if (pathName != '') {
        //     if (existsSync(`${process.cwd()}/public/${pathName}`)) {
        //         console.log('exist');
        //     } else {
        //         await fs.mkdir(`${process.cwd()}/public/${pathName}`);
        //     }
        // }

        // // cannot use async / await in foreach loop use for... of instead
        // for (const file of files) {
        //     // get binary data of file
        //     const genericRawBinaryDataBuffer = await file.arrayBuffer();
        //     // binary data of file to object
        //     const buffer = Buffer.from(genericRawBinaryDataBuffer);
        //     const newPath = `${process.cwd()}/public/${pathName}/${file.name}`
        //     await fs.writeFile(newPath, buffer);
        // }

        return NextResponse.json({
            status: 200,
            statusText: 'Upload file route',
        })
    }
}