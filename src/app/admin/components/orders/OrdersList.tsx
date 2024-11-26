/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
import useSWR from "swr";
import { Order, Status } from "@prisma/client";
import { ChangeOrderStatusBtn } from "./ChangeOrderStatusBtn";
import Link from "next/link";

interface Props {
    status?: Status;
    link?: boolean
}


export const OrdersList = ({ status, link }: Props) => {

    const URL = `/admin/orders/api${status && `?status=${status}`}`

    const fetcher = () => fetch(URL).then(res => res.json()).then(data => data)
    const { data: orders, error } = useSWR<Order[]>(URL, fetcher, {
        refreshInterval: 500
    })


    if (!orders) {
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
                    orders.map(order => (
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
                orders.map(order => (
                    <ChangeOrderStatusBtn
                        key={order.id}
                        orderId={order.id}
                        orderStatus={order.status}

                    >
                        {order.ordenNumber}
                    </ChangeOrderStatusBtn>
                ))
            }


        </section>
    )
}
