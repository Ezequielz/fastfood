'use client'

import { changeOrderStatus } from "@/actions/order/changeOrderStatus"
import { Status } from "@prisma/client"
import { useState } from "react"

interface Props {
    orderId: string;
    orderStatus?: Status;
    children: React.ReactNode;
    status?: Status
}

export const ChangeOrderStatusBtn = ({ orderId, orderStatus, children, status }: Props) => {
    const [error, setError] = useState<undefined | string>(undefined)

    const handleOrderStatus = async () => {

        if (status) {
            const { ok } = await changeOrderStatus({ orderId, status })
            if (!ok) {
                setError('Error al cambiar el estado de la orden')
            }
            return;
        
        }

        let newStatus: Status | undefined;
        
        switch (orderStatus) {
            case Status.pending:
                newStatus = Status.creating;
                break;
            case Status.creating:
                newStatus = Status.done;
                break;
            case Status.done:
                newStatus = Status.delivered;
                break;
            case Status.cancel:
                newStatus = Status.cancel;
                break;
            default:
                newStatus = undefined;
                break;
        }

        if (!newStatus ) {
            setError("Estado no válido para cambiar");
            return;
        }
        const { ok } = await changeOrderStatus({ orderId, status: newStatus })
   
        //TODO agregar toast de exito o error al cambiar estado de orden
        if (!ok) {
            setError('Error al cambiar el estado de la orden')
        }
    }

    console.log(error)
    return (
        <button
            onClick={handleOrderStatus}
            className=" rounded-lg border-2 border-slate-300 hover:bg-slate-300"

        >
            {children}
        </button>
    )
}
