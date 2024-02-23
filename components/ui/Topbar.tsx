
export default function Topbar(props: any) {

    return (
        <div id="top-bar" className="top-bar py-2 bg-theme-color text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start top-bar-left py-1 px-2 rounded-full bg-red-500">
                        <div className="showroom-container text-sm mr-1">
                            Zalo
                        </div>
                        <div className="contact-address text-sm">
                            <a href="tel:+84987654321">+84987654321</a>
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-2 top-bar-right">
                        <div className="text-sm py-1 px-2 rounded-full bg-red-500 contact-address">
                            <a href="">+84987654321</a>
                        </div>
                        <div className="text-sm py-1 px-2 rounded-full bg-red-500 contact-address">
                            <a href="">+84987654321</a>
                        </div>
                        <div className="text-sm top-bar-item">
                            <a href="">Tin tức</a>
                        </div>
                        <div className="text-sm top-bar-item">
                            <a href="">Tuyển dụng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}