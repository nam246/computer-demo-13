import Link from "next/link"
import ItemProduct from "../ui/ItemProduct"
import { Product } from "@/lib/types"

export default function ProductStyle7({ products }: { products: Array<Product> }) {

    return (
        <div id="" className="container mx-auto bg-red-500 rounded mt-2 py-5">
            <div className="w-full">
                <ul className="flex justify-center items-center gap-3">
                    <li className="text-lg uppercase font-bold rounded-full bg-white hover:bg-theme-color hover:text-white p-2"><Link href={`/`}>Sản phẩm bán chạy</Link></li>
                    <li className="text-lg uppercase font-bold rounded-full bg-white hover:bg-theme-color hover:text-white p-2"><Link href={`/`}>Sản phẩm mới</Link></li>
                    <li className="text-lg uppercase font-bold rounded-full bg-white hover:bg-theme-color hover:text-white p-2"><Link href={`/`}>Sản phẩm khuyến mãi</Link></li>
                    <li className="text-lg uppercase font-bold rounded-full bg-white hover:bg-theme-color hover:text-white p-2"><Link href={`/`}>Phụ kiện</Link></li>
                </ul>

                <div className="flex gap-5 p-3">
                    {products.map((product, index) => (
                        <ItemProduct key={index} image={product.image} title={product.title} price={product.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}