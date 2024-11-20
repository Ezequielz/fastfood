
import Image from "next/image"
import { RiDeleteBin2Line } from "react-icons/ri";

import { formatCurrency } from "@/utils/formatCurrency"
import { OrderProduct } from '../../../interfaces/order';
import { useOrderStore } from "@/store/order/order-store";
import { QuantityProductButtons } from "./ui/QuantityProductButtons";


interface Props {
  product: OrderProduct
}


export const OrderProductDetails = ({ product }: Props) => {

  const removeProductFromOrder = useOrderStore(state => state.removeProductFromOrder);


  return (
    <article
      className='flex justify-between items-center'

    >


      <div className='flex items-center gap-2'>

        <Image
          src={product.imageUrl}
          alt={product.name}
          width={100}
          height={100}
          quality={75}
          unoptimized
        />
        <div className="relative">

          <p className='text-sm'>{product.name}</p>
          <p className='text-lg font-black'>{formatCurrency(product.subtotal)}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center">

        {
          product.quantity > 1 && (
            <div>

              <button
                className="border-[1px] border-red-500 text-red-500 rounded-full p-1 hover:scale-105 hover:text-red-600"
                onClick={() => removeProductFromOrder(product.id)}

              >
                <RiDeleteBin2Line />
              </button>
            </div>
          )
        }




        <div className="">
          <QuantityProductButtons
            prod={product}
            min={1}
            initialQuantity={product.quantity}
          />
        </div>
      </div>


    </article>
  )
}
