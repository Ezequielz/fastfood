'use client'
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { RiDeleteBin2Line } from "react-icons/ri";
import { OrderProduct } from "@/interfaces/order";
import { useOrderStore } from "@/store/order/order-store";


interface Props {
    initialQuantity?: number;
    min?: number;
    max?: number;
    prod: OrderProduct;
}

export const QuantityProductButtons = ({ initialQuantity = 1, max, prod }: Props) => {

    const increaseProductOrderQuantity = useOrderStore(state => state.increaseProductOrderQuantity);
    const decreaseProductOrderQuantity = useOrderStore(state => state.decreaseProductOrderQuantity);
    const removeProductFromOrder = useOrderStore(state => state.removeProductFromOrder);


    return (
        <div className="my-2 flex items-center justify-between rounded-2xl border border-gray-500 py-1 px-2">

            {
                prod.quantity === 1 ? (
                    <button
                        className="px-2"
                        onClick={ () => removeProductFromOrder(prod.id)}
                        disabled={prod.quantity > 1}
                    >
                        <RiDeleteBin2Line />
                    </button>
                ) : (

                    <button
                        className="px-2"
                        onClick={() => decreaseProductOrderQuantity(prod.id)}
                        disabled={prod.quantity <= 1 }
                    >
                        <IoRemoveSharp />
                    </button>
                )
            }
            <div
                className="px-2"
            >{initialQuantity}</div>
            <button
                disabled={prod.quantity === max}
                className={`${prod.quantity === max && 'text-slate-300'} px-2`}
                onClick={() => increaseProductOrderQuantity(prod.id)}
            >
                <IoAddSharp />
            </button>
        </div>
    )
}
