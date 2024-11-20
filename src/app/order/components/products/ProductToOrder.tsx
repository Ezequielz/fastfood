import { getProductBySlugWithOptionsGroups } from "@/actions/product/get-product-by-slug-whit-options"

import { formatCurrency } from "@/utils/formatCurrency";

import { ProductImage } from "./ProductImage";

import { AddToOrder } from "../ui/AddToOrder";
import { ProductSettings } from "./ProductSettings";




interface Props {
  productSlug: string
}
export const ProductToOrder = async ({ productSlug }: Props) => {

  const { ok, product } = await getProductBySlugWithOptionsGroups(productSlug)

  if (!ok) {
    return (
      <div>No se encontro el producto</div>
    )
  }
  const { optionsGroups, ...restProduct } = product!

  return (
    <section className="mx-auto flex flex-col gap-5 p-5  md:grid md:w-[100%] md:grid-cols-[40%_1fr_55%] md:grid-rows-1 md:justify-center md:gap-0 lg:w-[75%]">

      <div className="w-full md:col-span-1 ">

        <div className="flex w-full flex-col md:sticky md:top-[9rem]">

          <ProductImage
            alt={product!.name}
            url={product!.imageUrl ?? '/images/placeholder.jpg'}
            w={300}
            h={200}
            className="flex h-auto w-9/12 self-center"
          />


          <AddToOrder product={restProduct!} />


          

        </div>

      </div>


      <div className="flex w-full flex-col md:col-start-3 md:col-end-35">
        <h2 className="my-4 text-start text-2xl font-bold md:mt-10 md:text-5xl"> {product!.name} </h2>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <div className="flex flex-row flex-wrap items-center gap-2">
            <p className="text-sm text-mcd-secondaryDarkGrey md:text-base">
              {formatCurrency(product!.price)}
            </p>

          </div>
        </div>
        <p className="my-4 text-sm text-mcd-secondaryDarkGrey md:text-base">
          {product!.description}
        </p>

{/* 
        <section className="mt-4">
          <h3 className="text-lg font-bold md:text-3xl">
            Selecciona un tamaño
          </h3>

          <div className="my-4 flex flex-row flex-wrap gap-2">
            <div className="mx-2 flex cursor-pointer flex-col gap-3">
              <div className="relative h-16 w-16 rounded-[50%] border-2  border-gray-200">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">

                  G
                </span>
              </div>
              <p className="text-center text-sm">
                Grande
              </p>
            </div>

            <div className="mx-2 flex cursor-pointer flex-col gap-3">
              <div className="relative h-16 w-16 rounded-[50%] border-2  border-gray-200">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">

                  M
                </span>
              </div>
              <p className="text-center text-sm">
                Mediano
              </p>
            </div>
          </div>



        </section> */}


        <ProductSettings optionsGroups={optionsGroups} productId={product!.id}/>




      </div>



    </section>
  )
}
