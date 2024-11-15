import { getProductBySlugWithOptionsGroups } from "@/actions/product/get-product-by-slug-whit-options"

import { formatCurrency } from "@/utils/formatCurrency";

import { ProductImage } from "./ProductImage";



interface Props {
  productSlug: string
}
export const ProductToCart = async ({ productSlug }: Props) => {

  const { ok, product } = await getProductBySlugWithOptionsGroups(productSlug)

  if (!ok) {
    return (
      <div>No se encontro el producto</div>
    )
  }
  return (
    <section className="mx-auto flex flex-col gap-5 p-5 pb-[9rem] md:grid md:w-[100%] md:grid-cols-[40%_1fr_55%] md:grid-rows-1 md:justify-center md:gap-0 lg:w-[75%]">
      <div className="w-full md:col-span-1 ">
        <div className="flex w-full flex-col md:sticky md:top-[9rem]">

          <ProductImage
            alt={product!.name}
            url={product!.imageUrl}
            w={300}
            h={200}
            className="flex h-auto w-9/12 self-center"
          />
          <div className="md:px-4 lg:px-10">
            <section className="fixed bottom-0 left-0 z-[9] w-full rounded-t-3xl bg-white shadow-elevation-up md:relative md:rounded-none md:shadow-none">
              <div className="my-4 flex flex-row items-center justify-between gap-2 px-4 md:p-0">
                <div className="my-2 flex items-center justify-between rounded-2xl border border-gray-500 p-2 store-quantity-selector--small">
                  <button>-</button>
                  <div>1</div>
                  <button>+</button>
                </div>

                <div className="flex flex-row flex-nowrap gap-2 text-2xl md:flex-wrap md:text-3xl">
                  <p className="font-bold md:ml-auto"> {formatCurrency(product!.price)} </p>
                </div  >

              </div>


            </section>
          </div>
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



        </section>


        <section className="mt-4">
          <h3 className="text-lg font-bold md:text-3xl">
            Personaliza tu producto

          </h3>
          {product!.optionsGroups.map(optionGoup => (
            <div className="mb-4" key={optionGoup.id}>
              <div className="flex w-full flex-col gap-2">
                <p className="text-sm font-bold">
                  {optionGoup.name}
                </p>
                <p className="cursor-pointer text-xs text-mcd-secondaryDarkGrey underline">
                  Personalizar
                </p>
              </div>
            </div>

          ))}


        </section>


      </div>

    </section>
  )
}
