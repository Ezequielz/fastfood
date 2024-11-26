

import { OrderDetails } from "@/app/order/components/order/OrderDetails"
import { Status } from "@prisma/client"
import { ChangeOrderStatusBtn } from "../../components/orders/ChangeOrderStatusBtn"
import clsx from "clsx"



interface Props {
    orderId: string
}
export const AdminOrder = async ({ orderId }: Props) => {

    return (
        <section className="p-6 flex gap-2">


            <div className="w-2/3">

                <article className="w-2/3 mx-auto mt-8 p-2 bg-white rounded-lg shadow-lg">

                    <OrderDetails orderId={orderId} showStatus/>
                </article>
            </div>
            
            <section className="flex-1 p-6">

                <div className="flex flex-col gap-2">
                    <h4 className="text-center font-semibold text-xl">Marcar como:</h4>
                    <hr className="border-2 border-slate-200"/>
                    {Object.values(Status).map((status) => (
                        <ChangeOrderStatusBtn
                            orderId={orderId}
                            status={status}
                            key={status}
                        >
                            <h2 className={
                                clsx(
                                    "text-xl font-semibold capitalize p-2",
                                    {
                                        "bg-red-500 hover:bg-red-600": status === Status.cancel,
                                        "bg-yellow-500 hover:bg-yellow-600": status === Status.pending,
                                        "bg-green-500 hover:bg-green-600": status === Status.done,
                                        "bg-blue-500 hover:bg-blue-600": status === Status.delivered,
                                        "bg-cyan-500 hover:bg-cyan-600": status === Status.creating,
                                    
                                    }
                                )
                            }>

                                {status}

                            </h2>

                        </ChangeOrderStatusBtn>
                    ))}
                </div>
            </section>



        </section>
    )
}
