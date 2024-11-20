import { Option, Product, OptionsGroup } from "@prisma/client";


export type OrderProduct = Pick<ProductWhitOptions, 'id' | 'name' | 'price' | 'slug' | 'imageUrl' | 'options'  > & {
    quantity: number;
    subtotal: number;
    category: string;
}

interface ProductWhitOptions extends ProductWhitCategory {
    options: ProductOptions[]
}

export type ProductOption = Pick<Option, 'id' | 'name' | 'imageUrl' | 'price' > & {
    quantity: number;
    subtotal: number;
}


export interface ProductWhitCategory extends Product {
    category: {
        slug: string
    }
}


export interface OptionsGroupWithRelations extends OptionsGroup {
    options: Option[];
}
