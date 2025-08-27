import { Product } from "./product";

export type Category = {
  id: number;
  name: string;
  imageUrl: string;
  slug: string;
  products?: Product[];
}