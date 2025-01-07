import Image from "next/image"

export const Carousel = () => {
    return (
        <div data-block="block.carousel-wide" data-v-517ce1f5="">
            <div className="p-4 md:px-14 md:py-10" data-v-517ce1f5="">
                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-autoheight swiper-watch-progress mx-auto h-fit max-h-[520px] max-w-[1200px] rounded-lg" >

                    <div className="relative h-[310px] w-full">
                        <Image
                            fill
                            className="object-contain"
                            src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/Banner_nueva_web_1328x340_e3a4b63e67.webp"
                            alt="McDonald's App"
                        />


                    </div>

                </div>
            </div>
        </div>

    )
}
