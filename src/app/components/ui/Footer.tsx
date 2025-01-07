import Link from 'next/link';
import { McDonalsIcon } from '../icons/SVGIcons';
import Image from 'next/image';

const usLinks = [
    {
        label: 'Restaurantes',
        href: '/'
    },
    {
        label: 'Quiénes Somos',
        href: '/'
    },
    {
        label: 'Trabaja con nosotros',
        href: '/'
    },
    {
        label: 'Con las familias',
        href: '/'
    },
    {
        label: 'Contacto',
        href: '/'
    },
    {
        label: 'Protección de datos Personales',
        href: '/'
    },
]


export const Footer = () => {
    return (
        <footer className="bg-white grid gap-10  px-4 py-10 md:grid-cols-5 md:gap-5 md:px-14 md:pb-36 md:pt-20 md:text-xs">
            <figure className="px-5 flex w-full md:col-span-2 md:justify-start md:place-self-start">
                <McDonalsIcon size={60} />
            </figure>

            {/*  */}
            <section className="flex w-full flex-col gap-10 md:col-span-2 md:col-start-4 md:grid md:grid-cols-2">

                {/* NOSOTROS */}
                <section className="flex flex-col cursor-pointer gap-2 md:cursor-auto" >
                    <strong className="text-lg font-bold leading-6 tracking-[-0.15px]" data-v-f7d45793="">Sobre Nosotros</strong>

                    <ul className="flex flex-col gap-2 md:gap-4" data-v-f7d45793="">
                        {
                            usLinks.map(({ href, label }, i) => (
                                <li key={i}>
                                    <Link
                                        href={href}
                                    >
                                        <span className="text-sm leading-4 tracking-[-0.15px]" data-v-f7d45793="">
                                            {label}
                                        </span>
                                    </Link>

                                </li>

                            ))
                        }


                    </ul>

                </section>
                {/* CONTACTO */}
                <section className="flex max-w-[170px] flex-col gap-8">
                    <p className="text-lg font-bold leading-6 tracking-[-0.15px]">Contacto</p>

                    <section className="flex flex-col gap-4">
                        <p className="text-sm leading-4 tracking-[-0.15px]" >Sigue disfrutando en

                            nuestras redes sociales</p>
                        <ul className="flex items-center gap-4 md:gap-2">

                            <li className='relative h-6 w-6'>
                                    <Image
                                        fill
                                        className="h-auto w-6" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/facebook_99ca6126ba.svg" alt="Facebook" />
                            </li>
                            <li className='relative h-6 w-6'>
                                    <Image
                                        fill
                                        className="h-auto w-6" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/Instagram_4589a4e2b5.svg" alt="Instagram" />
                            </li>
                            <li className='relative h-6 w-6'>
                                    <Image
                                        fill
                                        className="h-auto w-6" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/youtube_64c0c76917.svg" alt="Youtube" />
                            </li>
                            <li className='relative h-6 w-6'>
                                    <Image
                                        fill
                                        className="h-auto w-6" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/twitter_d0f8fded92.svg" alt="Twitter" />
                            </li>

                        </ul>
                    </section>
                    <section className="flex flex-col gap-4">
                        <p className="text-sm leading-4 tracking-[-0.15px]" >O descarga nuestra app y multiplica la diversión</p>
                        <ul className="flex flex-row flex-wrap items-center gap-2">

                            <li className=" relative h-6 w-[77px]">
                               
                                    <Image
                                        fill
                                        className="h-6 w-full" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/app_store_3x_d293084ca1_1e913036d8.webp" alt="iOS" />
                               
                            </li>
                            <li className=" relative h-6 w-[77px]">
                              
                                    <Image
                                        fill
                                        className="h-6 w-full" src="https://mcd-landings-q-static.appmcdonalds.com/uploads-quality/disponible_google_play_3x_c977cae3bc_626cd76465.webp" alt="Android" />
                              
                            </li>

                        </ul>
                    </section>
                </section>
            </section>

            <div className="w-full border-b-2 border-solid border-slate-500 md:col-span-5 md:mt-24 md:h-auto">
            </div>

            {/*  COPYRIGHT  */}
            <section data-test="mcd-footer__legal-brand" className="flex w-full flex-col gap-5 md:col-span-5 md:grid md:grid-cols-5 md:pb-4 md:pt-5">
                <div className="text-sm leading-4 tracking-[-0.15px] md:col-span-2 md:col-start-1 md:row-start-1 md:w-full md:justify-start">©2024 McDonald’s. All rights reserved</div>
                <div className="flex flex-col gap-5 text-sm leading-4 tracking-[-0.15px] md:col-span-2 md:col-start-4 md:w-full md:flex-row md:justify-end">
                    
                        <span>Política de privacidad</span>

                 
                    <a href="https://buenosaires.gob.ar/gobierno/atencion-ciudadana/defensa-al-consumidor" rel="nofollow noopener noreferrer" target="_self">

                        <span>Defensa del Consumidor</span>

                    </a>
                </div>
            </section>


        </footer>
    )
}
