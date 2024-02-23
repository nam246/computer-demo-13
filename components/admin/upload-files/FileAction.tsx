import { useRouter } from "next/navigation";

export default function FileAction({ path }: { path?: string | Buffer | URL }) {

    const router = useRouter()

    async function onEdit(e: React.SyntheticEvent) {
        e.preventDefault()
        const res = await fetch('/api/admin/file-manager/get-files', {
            method: 'PATCH'
        })

        if (res.ok) {
            console.log(res);
        }
    }

    async function onDelete(e: React.SyntheticEvent) {
        e.preventDefault()
        const res = await fetch('/api/admin/file-manager/get-files', {
            method: 'DELETE',
            body: JSON.stringify(path)
        })

        if (res.ok) {
            alert(res.statusText);
            router.refresh()
        }
    }

    return (
        <ul className="absolute right-0 top-0 flex flex-col items-start justify-end gap-2 hidden group-hover:block">
            <li><button onClick={e => onEdit(e)}><i className="text-slate-300 fa-solid fa-pen"></i></button></li>
            <li><button onClick={e => onDelete(e)}><i className="text-red-500 fa-solid fa-trash"></i></button></li>
        </ul>
    )
}