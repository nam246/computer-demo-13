import Link from "next/link"

export default function Footer() {

    return (
        <footer className="bg-slate-800 text-white py-5">
            <div className="container mx-auto flex">
                <div className="w-3/12">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="">
                        <p><i className="fa-solid fa-location-dot"></i> 36 D5, Phường 25, Quận Bình Thạnh, TP Hồ Chí Minh</p>
                        <p><i className="fa-solid fa-phone"></i> 028 62941556</p>
                        <p><i className="fa-solid fa-envelope"></i> cskh.skd@gmail.com</p>
                    </div>
                </div>

                <div className="w-3/12">
                    <h3 className="font-bold text-xl">Về chúng tôi</h3>
                    <div>
                        <ul>
                            <li><Link href={`/`}>Hệ thống showroom</Link></li>
                            <li><Link href={`/`}>Tin tức công nghệ</Link></li>
                            <li><Link href={`/`}>Xây dựng cấu hình</Link></li>
                            <li><Link href={`/`}>Hỗ trợ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-3/12">
                    <h3 className="font-bold text-xl">Hỗ trợ khách hàng</h3>
                    <div>
                        <ul>
                            <li><Link href={`/`}>Hệ thống showroom</Link></li>
                            <li><Link href={`/`}>Tin tức công nghệ</Link></li>
                            <li><Link href={`/`}>Xây dựng cấu hình</Link></li>
                            <li><Link href={`/`}>Hỗ trợ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-3/12">
                    <h3 className="font-bold text-xl">Hỗ trợ khách hàng</h3>
                    <div>
                        <ul>
                            <li><Link href={`/`}>Hệ thống showroom</Link></li>
                            <li><Link href={`/`}>Tin tức công nghệ</Link></li>
                            <li><Link href={`/`}>Xây dựng cấu hình</Link></li>
                            <li><Link href={`/`}>Hỗ trợ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}