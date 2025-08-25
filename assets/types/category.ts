import { Product } from "./product";

export type Category = {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
  products?: Product[];
}