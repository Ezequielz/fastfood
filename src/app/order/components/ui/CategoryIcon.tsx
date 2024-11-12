import { type Category } from "@prisma/client"
import Image from "next/image"

interface Props {
    category: Category
}
export const CategoryIcon = ({category}: Props) => {
   
  return (
    <div className="flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b">
        <Image 
            width={64}
            height={64}
            src={category.imageUrl}
            alt={`imagen de la categoria ${category.name}`}

        />
    </div>
  )
}
