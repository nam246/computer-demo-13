export interface PayloadMedia {
	id: number;
	alt: string;
	caption: string | null;
	updatedAt: string;
	createdAt: string;
	url: string;
	thumbnailURL: string | null;
	filename: string;
	mimeType: string;
	filesize: number;
	width: number;
	height: number;
	focalX: number;
	focalY: number;
	sizes: any; // hoặc có thể định nghĩa rõ hơn nếu biết cấu trúc
}

export interface StrapiImage {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		small?: StrapiImageFormat;
		medium?: StrapiImageFormat;
		thumbnail?: StrapiImageFormat;
		[key: string]: StrapiImageFormat | undefined;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: any;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface Product {
	id: number;
	title: string;
	description: string | null;
	price: number;
	thumbnail: PayloadMedia | null;
	gallery: PayloadMedia[];
	categories: number | number[]; // hoặc ProductCategory[] nếu populate
	slug: string;
	slugLock: boolean;
	updatedAt: string;
	createdAt: string;
}

export interface ProductCategory {
	id: number;
	name: string;
	slug: string;
	description?: string;
	content?: string;
	image?: string;
	parent_id?: number;
	products?: Product[];
}

export interface Page {
	id: number;
	name: string;
	slug: string;
	description?: string;
	content?: string;
	image?: string;
	create_at?: Date;
	update_at?: Date;
}
