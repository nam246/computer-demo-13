import Topbar from "@/components/ui/Topbar"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"

export default function HomeLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Topbar />
            <Header />
            {children}
            <Footer />
        </>
    )
}