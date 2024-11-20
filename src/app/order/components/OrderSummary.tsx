'use client';

import { useOrderStore } from '@/store/order/order-store';
import clsx from 'clsx';

import { IoCloseOutline } from 'react-icons/io5';
import { OrderProductDetails } from './OrderProductDetails';
import { formatCurrency } from '@/utils/formatCurrency';
import { useMemo } from 'react';


export const OrderSummary = () => {

  const order = useOrderStore(state => state.order);
  const isOrderSummaryOpen = useOrderStore(state => state.isOrderSummaryOpen);
  const closeOrderSummary = useOrderStore(state => state.closeOrderSummary);

  const totalPrice = useMemo(() => order.reduce((acc, product) => acc + (product.subtotal), 0), [order])

  return (
    <div>

      {/* Background black */}
      {
        isOrderSummaryOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />

        )
      }


      {/* Blur */}
      {
        isOrderSummaryOpen && (
          <div
            onClick={closeOrderSummary}
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
              "translate-x-full": !isOrderSummaryOpen
            }
          )
        }>






        {/* Menú */}
        <header className='p-5'>
          <IoCloseOutline
            size={50}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => closeOrderSummary()}
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

          <button className='px-4 py-2 bg-amber-500 hover:bg-amber-400 text-xl text-slate-100 rounded-lg'>
            PAGAR
          </button>
        </footer>

      </aside>





    </div>
  );
};