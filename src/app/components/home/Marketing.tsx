import Image from "next/image"

export const Marketing = () => {
    return (


        <div className="flex flex-col md:flex-row  md:h-[300px] ">
            <figure className="relative w-full h-[150px] md:h-[300px]">
                <Image
                    fill
                    alt="marketing image 1"
                    className="object-top object-contain md:object-fill" src="https://mcd-landings-l-statics.appmcdonalds.com/uploads-live/BT_21_AR_580x250_5_1_a76a3019d6_2822fdf603.jpg"
                />
            </figure>
            <figure className="relative w-full  h-[150px] md:h-[300px]">
                <Image
                    fill
                    alt="marketing image 2"
                    className="object-top object-contain md:object-fill" src="https://mcd-landings-l-statics.appmcdonalds.com/uploads-live/BANNER_WEB_580x250px_2_3c450d9454.jpg"
                />
            </figure>
            <figure className="relative w-full  h-[200px] md:h-[300px]">
                <Image
                    fill
                    alt="marketing image 3"
                    className="object-fill object-top" src="https://mcd-landings-l-statics.appmcdonalds.com/uploads-live/Mc_D_R_Banner_Web_Mobile_Sonic_3_320px480px_848c910444.jpg"
                />
            </figure>







        </div>





    )
}
