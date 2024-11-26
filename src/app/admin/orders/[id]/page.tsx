import { Suspense } from "react";
import { AdminOrder } from "./components/AdminOrder";



interface Props {
    params: Promise<{ id: string }>
}


export default async function AdminOrderIdPage({ params }: Props) {

    const { id: orderId } = await params;

    return (
        <Suspense fallback={<div>Cargando...</div>}>
       
            <AdminOrder orderId={orderId} />
        </Suspense>
    );
}