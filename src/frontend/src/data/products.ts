export interface Product {
  id: number;
  name: string;
  article?: string;
  price: number;
  originalPrice?: number;
  category: "hoodie" | "tee" | "kurta" | "bottom";
  image: string;
  backImage?: string;
  limitedDrop?: boolean;
  stock: number;
  description: string;
  fabric: string;
  fit: string;
  designMeaning: string;
  sizes?: string[];
  deliveryTime?: string;
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sukoon Printed Drop Shoulders – Black",
    article: "Sukoon Printed Drop Shoulders",
    price: 1600,
    category: "tee",
    image:
      "/assets/uploads/whatsapp_image_2026-03-24_at_10.57.52_pm-019d2109-1663-75bb-bd9a-bcb6fb503097-1.jpeg",
    backImage:
      "/assets/uploads/whatsapp_image_2026-03-24_at_10.57.59_pm-019d2109-180c-74ae-af8a-e7f460570411-6.jpeg",
    stock: 50,
    limitedDrop: false,
    fabric: "Fine Jersey",
    fit: "Drop Shoulder Oversized",
    description:
      "Sukoon Printed Drop Shoulders in Black. Fine jersey fabric with a statement back graphic print and Sukoon front text. Relaxed oversized drop-shoulder cut.",
    designMeaning:
      "Sukoon (سکون) — the Urdu word for peace and tranquility. The back graphic reflects that inner stillness.",
  },
  {
    id: 2,
    name: "Sukoon Printed Drop Shoulders – White",
    article: "Sukoon Printed Drop Shoulders",
    price: 1600,
    category: "tee",
    image:
      "/assets/uploads/whatsapp_image_2026-03-24_at_10.57.58_pm-019d2109-17c3-72c1-ba80-e2ee6580810f-3.jpeg",
    backImage:
      "/assets/uploads/whatsapp_image_2026-03-24_at_10.57.58_pm_1-019d2109-17bb-7508-a59f-5ca256465bc5-5.jpeg",
    stock: 50,
    limitedDrop: false,
    fabric: "Fine Jersey",
    fit: "Drop Shoulder Oversized",
    description:
      "Sukoon Printed Drop Shoulders in White. Fine jersey fabric with a statement back graphic print and Sukoon front text. Relaxed oversized drop-shoulder cut.",
    designMeaning:
      "Sukoon (سکون) — the Urdu word for peace and tranquility. The back graphic reflects that inner stillness.",
  },
  {
    id: 3,
    name: "Sukoon Printed Drop Shoulders – Yellow",
    article: "Sukoon Printed Drop Shoulders",
    price: 1600,
    category: "tee",
    image:
      "/assets/uploads/whatsapp_image_2026-03-24_at_10.57.56_pm-019d2109-1802-72cd-bd9e-189da57e233d-4.jpeg",
    backImage:
      "/assets/uploads/whatsapp_image_2026-03-24_at_10.57.57_pm-019d2109-17e7-77cc-a438-5f5ce0d38d4b-2.jpeg",
    stock: 50,
    limitedDrop: false,
    fabric: "Fine Jersey",
    fit: "Drop Shoulder Oversized",
    description:
      "Sukoon Printed Drop Shoulders in Yellow. Fine jersey fabric with a statement back graphic print and Sukoon front text. Relaxed oversized drop-shoulder cut.",
    designMeaning:
      "Sukoon (سکون) — the Urdu word for peace and tranquility. The back graphic reflects that inner stillness.",
  },
  {
    id: 4,
    name: "Bandana Track Trouser – Black",
    article: "Bandana Track Trouser",
    price: 2799,
    originalPrice: 3500,
    category: "bottom",
    image:
      "/assets/uploads/whatsapp_image_2026-03-25_at_5.43.04_am-019d2278-f3d0-72a8-bcdd-b0b975ace5bb-1.jpeg",
    backImage:
      "/assets/uploads/whatsapp_image_2026-03-25_at_5.43.05_am-019d2278-f3eb-764d-b0cc-8077563a1803-2.jpeg",
    stock: 50,
    limitedDrop: false,
    fabric: "Terry – soft, breathable and perfect for everyday use",
    fit: "Baggy Oversized",
    description:
      "Upgrade your wardrobe with the casual baggy terry trouser designed for ultimate comfort and trendy oversized fit.",
    designMeaning:
      "Bandana-inspired side tape merges streetwear culture with laid-back comfort.",
    sizes: ["S", "M", "L", "XL"],
    deliveryTime: "5 to 10 working days",
    colors: ["Black", "Red"],
  },
  {
    id: 5,
    name: "Bandana Track Trouser – Red",
    article: "Bandana Track Trouser",
    price: 2799,
    originalPrice: 3500,
    category: "bottom",
    image:
      "/assets/uploads/whatsapp_image_2026-03-25_at_5.43.05_am_3-019d2278-f556-760d-a561-7f1b07260a9c-5.jpeg",
    stock: 50,
    limitedDrop: false,
    fabric: "Terry – soft, breathable and perfect for everyday use",
    fit: "Baggy Oversized",
    description:
      "Upgrade your wardrobe with the casual baggy terry trouser designed for ultimate comfort and trendy oversized fit.",
    designMeaning:
      "Bandana-inspired side tape merges streetwear culture with laid-back comfort.",
    sizes: ["S", "M", "L", "XL"],
    deliveryTime: "5 to 10 working days",
    colors: ["Black", "Red"],
  },
];

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);
