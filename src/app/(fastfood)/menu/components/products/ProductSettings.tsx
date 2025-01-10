
'use client'


import { OptionsGroupWithRelations } from "@/interfaces/product"
import { OptionsGroups } from "./options/OptionsGroups"
import { useOrderStore } from "@/store/order/order-store"

interface Props {
    optionsGroups: OptionsGroupWithRelations[]
    productId: string
}

export const ProductSettings = ({optionsGroups, productId}: Props) => {
    const order = useOrderStore(store => store.order)

    const productInOrder = order.find((prod) => prod.id === productId)
    if (productInOrder) return null
    return (
        <section className="mt-4">
            <h3 className="text-lg font-bold md:text-3xl">
                Personaliza tu producto

            </h3>

            <OptionsGroups optionsGroups={optionsGroups} />


        </section>
    )
}
