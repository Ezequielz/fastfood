
import { Order } from "@prisma/client"



interface Props {
    order: Order
}


export const OrderCard = ({ order }: Props) => {
  return (
    <article className="p-2 border-2 border-gray-400 rounded-lg">
        <p>{order.ordenNumber}</p>
       


    </article>
  )
}
