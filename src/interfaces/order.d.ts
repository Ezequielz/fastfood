
import { ProductWhitOptions } from "./product.d";



export type OrderProduct = Pick<ProductWhitOptions, 'id' | 'name' | 'price' | 'slug' | 'imageUrl' | 'options'  > & {
    quantity: number;
    subtotal: number;
    category: string;
}

