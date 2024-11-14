
import Image from "next/image"

interface Props {
  url: string;
  alt: string
  className?: string
}
export const ProductImage = ({ alt, url, className }: Props) => {

  return (
    <figure className={`${className ? className : ''} relative m-auto w-full`}>

      <Image
        height={200}
        width={200}
        src={url}
        alt={`imagen de la categoria ${alt}`}
        unoptimized
        className=""

      />
    </figure>
  )
}
