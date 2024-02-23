export default function AdminSidebar() {

    return (
        <div id="sidebar-root" className="fixed">
            <div className="w-64 flex flex-col divide-y divide-slate-500">
                <div className="px-4 py-6">
                    <div>
                        <a href="/"><img src="/next.svg" className="text-center mb-3" alt="" width={100} /></a>
                    </div>
                </div>

                <div className="px-4 py-6">
                    <ul className="flex flex-col gap-1">
                        <li className="relative rounded text-slate-300 hover:text-white hover:bg-slate-300">
                            <a className="py-1.5 px-4 text-sm font-medium block" href="/admin">
                                <i className="fa-solid fa-chart-line"></i> Dashboard
                            </a>
                        </li>
                        <li className="relative rounded text-slate-300 hover:text-white hover:bg-slate-300">
                            <a className="py-1.5 px-4 text-sm font-medium block" href="/admin/pages">
                                <i className="fa-solid fa-pager"></i> Add pages
                            </a>
                        </li>
                        <li className="relative rounded text-slate-300 hover:text-white hover:bg-slate-300 group">
                            <a className="py-1.5 px-4 text-sm font-medium block" href="/admin/products">
                                <i className="fa-solid fa-box"></i> Products
                            </a>

                            <ul className="hidden opacity-0 rounded absolute left-full top-0 bg-slate-300 min-w-56 shadow-md group-hover:block group-hover:opacity-100 group-hover:transition-all">
                                <li className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-300">
                                    <a className="py-1.5 px-4 text-sm font-medium" href="/admin/products/add">Add Products</a>
                                </li>
                                <li className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-300">
                                    <a className="py-1.5 px-4 text-sm font-medium" href="/admin/products/categories">Add Products Categories</a>
                                </li>
                            </ul>
                        </li>
                        <li className="relative rounded text-slate-300 hover:text-white hover:bg-slate-300">
                            <a className="py-1.5 px-4 text-sm font-medium block" href="/admin/media">
                                <i className="fa-solid fa-folder"></i> Media
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}