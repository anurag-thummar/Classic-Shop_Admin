
export type ProductType = {
    name: string;
    description: string;
    category: string;
    subCategory: string;
    thirdCategory: string;
    price: number;
    oldPrice: number | null;
    isFeatured: boolean;
    stock: number;
    brand: string;
    discount: number;
    rams: number;
    weight: number;
    size: number;
    color: string;
    bannerTitle: string;
    rating: number;
    images: string[];
};