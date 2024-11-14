import { getProductBySlugWithOptionsGroups } from "@/actions/product/get-product-by-slug-whit-options"



interface Props {
    productSlug: string
}
export const ProductToCart = async ({productSlug}: Props) => {

    const {ok, product} = await getProductBySlugWithOptionsGroups(productSlug)
    console.log(product)
    if (!ok) {
        return (
            <div>No se encontro el producto</div>
        )
    }
  return (
    <div>ProductToCart</div>
  )
}
