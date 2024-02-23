import AdminSidebar from "@/components/admin/AdminSidebar";
import { AdminNavbar } from "@/components/admin/AdminNavbar";
import { AdminAccount } from "@/components/admin/AdminAccount";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="">
            <div className="border-b">
                <div className="flex h-16 items-center justify-between px-4">
                    <AdminNavbar />
                    <AdminAccount />
                </div>
            </div>
            <div id="main" className="p-5 min-h-screen">
                {children}
            </div>
        </div>
    )
}