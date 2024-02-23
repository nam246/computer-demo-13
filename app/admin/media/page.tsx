import prisma from "@/lib/prisma";

import ActionButton from "@/components/ui/ActionButton";
import AdminHeader from "@/components/admin/AdminHeader";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import FileInput from "@/components/admin/form/FileInput";

export default async function AdminMedia() {

    const media = await prisma.media.findMany({})

    return (
        <>
            <AdminHeader title="Media" btn={{ isShow: false, url: '', btnValue: 'Add' }} />

            <FileInput />

            <Table>
                <TableCaption>A list media and uploaded images.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Images</TableHead>
                        <TableHead>Created at</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        media.map((m: any, key: number) => (
                            <TableRow key={key}>
                                <TableCell className="font-medium">{m.id}</TableCell>
                                <TableCell>{m.name}</TableCell>
                                <TableCell>
                                    <img src={`/uploads/${m.name}`} alt={m.name} width={50} />
                                </TableCell>
                                <TableCell>{m.created_at.toDateString()}</TableCell>
                                <TableCell>
                                    <ActionButton id={m.id} deleteRequestUrl="/api/admin/media" />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

            <Pagination className="justify-end mt-5">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}