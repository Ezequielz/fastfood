
import { OrderDetails } from "@/app/(fastfood)/order/components/OrderDetails";

import Link from "next/link";

export default async function Order({ params }: { params: { id: string } }) {
  const { id: orderId } = params;

  return (
    <article className="w-full max-w-2xl mx-auto mt-8 p-2 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-end border-b pb-2">
        {/* <h1 className="text-3xl font-bold text-red-600">Orden </h1> */}
        <span className='px-4 py-2 text-sm font-semibold rounded-full bg-green-500 text-white'>
          Retirar pedido en mostrador
        </span>
      </div>

      {/* Order Details */}
      <OrderDetails orderId={orderId}/>

      {/* Footer */}
      <div className="mt-6 text-center">
        <Link
          href={`/`}
          className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300">
          Volver al inicio
        </Link>
      </div>
    </article>
  );
}
