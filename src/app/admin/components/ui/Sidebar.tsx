'use client'
import { FaBarsStaggered } from "react-icons/fa6";

import { useUiStore } from "@/store/ui/ui-store"
import clsx from "clsx"
import Link from "next/link"


export const Sidebar = () => {

    const isSideMenuAdminOpen = useUiStore(state => state.isSideMenuAdminOpen)
    const toggleSideMenuAdmin = useUiStore(state => state.toggleSideMenuAdmin)


    return (
        <aside className={
            clsx(
                
                
                    " bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-40",
                
                {
                    "-translate-x-full ": !isSideMenuAdminOpen, // Oculto fuera de la vista
                    "translate-x-0": isSideMenuAdminOpen, // Visible en pantalla
                }
            )
        }>

            <button
                className={clsx(
                    "fixed top-4 p-2 bg-red-500 rounded-r-md  z-50 ",
                    {
                        "": !isSideMenuAdminOpen, // Botón en su posición inicial
                        "translate-x-72 transition-transform duration-500 ease-in-out": isSideMenuAdminOpen, // Botón movido al final del sidebar
                    }
                )}
                onClick={toggleSideMenuAdmin}
            >
                <FaBarsStaggered color="white"/>
            </button>
            <div >

                <nav className={
                    clsx(
                        "md:w-72 md:h-screen bg-white p-10",
                        {
                            "hidden": !isSideMenuAdminOpen
                        }
                    )
                }>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/admin/orders">Ordenes</Link>
                        </li>
                        {/* <li>
                <Link href="/admin/products">Productos</Link>
            </li> */}
                        <li>
                            <Link href="/admin/kitchen">Cocina</Link>
                        </li>
                        <li>
                            <Link href="/admin/delivery">Delivery</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </aside>
    )
}
