"use client"
import { useRouter } from "next/navigation";

export default function ActionButton({ id, deleteRequestUrl, ...rest }: { id: number, deleteRequestUrl: string }) {

    const router = useRouter();

    async function deleteHandler(e: React.SyntheticEvent) {
        e.preventDefault();

        const objectId = id;

        const res = await fetch(deleteRequestUrl, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ objectId: objectId }),
        })

        if (res.ok) {
            router.refresh();
        }
    }

    return (
        <div className="flex gap-2">
            <button onClick={deleteHandler}><i className="fa-solid fa-trash"></i></button>
            <button><i className="fa-solid fa-pen"></i></button>
        </div>
    )
}