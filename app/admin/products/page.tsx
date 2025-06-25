import prisma from "@/lib/prisma"
import ActionButton from "@/components/ui/ActionButton";
import AdminHeader from "@/components/admin/AdminHeader";

import { Input } from "@/components/ui/input";
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

export default async function AdminProducts() {

    const products = await prisma.product.findMany({});

    return (
        <>
            <AdminHeader title="Products" btn={{ isShow: true, url: '/admin/products/add', btnValue: 'Add' }} />

            <Table>
                <TableCaption>Product table.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <Input className="h-4" type="checkbox" value={'all'} />
                        </TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Image</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* {products?.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell className="w-1">
                                <Input className="h-4" type="checkbox" value={product.id} />
                            </TableCell>
                            <TableCell className="font-medium">{product.title}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                <img src={product.image != null ? `/uploads/${product.image}` : ''} alt={product.title} />
                            </TableCell>
                            <TableCell>
                                <ActionButton id={product.id} deleteRequestUrl="/api/admin/products" />
                            </TableCell>
                        </TableRow>
                    ))} */}
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