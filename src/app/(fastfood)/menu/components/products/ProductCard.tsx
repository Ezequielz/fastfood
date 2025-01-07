import Link from "next/link"
import { type Product } from "@prisma/client"
import { ProductImage } from "./ProductImage"
import { formatCurrency } from "@/utils/formatCurrency"


interface Props {
    product: Product
    categorySlug: string
}
export const ProductCard = ({ product, categorySlug }: Props) => {
    return (

        <Link
            className="hover-scale flex items-center cursor-pointer flex-col border-slate-200 border-2 overflow-hidden rounded-lg shadow-elevation-down"
            href={`/menu/${categorySlug}/${product.slug}`}
        >

            <div className=" md: flex flex-col  md:w-full">


                <ProductImage
                    key={product.id}
                    url={product.imageUrl ?? '/images/placeholder.jpg'}
                    alt={product.name}
                    className="flex h-40 md:h-52 items-end justify-center bg-slate-100"
                />


                <div className="min-h-[32px] p-2">

                    <p className="text-xs md:text-sm ">
                        {product.name}
                    </p>

                    <strong>
                        {formatCurrency(product.price)}
                    </strong>
                </div>


            </div>

        </Link>

    )
}
