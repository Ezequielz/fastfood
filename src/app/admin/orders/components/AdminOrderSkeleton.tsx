

export const AdminOrderSkeleton = () => {
    return (
        <section className="p-6 flex gap-2">


            <div className="w-2/3">

                <article className="w-2/3 mx-auto mt-8 p-2 bg-white rounded-lg shadow-lg">

                    <article className="space-y-6 p-2">
                        <header className="flex gap-2 items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="text-xl font-medium text-gray-700">Order</div>
                                <div className="text-xl font-semibold text-gray-800">Nº

                                </div>
                                <div

                                    className="h-6 w-20 animate-pulse bg-slate-300"
                                />
                            </div>


                        </header>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">Total:</span>
                            <div

                                className="h-6 w-32 animate-pulse bg-slate-300"
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">Productos:</span>
                            <div

                                className="h-6 w-10 animate-pulse bg-slate-300"
                            />
                        </div>

                        {/* Order Products */}
                        <div className="mt-4">
                            <h2 className="text-xl font-bold text-gray-700">Detalles de la orden:</h2>
                            <div className="space-y-4 mt-2">

                                <div className="flex gap-2 items-center justify-between">
                                    <div

                                        className="h-10 w-10 animate-pulse bg-slate-300"
                                    />

                                    <div>
                                        <div

                                            className="h-4 w-32 animate-pulse bg-slate-300"
                                        />
                                        <div

                                            className="mt-2 h-2 w-32 animate-pulse bg-slate-300"
                                        />
                                    </div>

                                    <div

                                        className="h-6 w-32 animate-pulse bg-slate-300"
                                    />

                                </div>

                            </div>
                        </div>
                    </article>
                </article>
            </div>

            <section className="flex-1 p-6">

                <div className="flex flex-col gap-2">
                    <h4 className="text-center font-semibold text-xl">Marcar como:</h4>
                    <hr className="border-2 border-slate-200" />

                    <div
                        className="w-full h-10 bg-yellow-500 animate-pulse"
                    />
                    <div
                        className=" w-full h-10 bg-cyan-500 animate-pulse"
                    />
                    <div
                        className=" w-full h-10 bg-green-500 animate-pulse"
                    />
                    <div
                        className=" w-full h-10 bg-blue-500 animate-pulse"
                    />
                    <div
                        className=" w-full h-10 bg-red-500 animate-pulse"
                    />


                </div>
            </section>



        </section>
    )
}
