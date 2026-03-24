export interface Product {
  id: number;
  name: string;
  price: number;
  category: "hoodie" | "tee" | "kurta";
  image: string;
  limitedDrop?: boolean;
  stock: number;
  description: string;
  fabric: string;
  fit: string;
  designMeaning: string;
}

export const products: Product[] = [];

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);
