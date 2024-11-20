'use client';

import { useOrderStore } from '@/store/order/order-store';
import clsx from 'clsx';

import { IoCloseOutline } from 'react-icons/io5';
import { OrderProductDetails } from './OrderProductDetails';
import { formatCurrency } from '@/utils/formatCurrency';
import { useMemo } from 'react';
import Link from 'next/link';


export const OrderDetail = () => {

    const order = useOrderStore(state => state.order);
    const isOrderDetailOpen = useOrderStore(state => state.isOrderDetailOpen);
    const closeOrderDetail = useOrderStore(state => state.closeOrderDetail);

    const totalPrice = useMemo(() => order.reduce((acc, product) => acc + (product.subtotal), 0), [order])

    return (
        <div>

            {/* Background black */}
            {
                isOrderDetailOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />

                )
            }


            {/* Blur */}
            {
                isOrderDetailOpen && (
                    <div
                        onClick={closeOrderDetail}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                    />

                )
            }

            {/* Sidemenu */}
            <aside
                className={
                    clsx(
                        "fixed  right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                        {
                            "translate-x-full": !isOrderDetailOpen
                        }
                    )
                }>






                {/* Menú */}
                <header className='p-5'>
                    <IoCloseOutline
                        size={50}
                        className="absolute top-5 right-5 cursor-pointer"
                        onClick={() => closeOrderDetail()}
                    />

                    <h3 className='text-4xl text-center font-black' >Mi pedido</h3>
                </header>


                {
                    order.length === 0 ? (
                        <div className='mt-10'>
                            <p className='text-xl text-center'>No hay productos en la orden</p>
                        </div>
                    ) : (
                        <div className='mt-10 px-5'>
                            {
                                order.map((product) => (
                                    <OrderProductDetails
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }
                        </div>

                    )
                }

                <footer className='absolute bottom-0 bg-amber-500/10  w-full p-5 flex justify-center items-center gap-2'>

                    <p className='font-medium text-xl '>
                        TOTAL:
                        <strong className='ml-2 text-2xl'>

                            {formatCurrency(totalPrice)}
                        </strong>
                    </p>

                    <Link
                        href='/order/summary'
                        className='px-4 py-2 bg-amber-500 hover:bg-amber-400 text-xl text-slate-100 rounded-lg'
                        onClick={closeOrderDetail}
                    >
                        Confirmar orden
                    </Link>
                </footer>

            </aside>





        </div>
    );
};