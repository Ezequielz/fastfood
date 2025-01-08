import React from 'react'

export const ProductToOrderSkeleton = () => {
    return (
        <section className="mx-auto flex flex-col gap-5 p-5  md:grid md:w-[100%] md:grid-cols-[40%_1fr_55%] md:grid-rows-1 md:justify-center md:gap-0 lg:w-[75%]">
            <div className="w-full md:col-span-1 ">

                <div className="flex w-full flex-col md:sticky md:top-[9rem]">

                    <div
                        className="bg-slate-200 animate-pulse h-52 w-9/12 self-center"
                    />


                    <div className='bg-slate-300 animate-pulse w-44 m-auto h-10 mt-2' />

                    <div className='bg-amber-400 animate-pulse w-52 m-auto h-20 rounded-lg mt-2' />




                </div>
            </div>

            <div className="flex  flex-col  mt-0">

                <div
                    className='bg-slate-400 animate-pulse w-full m-auto h-10 mt-0'
                />

                <div
                    className='animate-pulse bg-slate-200 w-20 h-2 mt-0'

                />




            </div>
        </section>
    )
}
