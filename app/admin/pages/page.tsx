import AdminHeader from "@/components/admin/AdminHeader"
import AddForm from "@/components/admin/form/AddForm"

export default function AdminAddPages() {

    return (
        <>
            <AdminHeader title="Pages" btn={{ isShow: true, url: '', btnValue: 'Add' }} />
            <AddForm fetchUrl={`/api/admin/pages`} />
        </>
    )
}