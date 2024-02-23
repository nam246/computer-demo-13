
export default function productById({ params }: { params: { id: number } }) {

    return (
        <div>
            {params.id}
        </div>
    )
}