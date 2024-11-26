

import { getOrderById } from "@/actions/order/get-order-by-id"
import { formatCurrency } from "@/utils/formatCurrency"
import { Status } from "@prisma/client";
import clsx from "clsx";


import Image from "next/image"

interface Props {
    orderId: string;
    showStatus?: boolean
}


export const OrderDetails = async ({ orderId, showStatus }: Props) => {
    const { ok, order } = await getOrderById(orderId)

    if (!ok || !order) {
        return <div>Orden no encontrada</div>
    }

    return (
        <article className="space-y-6 p-2">
            <header className="flex gap-2 items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-gray-700">Order</span>
                    <span className="text-xl font-semibold text-gray-800">Nº {order.ordenNumber}</span>
                </div>
                {
                    showStatus && (
                        <span className={
                            clsx(
                                "px-4 py-2 text-sm font-semibold rounded-full  text-white",
                                {
                                    "bg-red-500 hover:bg-red-600": order.status === Status.cancel,
                                    "bg-yellow-500 hover:bg-yellow-600": order.status === Status.pending,
                                    "bg-green-500 hover:bg-green-600": order.status === Status.done,
                                    "bg-blue-500 hover:bg-blue-600": order.status === Status.delivered,
                                    "bg-cyan-500 hover:bg-cyan-600": order.status === Status.creating,
                                }
                            )
                        }>
                            {order.status}
                        </span>
                    )
                }

            </header>
            <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">Total:</span>
                <span className="text-xl font-semibold text-red-600">{formatCurrency(order.total)}</span>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">Productos:</span>
                <span className="text-lg font-semibold text-gray-800">{order.quantityProducts}</span>
            </div>

            {/* Order Products */}
            <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-700">Detalles de la orden:</h2>
                <div className="space-y-4 mt-2">
                    {order.OrderProducts.map((product) => (
                        <div key={product.id} className="flex justify-between items-center border-b pb-2">
                            <div className="flex items-center space-x-3">
                                <div className="relative w-10 h-10  rounded-full text-white flex items-center justify-center font-bold">
                                    <Image
                                        src={product.product.imageUrl}
                                        alt={product.product.name}
                                        fill
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{product.product.name}</h3>
                                    <p className="text-sm text-gray-500">Cantidad: {product.quantity}</p>
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-gray-800">
                                {formatCurrency(product.subtotal)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}
