
interface Props {
    quantityIcons?: number
}

export const NavbarMenuSkeleton = ({ quantityIcons = 8 }: Props) => {


    return (
        <div className="flex justify-center gap-2 px-5 bg-white">
            {
                Array.from({ length: quantityIcons }).map((icon, i) => (
                    <div
                        key={i}
                        className="w-fit flex flex-col justify-center items-center p-2"
                    >
                        <div
                            className="animate-pulse bg-slate-200 rounded-full w-12 h-12"
                        
                        />
                        <div
                        className="animate-pulse bg-slate-200 w-12 h-4 mt-1"
                        />
                    </div>


                ))
            }
        </div>
    )
}
