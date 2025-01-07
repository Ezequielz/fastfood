import Image from "next/image"

export const Titles = () => {
    return (
        <div data-block="block.background-tiles" data-v-517ce1f5="">
            <div className="flex flex-col items-center justify-center gap-6 md:mt-5 md:flex-row md:flex-wrap md:gap-2 md:px-5 lg:flex-row lg:px-14" data-v-517ce1f5="">

                <section className="relative h-[504px] max-w-[360px] lg:h-[600px] lg:max-w-[424px]">
                    <Image fill className="absolute z-0 h-full w-full object-cover" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/marketing1_35cb4d3abf.jpg" alt="McDonald's marketing" title="McDonald's marketing" />
                    <div className="relative z-[9] flex h-full flex-col justify-end px-4 py-8 lg:px-12 lg:py-14">
                        <header className="flex flex-col gap-4">
                            <h2 className="text-lg font-bold leading-6 tracking-[-0.15px] lg:text-2xl lg:leading-8">Recibí tu pedido o retiralo en el restaurante que prefieras</h2>
                            <p className="text-sm leading-4 tracking-[-0.15px]"> </p>

                        </header>

                    </div>
                </section>
                <section className="relative h-[504px] max-w-[360px] lg:h-[600px] lg:max-w-[424px]">
                    <Image fill className="absolute z-0 h-full w-full object-cover" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/marketing2_b7d0655866.jpg" alt="McDonald's marketing" title="McDonald's marketing"/>
                        <div className="relative z-[9] flex h-full flex-col justify-end px-4 py-8 lg:px-12 lg:py-14">
                            <header className="flex flex-col gap-4">
                                <h2 className="text-lg font-bold leading-6 tracking-[-0.15px] lg:text-2xl lg:leading-8">Disfrutá de grandes descuentos y beneficios solo por registrarte</h2>
                                <p className="text-sm leading-4 tracking-[-0.15px]"> </p>

                            </header>

                        </div>
                </section>
                <section className="relative h-[504px] max-w-[360px] lg:h-[600px] lg:max-w-[424px]">
                    <Image fill className="absolute z-0 h-full w-full object-cover" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/marketing3_de8e7ab735.jpg" alt="McDonald's marketing" title="McDonald's marketing" />
                    <div className="relative z-[9] flex h-full flex-col justify-end px-4 py-8 lg:px-12 lg:py-14">
                        <header className="flex flex-col gap-4">
                            <h2 className="text-lg font-bold leading-6 tracking-[-0.15px] lg:text-2xl lg:leading-8">La experiencia Mc Donald’s 100% pensada para vos y para los tuyos</h2>
                            <p className="text-sm leading-4 tracking-[-0.15px]"> </p>

                        </header>

                    </div>
                </section>

            </div>
        </div>
    )
}
