import Image from "next/image"

export const Featured = () => {
    return (

        <section className="lg:flex-row-reverse lg:h-max-[492px] pt-20 flex w-full flex-col bg-white" >
            <figure className="hidden lg:block lg:w-[39%] relative">
                <Image
                    src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/featured_Tile_Desktop_e086fa9a29.jpg"
                    fill
                    className="h-full w-full object-cover"
                    alt="McDonald's Hamburguesa"
                />
            </figure>
            <figure className="h-[300px] sm:h-[400px]  lg:hidden lg:w-[39%] relative">
                <Image
                    src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/featured_Tile_Mobile_ad909f4648.jpg"
                    fill
                    className="h-full w-full object-fill sm:object-contain sm:object-right"
                    alt="McDonald's Hamburguesa"
                />
            </figure>
            <aside className="flex flex-col gap-8 p-8 lg:w-[61%] lg:px-[104px] lg:py-14">
                <header className="flex h-full flex-col justify-center gap-4">
                    <h1 className="text-[32px] font-bold leading-9 tracking-[-0.15px] lg:text-5xl lg:leading-[54px]">McDonald's</h1>
                    <p className="text-sm leading-4 tracking-[-0.15px] lg:text-lg">Más que una hamburguesería</p>
                </header>
                <section className="flex flex-col gap-4">
                    <p className="text-2xl font-bold tracking-[-0.15px] lg:text-[32px] lg:leading-9">
                    </p>
                    <ul>

                    </ul>
                </section>
            </aside>
        </section>

    )
}
