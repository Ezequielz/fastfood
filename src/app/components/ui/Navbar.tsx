import Link from "next/link"
import { McDonalsIcon } from "../icons/SVGIcons"

const NavLinks = [
  {
    name: "McCombos",
    slug: "mccombos",
  },
  {
    name: "McCafé",
    slug: "menues_mccafe",
  },
  {
    name: "Cajita Feliz",
    slug: "cajita_feliz",
  },


]

interface Props {
  color?: string
}

export const Navbar = ({color = 'black'}: Props) => {
  return (

    <div className="z-20 border border-transparent duration-250 relative h-fit bg-transparent transition-all ease-out md:h-[180px]">
      <div className="my-2 ml-2 mr-4 mx-auto md:mx-14 md:my-0">
        <header className="mx-auto flex h-fit items-center justify-between gap-2 md:min-h-[8rem]">
          <div className="flex flex-1 items-center gap-2 md:flex-none">
            <div className="block h-12 w-12">

            </div>
            <div className="grid h-12 w-12 place-content-center">

              <Link href={"/"} >
                <McDonalsIcon />
              </Link>

            </div>
          </div>

        </header>

        <nav className={`text-${color} mx-14  min-h-10 gap-2 text-lg md:flex md:flex-row md:items-center md:gap-12`}>

          {
            NavLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/menu/${link.slug}`}
                className="block rounded py-3 text-lg" >
                {link.name}
              </Link>
            ))
          }

        </nav>

      </div>
    </div>


  )
}
