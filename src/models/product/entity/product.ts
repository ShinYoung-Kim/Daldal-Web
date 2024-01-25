import { CategoryName } from '@constants/categoryList';

export type ProductSimple = {
	id: number;
	title: string;
	price: number;
	refund: number;
	thumbnail: string;
	isLike: boolean;
};

export interface ProductDetail extends ProductSimple {
	categoryType: CategoryName;
	imageUrls: string[];
	videoUrls: string[];
	redirectUrl: string;
}

export type ProductSimpleList = ProductSimple[];
export type ProductDetailList = ProductDetail[];
