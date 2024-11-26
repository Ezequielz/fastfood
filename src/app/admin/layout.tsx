import { Sidebar } from "./components/ui/Sidebar";



export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className=" flex gap-2">


            <Sidebar />

            <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                {children}
            </main>

        </section>
    );
}


