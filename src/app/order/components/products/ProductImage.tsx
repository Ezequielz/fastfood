
import Image from "next/image"

interface Props {
  url: string;
  alt: string
  className?: string
  h?: number
  w?: number
}
export const ProductImage = ({ alt, url, className, h = 200, w = 200 }: Props) => {

  return (
    <figure className={`${className ? className : ''} relative m-auto w-full`}>

      <Image
        height={h}
        width={w}
        src={url}
        alt={`imagen de la categoria ${alt}`}
        unoptimized
        className=""

      />
    </figure>
  )
}
