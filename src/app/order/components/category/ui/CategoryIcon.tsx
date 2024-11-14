
import Image from "next/image"

interface Props {
  url: string;
  alt: string
}
export const CategoryIcon = ({ alt, url }: Props) => {

  return (
    <figure className="my-2 h-12 w-12 relative m-auto">

      <Image
        fill
        src={url}
        alt={`imagen de la categoria ${alt}`}

      />
    </figure>
  )
}
