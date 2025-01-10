'use client'
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

import { useOrderStore } from "@/store/order/order-store";
import { formatCurrency } from "@/utils/formatCurrency";
import { ProductOption } from "@/interfaces/product";


interface Props {

    min?: number;
    max?: number;
    option: ProductOption;
}



export const QuantityOptionButton = ({ max, option }: Props) => {

    const increaseOptionToOrder = useOrderStore(state => state.increaseOptionToOrder);
    const decreaseOptionToOrder = useOrderStore(state => state.decreaseOptionToOrder);
    const productToOrder = useOrderStore(state => state.productToOrder);
    const currentOpt: ProductOption = productToOrder?.options.find(opt => opt.id === option.id)


    return (
        <div className="relative my-2 flex items-center justify-between rounded-2xl border border-gray-500 py-1 px-2 store-quantity-selector--small">

            <span className="absolute -left-20">{currentOpt?.subtotal > 0 && formatCurrency(currentOpt.subtotal)}</span>
            <button
           
                className={`${currentOpt?.quantity === 0 && 'text-slate-400'} px-3`}
                onClick={() => decreaseOptionToOrder(option)}
                disabled={currentOpt?.quantity === 0}
            >
                <IoRemoveSharp />
            </button>
            <div
                className="px-3"
            >{currentOpt?.quantity ?? 0}</div>
            <button
                disabled={currentOpt?.quantity === max}
                className={`${currentOpt?.quantity === max && 'text-slate-400'} px-3`}
                onClick={() => increaseOptionToOrder(option)}

            >
                <IoAddSharp />
            </button>
        </div>
    )
}
