import { type Category } from "@prisma/client"
import { CategoryIcon } from "./ui/CategoryIcon"
import Link from "next/link"

interface Props {
  category: Category
}
export const CategoryCard = ({ category }: Props) => {
  return (
    
    <Link
      href={`/order/${category.slug}`}
      className="hover:scale-105 m-auto"
    >
      <div className=" md: flex w-[5.5rem] flex-col justify-center items-center p-2 md:w-full md:max-w-[6.5rem]">


        <CategoryIcon
          key={category.id}
          url={category.imageUrl}
          alt={category.name}
        />


        <p className="min-h-[32px] text-center text-[10px] 2xl:text-sm">
          {category.name}
        </p>

      </div>
    </Link>

  )
}
