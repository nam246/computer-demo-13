import Navigation from "@/components/ui/Navigation"
import ProductStyle7 from "@/components/widget/ProductStyle7"
import ProductStyle6 from "@/components/widget/ProductStyle6"

import prisma from "@/lib/prisma"
import { Product } from "@/lib/types"

export default async function HomePage() {

    // const style7Products = [
    //     {
    //         id: 1,
    //         title: 'CPU INTEL Core i7-12700 (12C/20T, 4.90 GHz, 25MB) - 1700',
    //         slug: 'iphone-9',
    //         description: 'An apple mobile which is nothing like apple',
    //         content: 'An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple',
    //         image: '',
    //         price: '599',
    //     },
    //     {
    //         id: 1,
    //         title: 'iPhone 9',
    //         slug: 'iphone-9',
    //         description: 'An apple mobile which is nothing like apple',
    //         content: 'An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple',
    //         image: '',
    //         price: '599',
    //     },
    //     {
    //         id: 1,
    //         title: 'iPhone 9',
    //         slug: 'iphone-9',
    //         description: 'An apple mobile which is nothing like apple',
    //         content: 'An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple',
    //         image: '',
    //         price: '599',
    //     },
    //     {
    //         id: 1,
    //         title: 'iPhone 9',
    //         slug: 'iphone-9',
    //         description: 'An apple mobile which is nothing like apple',
    //         content: 'An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple',
    //         image: '',
    //         price: '599',
    //     },
    //     {
    //         id: 1,
    //         title: 'iPhone 9',
    //         slug: 'iphone-9',
    //         description: 'An apple mobile which is nothing like apple',
    //         content: 'An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple',
    //         image: '',
    //         price: '599',
    //     },
    //     {
    //         id: 1,
    //         title: 'iPhone 9',
    //         slug: 'iphone-9',
    //         description: 'An apple mobile which is nothing like apple',
    //         content: 'An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple',
    //         image: '',
    //         price: '599',
    //     },

    // ] as Product[]

    let style7Products: any | null = null;

    try {
        style7Products = await prisma.product.findMany({
            where: {
                products_categories: {
                    some: {

                    }
                }
            }
        }) as Product[]
    } catch (error) {
        console.log(error);
    }


    let style6Products: any | null = null;

    try {
        style6Products = await prisma.product.findMany({
            where: {
                products_categories: {
                    some: {

                    }
                }
            }
        }) as Array<Product>
    } catch (error) {
        console.log(error);
    }


    return (
        <>
            <Navigation />
            <ProductStyle7 products={style7Products} />
            <ProductStyle6 products={style6Products} />
        </>
    )
}