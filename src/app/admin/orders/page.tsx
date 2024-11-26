import { OrdersList } from "../components/orders/OrdersList";
import { Status } from '@prisma/client';

export default function AdminOrdersPage() {

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">Ordenes</h1>

      <div className="flex  gap-4">
        {Object.values(Status).map((status) => (
          <div
            key={status}
            className="w-1/4 border-2 border-slate-300 p-2 rounded-lg"
          >
            <h2 className="text-xl font-semibold capitalize">{status}</h2>
            <hr className="border-2 border-slate-200 my-2"/>
        
            <OrdersList status={status} link/>
          </div>
        ))}
      </div>
    </section>
  );
}