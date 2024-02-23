import Image from "next/image"
import Link from "next/link"

export default function ItemProduct(props: any) {

    return (
        <Link href={'/'+props.slug} className="block rounded bg-white flex flex-col items-center justify-start py-2">
            <Image src={`/uploads/products/${props.image}`} width={230} height={230} alt={props.title} />
            <div>
                <p className="text-center font-bold mb-3">{props.title}</p>
                <p className="text-center font-bold text-red-500">{props.price}</p>
            </div>
        </Link>
    )
}