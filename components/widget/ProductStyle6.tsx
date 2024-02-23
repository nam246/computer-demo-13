"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import ItemProduct from "../ui/ItemProduct"
import { Product } from "@/lib/types"

export default function ProductStyle6({ products }: { products: Product[] }) {

    return (
        <div id="" className="container mx-auto mt-5">
            <div className="flex justify-between items-center border-b-2 border-theme-color">
                <div className="bg-theme-color text-3xl py-2 px-5 font-bold text-white">
                    PC Gaming
                </div>

                <div>
                    <ul className="flex gap-2 text-sm">
                        <li>Laptop</li>
                        <li>Điện thoại</li>
                        <li>Máy tính bảng</li>
                        <li>Xem tất cả</li>
                    </ul>
                </div>
            </div>

            <div>
                <Swiper spaceBetween={50} slidesPerView={5} >
                    {
                        products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <ItemProduct
                                    title={product.title}
                                    slug={product.slug}
                                    price={product.price}
                                    image={product.image}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}