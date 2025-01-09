'use client';

import { useOrderStore } from '@/store/order/order-store';
import clsx from 'clsx';

import { IoCloseOutline } from 'react-icons/io5';

import { formatCurrency } from '@/utils/formatCurrency';
import { useEffect, useMemo, useState } from 'react';


import { createOrder } from '@/actions/order/create-order';
import { useRouter } from 'next/navigation';
import { OrderProductDetails } from '@/app/(fastfood)/order/components/OrderProductDetails';



export const SidebarOrder = () => {

    const router = useRouter()
    const order = useOrderStore(state => state.order);
    const isOrderSidebarDetailsOpen = useOrderStore(state => state.isOrderSidebarDetailsOpen);
    const [creatingOrder, setCreatingOrder] = useState(false)

    const closeOrderSidebarDetails = useOrderStore(state => state.closeOrderSidebarDetails);
    const clearOrder = useOrderStore(state => state.clearOrder);
    const totalPrice = useMemo(() => order.reduce((acc, product) => acc + (product.subtotal), 0), [order])

    const handleCreateOrder = async () => {
        setCreatingOrder(true);
        const newOrder = order.map((product) => ({
            id: product.id,
            price: product.price,
            subtotal: product.subtotal,
            quantity: product.quantity,

            options: product.options.map((opt) => ({
                id: opt.id,
                quantity: opt.quantity,
                price: opt.price,
                subtotal: opt.subtotal,

            })),
        }));

        const { ok, orderCreated } = await createOrder({ newOrder, totalPrice });

        if (ok && orderCreated) {
            setCreatingOrder(false);
            router.push(`/order/${orderCreated.id}`)
            clearOrder()
            closeOrderSidebarDetails();
        }

        setCreatingOrder(false);
    };

    useEffect(() => {
        if (order.length >= 1) return;

        closeOrderSidebarDetails()
      
    }, [order,closeOrderSidebarDetails])
    

    return (
        <div>

            {/* Background black */}
            {
                isOrderSidebarDetailsOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />

                )
            }


            {/* Blur */}
            {
                isOrderSidebarDetailsOpen && (
                    <div
                        onClick={closeOrderSidebarDetails}
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
                            "translate-x-full": !isOrderSidebarDetailsOpen
                        }
                    )
                }>






                {/* Menú */}
                <header className='p-5'>
                    <IoCloseOutline
                        size={50}
                        className="absolute top-5 right-5 cursor-pointer"
                        onClick={() => closeOrderSidebarDetails()}
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

                <footer className='absolute bottom-0 bg-slate-500/10  w-full p-5 flex flex-col justify-center items-center gap-2'>

                    <p className='font-medium text-xl '>
                        TOTAL:
                        <strong className='ml-2 text-2xl'>

                            {formatCurrency(totalPrice)}
                        </strong>
                    </p>

                    <div className='flex gap-2'>
                        <button
                            className='px-5 py-2 text-sm font-light border-2 border-amber-200 bg-white
                            hover:bg-amber-400 hover:text-white'
                            onClick={closeOrderSidebarDetails}
                        >Seguir comprando</button>

                        {
                            !creatingOrder ? (
                                <button

                                    className='px-4 py-2 bg-white border-2 border-lime-400 hover:bg-lime-300 text-xl  rounded-lg'
                                    onClick={handleCreateOrder}
                                >
                                    Confirmar orden
                                </button>
                            ) : (
                                <button
                                    className='px-4 py-2 bg-lime-500 text-xl text-slate-100 rounded-lg'
                                    disabled
                                >
                                    Creando orden...
                                </button>
                            )
                        }
                    </div>

                </footer>

            </aside>





        </div>
    );
};