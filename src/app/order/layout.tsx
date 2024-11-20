import { OrderNavbar } from "./components/OrderNavbar";
import { OrderSummary } from "./components/OrderSummary";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>

            <OrderNavbar />
            <div className="md:flex">
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll px-5">
                    {children}
                </main>
             
            </div>
            <OrderSummary />
        </>
    )
}
