import { Status } from "@prisma/client";
import { OrdersList } from "../components/orders/OrdersList";

export default function DeliveryPage() {
  return (
    <section className="flex gap-5 p-10">


      <div className="w-1/2 border-2 border-orange-300 p-2 rounded-lg">
        <h2 className="text-xl font-semibold">Ordenes en preparación</h2>
        <hr className="border-2 border-orange-200 my-2" />
        <OrdersList
          status={Status.creating}
        />
      </div>

      <div className="w-1/2 border-2 border-green-300 p-2 rounded-lg">

        <h2 className="text-xl font-semibold">Ordenes Listas</h2>
        <hr className="border-2 border-green-200 my-2" />
        <OrdersList
          status={Status.done}
        />
      </div>

    </section>
  );
}