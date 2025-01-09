import { Suspense } from "react";
import { AdminOrder } from "../components/AdminOrder";
import { AdminOrderSkeleton } from "../components/AdminOrderSkeleton";



interface Props {
    params: Promise<{ id: string }>
}


export default async function AdminOrderIdPage({ params }: Props) {

    const { id: orderId } = await params;

    return (
        <Suspense fallback={<AdminOrderSkeleton />}>
           
            <AdminOrder orderId={orderId} />
        </Suspense>
    );
}