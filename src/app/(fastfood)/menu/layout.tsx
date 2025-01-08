
import { SidebarOrder } from "@/app/components/ui/SidebarOrder";
import { NavbarMenu } from "@/app/components/ui/NavbarMenu";
import { Navbar } from "@/app/components/ui/Navbar";



export default function MenuLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>

            <Navbar />

            <NavbarMenu quantityIcons={16}/>
            <div className="md:flex">
                <main className="md:flex-1   px-5">
                    {children}
                </main>

            </div>
            <SidebarOrder />
        </>
    )
}
