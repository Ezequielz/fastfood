


import { getProductsByCategoryId } from "@/actions/product/get-products-by-category";
import { type Category } from "@prisma/client";
import { ProductCard } from "./ProductCard";

interface Props {
    category: Category
}

export const ProductsByCategoryList = async ({ category }: Props) => {

    const { ok, products } = await getProductsByCategoryId(category.id)
    if (!ok) {
        return (
            <div>
                <p>No hay productos</p>
            </div>
        )
    }

    return (

        <section
            className=" grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-10 xl:grid-cols-5"
        >
            {
                products!.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        categorySlug={category.slug}
                    />
                ))
            }
        </section>
    )
}
