import prisma from "@/lib/prisma"
import Page from "@/lib/types"

export default async function Pages({ params }: { params: { slug: string } }) {

    const page = await prisma.page.findFirst({
        where: {
            slug: params.slug
        }
    })

    if (page) {
        return (
            <div className="container mx-auto">
                <h1>
                    {page?.title}
                </h1>
                <div>
                    {page?.description}
                </div>
                <div>{page?.content}</div>
            </div>
        )
    }
    else {
        return (
            <div className="text-9xl">Not found</div>
        )
    }

}