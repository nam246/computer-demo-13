"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

export default function SlidersBanner(...props: any) {

    const sliders = {
        items: [
            {
                image: '/uploads/sliders/slider1.jpg',
                url: '/',
                alt: 'slider 1',
            },
            {
                image: '/uploads/sliders/slider1.jpg',
                url: '/',
                alt: 'slider 1',
            },
            {
                image: '/uploads/sliders/slider1.jpg',
                url: '/',
                alt: 'slider 1',
            },
        ],
        width: 1920,
        height: 1080
    }

    const banners = [
        {
            image: '/uploads/banners/banner1.webp',
            url: '/',
            alt: 'slider 1',
        },
        {
            image: '/uploads/banners/banner2.webp',
            url: '/',
            alt: 'slider 1',
        },
        {
            image: '/uploads/banners/banner3.webp',
            url: '/',
            alt: 'slider 1',
        },
    ]

    const orders = [
        {
            name: 'Nguyen Thanh Long',
            product: 'san pham',
            gender: 'male'
        },
        {
            name: 'Nguyen Thanh Long',
            product: 'san pham',
            gender: 'male'
        },
        {
            name: 'Nguyen Thanh Long',
            product: 'san pham',
            gender: 'male'
        },
        {
            name: 'Nguyen Thanh Long',
            product: 'san pham',
            gender: 'male'
        },
        {
            name: 'Nguyen Thanh Long',
            product: 'san pham',
            gender: 'male'
        },
    ]

    return (
        <>
            <div className="flex justify-between items-start gap-2">
                <div className="w-2/3">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {sliders.items.map((slider: any, index: number) => (
                            <SwiperSlide key={index}>
                                <Image src={slider.image} alt={slider.alt} width={sliders.width} height={sliders.height} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="w-1/3">
                    <div className="border border-theme-color rounded">
                        <h3 className="py-3 px-2 bg-theme-color text-bold text-white text-center">
                            KHACH HANG CUA CHUNG TOI
                        </h3>
                        <ul className="divide-y divide-solid divide-theme-color">
                            {orders.map((order: any, index: number) => (
                                <li key={index} className="p-2 text-slate-500 text-sm">
                                    {order.name + ' da mua ' + order.product}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex">
                {banners.map((banner: any, index: number) => (
                    <div key={index}>
                        <Image src={banner.image} alt={banner.alt} width={200} height={200} />
                    </div>
                ))}
            </div>
        </>
    )
}