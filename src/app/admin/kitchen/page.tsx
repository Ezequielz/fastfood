
import { OrdersWithDetailsList } from "../components/orders/OrdersWithDetailsList";
import { OrdersList } from "../components/orders/OrdersList";


export default function KitchenPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">Sección Cocina</h1>
      <div className="flex gap-2">
        
        <div className="w-3/4 border-2 border-slate-300 p-2 rounded-lg">
          <h2 className="text-xl font-semibold">Ordenes en preparación</h2>
          <hr className="border-2 border-slate-200 my-2"/>
          <OrdersWithDetailsList />
        </div>

        <div className="w-1/4 border-2 border-slate-300 p-2 rounded-lg">
          
          <h2 className="text-xl font-semibold">Ordenes pendientes</h2>
          <hr className="border-2 border-slate-200 my-2"/>
          <OrdersList />
        </div>
      </div>
    </section>
  );
}