// import Image from 'next/image'
import React from 'react'

export const SummaryForm = () => {
    return (
        <section className="px-4 pb-[9rem] md:pb-0">

            <section className="mx-auto p-5 md:w-[100%] lg:w-[75%]">

                <h2 className="my-8 text-3xl font-bold">

                    Mi pedido
                </h2>

                <div className="my-4 flex flex-col gap-5 md:grid md:grid-cols-[55%_1fr_40%] md:grid-rows-1 md:justify-center md:gap-0">
                    <section className="flex w-full flex-col md:col-span-1">

                        <div className="my-4 w-full md:my-0">
                            <section>
                                <div className="my-1 mb-4 flex flex-row items-center justify-between md:mb-6">
                                    <h3 className="text-2xl font-bold md:text-lg">
                                        Productos</h3>
                                    <a className="cursor-pointer text-mcd-link underline">
                                        Limpiar</a>
                                </div>
                                <div data-test="cart-item" className="my-4 flex flex-row gap-4">
                                    {/* <Image src="https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2712_12nov24.png" alt="Doble Cuarto de Libra F1" className="h-14 w-14" /> */}
                                        <div className="w-full">
                                            <div className="mb-2 flex flex-row justify-between">
                                                <p className="line-clamp-1 max-w-[70%] text-sm">
                                                    Doble Cuarto de Libra F1</p>
                                                <div className="flex flex-row gap-1 text-sm">
                                             
                                                    <p data-test="cart-item__price" className="font-bold">
                                                        $&nbsp;8.400,00</p>
                                                </div>
                                            </div>
                                            <div className="mb-2 flex flex-row items-center justify-between gap-4">
                                             
                                            </div>
                                            <div className="flex flex-row items-center justify-between">
                                                <a href="/pedidos/carrito/0" className="flex cursor-pointer flex-row items-center gap-2" data-test="cart-item__edit">
                                                    <span className="block text-[10px] text-xs/4 text-mcd-link underline">
                                                        Editar</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="h-4 w-4">
                                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="#0F62FE">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <div data-v-1c6f02b6="" data-test="store-quantity-selector" className="my-2 flex items-center justify-between rounded-2xl border border-gray-500 p-2 store-quantity-selector--small">
                                                    <button data-v-1c6f02b6="" data-test="quantity-button--delete" className="quantity-button">
                                                        {/* <img data-v-1c6f02b6="" src="/images/icons/trash.svg" alt="delete"> */}
                                                    </button>
                                                    <div data-v-1c6f02b6="" className="store-quantity-value">
                                                        1</div>
                                                    <button data-v-1c6f02b6="" data-test="quantity-button--add" className="quantity-button">
                                                        {/* <img data-v-1c6f02b6="" src="/images/icons/add.svg" alt="add"> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                            </section>
                        </div>
                    </section>
                    <section className="flex w-full flex-col md:col-start-3 md:col-end-3">
                        <section className="flex flex-col gap-8">
                            <section data-test="cart-add-promotions" className="my-2 py-4 md:my-0 md:bg-mcd-secondaryIvory md:px-4 md:shadow-elevation-down">
                                <div className="flex flex-row items-center justify-between gap-4 md:min-h-[2.5rem]">
                                    <p className="text-sm text-mcd-secondaryDarkGrey">
                                        Códigos de descuento y promociones</p>
                                    <button is-secondary="" className="text-2xs btn-secondary px-4 py-[0.40rem] text-2xs">
                                        Agregar</button>
                                </div>
                                
                                
                            </section>
                            <div className="rounded-md p-3 shadow-elevation-down">
                                <section className="w-full">
                                    <div data-test="cart-amount-row--subtotal" className="my-3 flex flex-row items-center justify-between text-sm text-mcd-secondaryDarkGrey font-bold !text-mcd-black">
                                        <p>
                                            Subtotal</p>
                                        <span className="block">
                                            $&nbsp;8.400,00</span>
                                    </div>
                                    <div data-test="cart-amount-row--total" className="my-3 flex flex-row items-center justify-between text-sm text-mcd-secondaryDarkGrey font-bold !text-mcd-black mt-4">
                                        <p>
                                            Total</p>
                                        <span className="block">
                                            $&nbsp;8.400,00</span>
                                    </div>
                                </section>
                            </div>
                            <button data-test="btn-cart-next" className="btn-primary w-full">
                                Siguiente</button>
                        </section>
                    </section>
                </div>
            </section>
        </section>

    )
}
