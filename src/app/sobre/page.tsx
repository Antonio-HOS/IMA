import Image from "next/image";
import { Header } from "../components/Header";
import TituloPost from "../components/TituloPost";
import TituloSimples from "../components/TituloSimples";
import CardPosts from "../components/CardPosts";
import { MousePointer2, MousePointerClick } from "lucide-react";
import Link from "next/link";
import BotaoNavegar from "../components/BotaoNavegar";
import CardGrande from "../components/CardGrande";
import { FooterIma } from "../components/Footer";
import { ImgGaleria } from "../components/ImgGaleria";

export default function Sobre() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen text-black">
      <Header />
      <TituloPost title="Sobre" image="/assets/background/Uesc.jpg" />

      <div className="flex flex-col md:flex-row justify-center md:space-x-8 p-8 items-end mt-20">
        {/* Texto */}
        <div className="md:w-[30%] text-black ">
          <p className="text-justify mb-4">
            LLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            hendrerit elit, eget commodo lorem. Nullam neque nisl, ornare non ex
            ut, tempor fringilla elit. Nullam mattis interdum hendrerit.
            Suspendisse maximus, lorem rutrum pulvinar sollicitudin, justo
            tellus tempor libero, ac venenatis felis quam id ante. Nulla nec
            lorem ullamcorper ligula fringilla ultricies in in diam. Donec leo
            sapien, vulputate ut ante sit amet, viverra facilisis dui. In sit
            amet nisl pellentesque, lacinia erat id, laoreet ex. Aliquam mattis
            ullamcorper quam eu ultricies. Vivamus fermentum varius quam vitae
            fermentum. Nunc id sem leo. Cras vestibulum lorem urna, at cursus
            urna consectetur id. Integer tellus est, rutrum in risus in, commodo
            hendrerit erat.
          </p>
        </div>

        {/* Imagem */}
        <div className="md:w-[30%] mt-4 md:mt-0">
          <div className="w-[400px] h-[430px] relative">
            <Image
              src="/assets/posts/rede_neural.png"
              alt="Descrição da Imagem"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <p className="text-justify mb-4 w-[60%] mx-auto">
        LLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
        hendrerit elit, eget commodo lorem. Nullam neque nisl, ornare non ex ut,
        tempor fringilla elit. Nullam mattis interdum hendrerit. Suspendisse
        maximus, lorem rutrum pulvinar sollicitudin, justo tellus tempor libero,
        ac venenatis felis quam id ante. Nulla nec lorem ullamcorper ligula
        fringilla ultricies in in diam. Donec leo sapien, vulputate ut ante sit
        amet, viverra facilisis dui. In sit amet nisl pellentesque, lacinia erat
        id, laoreet ex. Aliquam mattis ullamcorper quam eu ultricies. Vivamus
        fermentum varius quam vitae fermentum. Nunc id sem leo. Cras vestibulum
        lorem urna, at cursus urna consectetur id. Integer tellus est, rutrum in
        risus in, commodo hendrerit erat.
      </p>
      <p className="text-justify mb-4 w-[60%] mx-auto">
        LLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
        hendrerit elit, eget commodo lorem. Nullam neque nisl, ornare non ex ut,
        tempor fringilla elit. Nullam mattis interdum hendrerit. Suspendisse
        maximus, lorem rutrum pulvinar sollicitudin, justo tellus tempor libero,
        ac venenatis felis quam id ante. Nulla nec lorem ullamcorper ligula
        fringilla ultricies in in diam. Donec leo sapien, vulputate ut ante sit
        amet, viverra facilisis dui. In sit amet nisl pellentesque, lacinia erat
        id, laoreet ex. Aliquam mattis ullamcorper quam eu ultricies. Vivamus
        fermentum varius quam vitae fermentum. Nunc id sem leo. Cras vestibulum
        lorem urna, at cursus urna consectetur id. Integer tellus est, rutrum in
        risus in, commodo hendrerit erat.
      </p>
      <FooterIma />
    </div>
  );
}
