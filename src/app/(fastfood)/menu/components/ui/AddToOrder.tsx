/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { OrderProduct } from "@/interfaces/order";
import { useOrderStore } from "@/store/order/order-store";
import { formatCurrency } from "@/utils/formatCurrency";

import { useEffect } from "react";
import { OptionsToOrder } from "../products/options/OptionsToOrder";
import { ProductWhitCategory } from "@/interfaces/product";



interface Props {
  product: ProductWhitCategory
}


export const AddToOrder = ({ product }: Props) => {

  const productToOrder = useOrderStore(state => state.productToOrder);
  const order = useOrderStore(state => state.order);

  const openOrderSidebarDetails = useOrderStore(state => state.openOrderSidebarDetails);
  const addProductToOrder = useOrderStore(state => state.addProductToOrder);
  const setProductToOrder = useOrderStore(state => state.setProductToOrder);

  useEffect(() => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { categoryId, description, identifier, ...restProduct } = product

    const prodToOrder: OrderProduct = {
      ...restProduct,
      quantity: 1,
      category: product.category.slug,
      subtotal: product.price,
      options: []
    }
    setProductToOrder(prodToOrder)
  }, [])

  const handleAddProductToOrder = () => {
    if (!productToOrder) return;
    // console.log(productToOrder)
    addProductToOrder(productToOrder)
    openOrderSidebarDetails()
  }

  if (!productToOrder) return null

  const productInOrder = order.find((prod: OrderProduct) => prod.id === productToOrder.id)

  if (productInOrder) {
    return (
      <div className="flex justify-center">
        Ya tienes este producto en la
        <span
          className="font-bold text-amber-500 underline cursor-pointer ml-2"
          onClick={openOrderSidebarDetails}
        >

          orden
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <section >


          <div className="flex flex-row flex-nowrap gap-2 text-2xl md:flex-wrap md:text-3xl">
            <p className="font-bold"> {formatCurrency(productToOrder!.subtotal)} </p>
          </div  >




        </section>

      </div>

      <button
        onClick={handleAddProductToOrder}
        className=' bg-amber-500 px-4 py-2 text-xl rounded-lg  w-1/2 hover:bg-amber-400'
      >

        Agregar a la orden
      </button>

      <OptionsToOrder />
    </div>
  )
}
