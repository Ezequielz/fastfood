
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
    <figure className={`${className ? className : ''} relative flex justify-center w-full`}>

      <Image
        height={h}
        width={w}
        src={url ?? '/images/placeholder.jpg'}
        alt={`imagen de la categoria ${alt}`}
        unoptimized
        quality={75}
        className=""

      />
    </figure>
  )
}
