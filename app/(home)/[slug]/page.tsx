export default async function Pages({ params }: { params: { slug: string } }) {
	return <h1>{params.slug}</h1>;
}
