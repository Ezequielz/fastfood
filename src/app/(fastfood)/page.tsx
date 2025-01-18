
import { Featured } from "../components/home/Featured";
import { BannerMain } from "../components/home/BannerMain";
import { Marketing } from "../components/home/Marketing";
import { Titles } from "../components/home/Titles";
import { Navbar } from "../components/ui/Navbar";
import { NavbarMenu } from "../components/ui/NavbarMenu";
import { Carousel } from "../components/home/Carousel";
import { Accordion } from "../components/home/Accordion";


export default function Home() {

  return (
    <>


      <div className="absolute top-0 left-0 w-full">

        <Navbar color="white" />
      </div>


      <div className="relative">

        <div
          className="bg-gradient-to-r from-[#292929b3] w-full h-full absolute "
        />
        <BannerMain />
      </div>


      <NavbarMenu basic />

      <Featured />
      <Marketing />
      <Titles />
      <Carousel />
      <Accordion />


    </>
  );
}
