import { type Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface Props {
  category: Category
}
export const CategoryIcon = ({ category }: Props) => {

  return (
    <div className="flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b">

      <figure className="w-16 h-16 relative">

        <Image
          fill
          src={category.imageUrl}
          alt={`imagen de la categoria ${category.name}`}

        />
      </figure>
      <Link
        href={`/order/${category.slug}`}
        className="text-xl font-bold"
      >
        {category.name}
      </Link>
    </div>
  )
}
