import Image from "next/image";
import { Header } from "../components/Header";
import TituloPost from "../components/TituloPost";
import TituloSimples from "../components/TituloSimples";
import CardPosts from "../components/CardPosts/page";
import { MousePointer2, MousePointerClick } from "lucide-react";
import Link from "next/link";
import BotaoNavegar from "../components/BotaoNavegar";
import CardGrande from "../components/CardGrande/page";
import { FooterIma } from "../components/Footer";
import { ImgGaleria } from "../components/ImgGaleria";

export default function Galeria() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="Galeria" image="/assets/background/background.png" />
      <div className="flex my-20" />
      <div className="flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mx-auto">
          <ImgGaleria
            text="exemplo de texto"
            image="/assets/posts/rede_neural.png"
          />
            <ImgGaleria
              text="exemplo de texto"
              image="/assets/posts/rede_neural.png"
            />
          <ImgGaleria
            text="exemplo de texto"
            image="/assets/posts/rede_neural.png"
          />
          <ImgGaleria
              text="exemplo de texto"
              image="/assets/posts/rede_neural.png"
            />
          <ImgGaleria
            text="exemplo de texto"
            image="/assets/posts/rede_neural.png"
          />
          <ImgGaleria
              text="exemplo de texto"
              image="/assets/posts/rede_neural.png"
            />
        </div>
      </div>

      <FooterIma />
    </div>
  );
}
