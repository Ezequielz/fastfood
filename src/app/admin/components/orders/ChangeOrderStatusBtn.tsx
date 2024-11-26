'use client'

import { changeOrderStatus } from "@/actions/order/changeOrderStatus"
import { Order, Status } from "@prisma/client"
import { useState } from "react"

interface Props {
    order: Order;
    children: React.ReactNode;
}

export const ChangeOrderStatusBtn = ({ order, children }: Props) => {
    const [error, setError] = useState<undefined | string>(undefined)

    const handleOrderStatus = async () => {

        let newStatus: Status | undefined;

        if (order.status === Status.cancel) {
            setError("No se puede cambiar el estado de una orden cancelada");
            return;
        }
        
        switch (order.status) {
            case Status.pending:
                newStatus = Status.creating;
                break;
            case Status.creating:
                newStatus = Status.done;
                break;
            case Status.done:
                newStatus = Status.delivered;
                break;
            default:
                newStatus = undefined; // Opcional para manejar casos fuera de lo esperado
                break;
        }

        if (!newStatus) {
            setError("Estado no válido para cambiar");
            return;
        }
        const { ok } = await changeOrderStatus({ orderId: order.id, status: newStatus })

        //TODO agregar toast de exito o error al cambiar estado de orden
        if (!ok) {
            setError('Error al cambiar el estado de la orden')
        }
    }

    console.log(error)
    return (
        <button
            onClick={handleOrderStatus}
            className=" rounded-lg p-2 border-2 border-slate-300 hover:bg-slate-300"

        >
            {children}
        </button>
    )
}
