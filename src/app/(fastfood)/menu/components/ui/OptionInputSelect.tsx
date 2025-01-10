'use client'


import { ProductOption } from "@/interfaces/product";
import { useOrderStore } from "@/store/order/order-store";


interface Props {
    option: ProductOption
}

export const OptionInputSelect = ({ option }: Props) => {

    const increaseOptionToOrder = useOrderStore(store => store.increaseOptionToOrder)
    const decreaseOptionToOrder = useOrderStore(store => store.decreaseOptionToOrder)
    const productToOrder = useOrderStore(store => store.productToOrder); 
    const isChecked = productToOrder?.options.some(opt => opt.id === option.id) || false;

    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       if ( event.target.checked ){
        increaseOptionToOrder(option)
       } else {
        decreaseOptionToOrder(option)
       }
    };


    return (
        <input
            type="checkbox"
            className='h-6 w-6'
            checked={isChecked} 
            onChange={handleCheckboxChange}
        />
    )
}
