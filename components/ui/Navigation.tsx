import Link from "next/link";
import SlidersBanner from "../widget/SlidersBanner";

export default function Navigation() {

    return (
        <>
            <nav className="bg-theme-color text-white">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <div className="w-3/12 ">
                            <i className="fa-solid fa-bars" style={{ color: '#fff' }}></i>
                            <span className="ml-1 font-bold uppercase">Danh mục sản phẩm</span>
                        </div>

                        <div className="w-9/12">
                            <ul className="flex justify-start items-center">
                                <li className="p-3 hover:bg-red-500"><Link href={`/`}>Hệ thống showroom</Link></li>
                                <li className="p-3 hover:bg-red-500"><Link href={`/`}>Tin tức công nghệ</Link></li>
                                <li className="p-3 hover:bg-red-500"><Link href={`/`}>Xây dựng cấu hình</Link></li>
                                <li className="p-3 hover:bg-red-500"><Link href={`/`}>Hỗ trợ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto mt-2">
                <div className="flex justify-center items-start gap-2">
                    <div className="w-3/12">
                        <div>
                            <ul className="border rounded divide-y divide-solid">
                                <li className="text-sm p-2"><Link href={`/`}>Laptop, tablet, Mobile</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Thiết bị lưu trữ, USB, Thẻ</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Máy in, máy chấm công</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Camera quan sát</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Mic, tai nghe, webcam</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Máy chơi game</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Phím chuột, ghế game, gear</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Màn hình máy tính</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Tản nhiệt PC, cooling, </Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Linh kiện máy tính</Link></li>
                                <li className="text-sm p-2"><Link href={`/`}>Xem thêm</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-9/12">
                        <SlidersBanner />
                    </div>
                </div>
            </div>
        </>
    )
}