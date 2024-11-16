'use client'
import { type Category } from "@prisma/client"
import { CategoryIcon } from "./ui/CategoryIcon"
import Link from "next/link"
import { useParams } from "next/navigation"



interface Props {
  category: Category
}
export const CategoryCard = ({ category }: Props) => {
  const params = useParams()
  return (

    <Link
      href={`/order/${category.slug}`}
      className="hover:scale-105 m-auto"
    >

      <div className="relative md: flex w-[5.5rem] flex-col justify-center items-center p-2 md:w-full md:max-w-[6.5rem]">
  
        <CategoryIcon
          key={category.id}
          url={category.imageUrl ?? '/images/placeholder.jpg'}
          alt={category.name}
        />

        <p className={`${params.category === category.slug ? 'text-amber-500 text-[14px] 2xl:text-lg': ' text-[10px] 2xl:text-sm'}min-h-[32px] text-center`}>

          {category.name}
        </p>


      </div>
    </Link>

  )
}
