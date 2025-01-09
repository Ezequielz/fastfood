import React from 'react'

export const ProductToOrderSkeleton = () => {
    return (
        <section className=" md:flex mt-7">
            <div className="md:w-2/5 flex justify-center md:justify-end px-5  ">

                <div className="w-2/3  flex flex-col justify-center">
                
                        <div
                            className="bg-slate-200 animate-pulse h-52 w-9/12 self-center"
                        />


                        <div className='bg-slate-300 animate-pulse w-44 m-auto h-10 mt-2' />

                        <div className='bg-amber-400 animate-pulse w-52 m-auto h-20 rounded-lg mt-2' />

                    </div>




             
            </div>
           
            <div className="mt-5 md:w-3/5 flex items-start md:px-20 flex-col  md:mt-0">

                <div
                    className='bg-slate-400 animate-pulse w-2/3 h-10 mt-0'
                />

                <div
                    className='mt-6 animate-pulse bg-slate-300 w-20 h-6 '

                />

                <div
                    className='mt-6 animate-pulse bg-slate-200 w-full h-3 '

                />
                <div
                    className='mt-1 animate-pulse bg-slate-200 w-4/5 h-3 '

                />
                <div
                    className='mt-1 animate-pulse bg-slate-200 w-full h-3 '

                />
                <div
                    className='mt-1 animate-pulse bg-slate-200 w-1/4 h-3 '

                />




            </div>
        </section>
    )
}
