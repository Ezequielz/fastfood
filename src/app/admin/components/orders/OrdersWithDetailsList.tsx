import { getOrders } from "@/actions/order/get-orders"
import { OrderCard } from "./OrderCard";
import { Status } from "@prisma/client";


export const OrdersWithDetailsList = async() => {

    const {ok, orders} = await getOrders(Status.creating);
    

    if (!ok) {
        return (
            <div>
                <h1>Error al obtener las ordenes</h1>
            </div>
        )
    }
  return (
    <section className="grid grid-cols-4 gap-2">

    {
        orders!.map( order => (
            
            <OrderCard key={order.id} order={order} />
        ))
    }


    </section>
  )
}
