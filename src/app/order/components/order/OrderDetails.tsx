

import { getOrderById } from "@/actions/order/get-order-by-id"
import { formatCurrency } from "@/utils/formatCurrency"


import Image from "next/image"

interface Props {
    orderId: string
}


export const OrderDetails = async ({ orderId }: Props) => {
    const { ok, order } = await getOrderById(orderId)

    if (!ok || !order) {
        return <div>Orden no encontrada</div>
    }

    return (
        <article className="space-y-6">
            <header className="flex gap-2 items-center">
                <h1 className="text-3xl font-bold">Orden</h1>
                <span className="text-3xl font-bold">- {order.ordenNumber}</span>

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
