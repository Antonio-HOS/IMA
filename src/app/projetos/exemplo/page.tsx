import Image from "next/image";
import { Header } from "../../components/Header";
import TituloPost from "../../components/TituloPost";
import TituloSimples from "../../components/TituloSimples";
import CardPosts from "../../components/CardPostsProjetos";
import { Dot, MousePointer2, MousePointerClick } from "lucide-react";
import Link from "next/link";
import BotaoNavegar from "../../components/BotaoNavegar";
import CardGrande from "../../components/CardGrande";
import { FooterIma } from "../../components/Footer";
import { ImgGaleria } from "../../components/ImgGaleria";
import { LinksImportantes } from "@/app/components/LinksImportantes";

export default function Exemplo() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen text-black">
      <Header />
      <TituloPost title="ACCB" image="/assets/background/Uesc.jpg" />

      {/* Imagem */}
      <div className=" w-[785px] h-[467px] px-[49px] py-5 bg-white rounded-tl-[30px] rounded-br-[30px] mx-auto mt-28">
        <div className="w-[680px] h-[420px] relative">
          <Image
            src="/assets/posts/rede_neural.png"
            alt="Descrição da Imagem"
            layout="fill"
            objectFit="cover"
            className="rounded-tl-[30px] rounded-br-[30px]"
          />
        </div>
      </div>
      <p className="text-justify mb-4 w-[60%] mx-auto mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
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

      <LinksImportantes
        link1="https://boletimaccb.ccam.uesc.br"
        link2="https://www.uesc.br/editora/livrosdigitais2023/accb-2022.pdf"
        link3=""
        link4=""
      />
      <FooterIma />
    </div>
  );
}
