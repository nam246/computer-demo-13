import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return (
        <header className="py-3">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="logo w-3/12">
                        <Link href={`/`}>
                            <Image src={`/logo.webp`} width={171} height={100} alt="logo" />
                        </Link>
                    </div>

                    <div className="search-bar w-5/12">
                        <div className="border border-theme-color rounded min-w-full p-3 relative">
                            <form action="">
                                <input className="w-full" type="text" name="" id="" placeholder="Nhập tên sản phẩm tìm kiếm?" />
                            </form>
                            <button className="absolute right-0 top-0 p-3">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    <div className="header-items flex justify-end items-center gap-5 w-4/12">
                        <div className="hotline border border-theme-color rounded relative">
                            <div className="h-10 w-10 absolute -left-4 top-3 border border-theme-color rounded-full p-2 bg-white">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="pl-8 pr-2 py-2">
                                <p className="font-bold">Hotline</p>
                                <p className="text-lg text-theme-color font-bold">0987654321</p>
                            </div>
                        </div>
                        <div className="cart hotline border border-theme-color rounded relative">
                            <div className="h-10 w-10 absolute -left-4 top-3 border border-theme-color rounded-full p-2 bg-white">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </div>
                            <div className="pl-8 pr-2 py-2">
                                <p className="font-bold">Giỏ hàng</p>
                                <p className="">0 sản phẩm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}