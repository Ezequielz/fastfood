
import { getOrderById } from "@/actions/order/get-order-by-id"
import { Order } from "@prisma/client"
import { ChangeOrderStatusBtn } from "./ChangeOrderStatusBtn";



interface Props {
  order: Order
}


export const OrderCard = async ({ order }: Props) => {

  const { ok, order: orderDetail } = await getOrderById(order.id);



  if (!ok || !orderDetail) {
    return (
      <div>
        <h1>Error al obtener la orden</h1>
      </div>
    )
  }
  const { OrderProducts, } = orderDetail


  return (
    <article className="p-2 border-2 border-gray-400 rounded-lg h-fit">
      <h4 className="text-center font-extrabold">Orden Nº{order.ordenNumber}</h4>
      <ul className="divide-y divide-gray-200 mb-4">
        {OrderProducts.map((product, index) => (
          <li key={index} className="py-2">
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-700">{product.product.name}</span>
              <span className="font-bold text-gray-900">{product.quantity}x</span>
            </div>

            <ul>
              {product.options.map(option => (
                <li key={option.id} className="odd:bg-slate-200">
                  <div className="flex justify-between text-xs ">
                    <span className="font-semibold text-gray-700/50">{option.option.name}</span>
                    <span className="font-semibold text-gray-900/70">{option.quantity}x</span>
                  </div>
                </li>

              ))}

            </ul>
          </li>
        ))}
      </ul>

      <ChangeOrderStatusBtn 
        order={order}
        
      >
        <span className="font-bold">Orden Lista</span>
      </ChangeOrderStatusBtn>


    </article>
  )
}
