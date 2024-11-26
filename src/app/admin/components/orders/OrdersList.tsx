import { getOrders } from "@/actions/order/get-orders";
import { Status } from "@prisma/client";
import { ChangeOrderStatusBtn } from "./ChangeOrderStatusBtn";
import Link from "next/link";

interface Props {
    status?: Status;
    link?: boolean
}

export const OrdersList = async ({status, link}: Props) => {

    const { ok, orders } = await getOrders(status);
    if (!ok) {
        return (
            <div>
                <h1>Error al obtener las ordenes</h1>
            </div>
        )
    }

    if (link) {
        return (
            <section className="grid grid-cols-3 gap-2">
                {
                    orders!.map(order => (
                        <Link
                            href={`/admin/orders/${order.id}`}
                            key={order.id}
                            className="text-center rounded-lg p-2 border-2 border-slate-300 hover:bg-slate-300"
                            
                        >
                            {order.ordenNumber}
                        </Link>
                    ))
                
                }
            </section>
        )
    }

    return (
        <section className="grid grid-cols-4 gap-2">


            {
                orders!.map(order => (
                    <ChangeOrderStatusBtn
                        key={order.id}
                        order={order}
                    
                    >
                        {order.ordenNumber}
                    </ChangeOrderStatusBtn>
                ))
            }


        </section>
    )
}
