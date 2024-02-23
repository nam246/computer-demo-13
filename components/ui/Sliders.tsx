import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"


export default function Sliders({ children }: { children: React.ReactNode }) {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {children}
        </Swiper>
    )
}