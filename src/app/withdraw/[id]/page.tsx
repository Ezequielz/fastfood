import { getOrderById } from "@/actions/order/get-order-by-id";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

export default async function OrderWhithWraw({ params }: { params: { id: string } }) {
  const { id } = params;

  const { ok, order } = await getOrderById(id);

  if (!ok || !order) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold text-red-500">¡Orden no encontrada!</h2>
        <p className="text-sm text-gray-500">La orden con el ID proporcionado no existe.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold text-red-600">Orden #{order.ordenNumber}</h1>
        <span className='px-4 py-2 text-sm font-semibold rounded-full bg-green-500 text-white'>
          Retirar pedido en mostrador
        </span>
      </div>

      {/* Order Details */}
      <div className="space-y-6">
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
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <Link
          href={`/`}
          className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
