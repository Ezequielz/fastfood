

export default function NamePage() {
  return (
    <section className="bg-slate-500 text-white p-10">
        <h1 className="font-bold text-3xl">Admin</h1>

        <p className="mt-2">Esto es un demostración de la administracion de la cocina, ordenes y entrega de pedidos de una local de comidas</p>

        <p className="mt-2">Ordenes, Cocina y Delivery son 3 pantallas independientes, conectadas entre si en tiempo real</p>

        <p className="mt-2">Cuando un cliente crea una orden, aparece la orden en la cocina como "orden pendiente", la cual el cocinero al darle click ve los detalles y la prepara y cuando finaliza la preparación, al darle clck el estado de la orden pasa a lista y se ve reflejada en la pantalla de delivery para que el cliente la retire en mostrador.</p>


        <p className="mt-2"> Home, es para volver a la pantalla principal de la app.</p>
        <p className="mt-2"> Ordenes, para ver y manejar el estado de cada orden.</p>
        <p className="mt-2"> Cocina, pantalla de la cocina donde sse puede ver las ordenes pendientes y al hacerle click pasan al estado de "en preparacion" y se detalla todo lo que incluye la orden.</p>
        <p className="mt-2">Delivery es la pantalla principal donde el cliente ve el estado de su orden para retirarlo en mostrador.</p>
    </section>
  );
}