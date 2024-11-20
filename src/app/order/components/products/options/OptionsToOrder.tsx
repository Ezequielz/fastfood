'use client'
import { IoClose } from "react-icons/io5";

import { useOrderStore } from "@/store/order/order-store";

export const OptionsToOrder = () => {

    const productToOrder = useOrderStore(state => state.productToOrder);
    const removeOptionsToOrder = useOrderStore(state => state.removeOptionsToOrder);
    if (!productToOrder?.options || productToOrder?.options.length === 0) return null;

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg p-2">Agregados</h4>

                <div>

                    <button
                        onClick={removeOptionsToOrder}
                        className=" flex gap-2 items-center px-2  text-red-500 hover:text-red-700 rounded-lg  border-2 border-red-500 hover:bg-red-500/20"
                    >
                        <span>Eliminar todos</span> <IoClose size={20} />
                    </button>
                </div>




            </div>
            <hr className="border-2" />

            <div className="flex flex-col ">

                {
                    productToOrder?.options.map(option => (
                        <div key={option.id} className="odd:bg-slate-500/20 flex justify-between">
                            <p>
                                {option.name}
                            </p>
                            <span >
                                x {option.quantity}
                            </span>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}
