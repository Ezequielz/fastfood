'use client'
import { useState } from "react";

interface Props {
    initialQuantity?: number;
    min?: number;
    max?: number;
}

export const QuantityButtons = ({ initialQuantity = 1, max }: Props) => {
    const [quantity, setQuantity] = useState(initialQuantity)
    return (
        <div className="my-2 flex items-center justify-between rounded-2xl border border-gray-500 py-1 px-2 store-quantity-selector--small">
            <button
                className={`${quantity === 0 && 'text-slate-300 '} px-3 `}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 0}
            >
                -
            </button>
            <div
            className="px-3"
            >{quantity}</div>
            <button
                disabled={quantity === max}
                className={`${quantity === max && 'text-slate-300'} px-3`}
                onClick={() => setQuantity(quantity + 1)}
            >
                +
            </button>
        </div>
    )
}
