
import { OrderDetails } from "@/app/order/components/order/OrderDetails"



interface Props {
    orderId: string
}
export const AdminOrder = async ({ orderId }: Props) => {




    return (
        <section className="p-6">
     
            <OrderDetails orderId={orderId} />

        </section>
    )
}
