"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import File from "@/components/admin/upload-files/File";
import Folder from "@/components/admin/upload-files/Folder";
import UploadFilesFancybox from "../upload-files/UploadFilesFancybox";

export default function FileInput() {

    const router = useRouter();
    const [files, setFiles] = useState<File[]>([]);

    // useEffect sử dụng để xử lý Side effect (thay đổi state, event (add event, remove event), (mounted, unmounted component), setTimeOut, setInterval, fetch API)
    // useEffect được gọi sau khi component re-render hoặc mounted ( return ui trước rồi mới gọi useEffect )
    // useEffect với đối số 2 là rỗng. (gọi useEffect 1 lần sau khi render)

    // useEffect(() => {
    //     async function getFiles() {
    //         const res = await fetch(`/api/admin/file-manager`, {
    //             method: 'GET',
    //         })

    //         if (res.ok) {
    //             const data = await res.json()
    //             setFiles(data.files);
    //         }
    //     }
    //     getFiles()
    // }, [])

    async function uploadFile(e: React.SyntheticEvent) {
        e.preventDefault()

        let formData = new FormData();

        Array.from(files).forEach((file, key) => {
            formData.append(`file`, file as File);
        })

        const res = await fetch('/api/admin/media', {
            method: 'POST',
            body: formData,
        })

        if (res.ok) {
            router.refresh();
        }
    }

    return (
        <div className="relative">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Upload</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={uploadFile} className="grid gap-4 py-4">
                        <DialogHeader>
                            <DialogTitle>Add new media</DialogTitle>
                            <DialogDescription>
                                Add a new media (Image or something). Click add when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input type="file" id="name" className="col-span-4" multiple={true} onChange={(e: any) => setFiles(e.target.files)} />
                        </div>
                        <DialogFooter>
                            <Button type="submit">Add</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}