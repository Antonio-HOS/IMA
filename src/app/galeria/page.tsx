import Image from "next/image";
import { Header } from "../components/Header";
import TituloPost from "../components/TituloPost";
import TituloSimples from "../components/TituloSimples";
import CardPosts from "../components/CardPostsProjetos";
import { MousePointer2, MousePointerClick } from "lucide-react";
import Link from "next/link";
import BotaoNavegar from "../components/BotaoNavegar";
import CardGrande from "../components/CardGrande";
import { FooterIma } from "../components/Footer";
import { ImgGaleria } from "../components/ImgGaleria";

export default function Galeria() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="Galeria" image="/assets/background/background.png" />
      <div className="flex mt-14 md:my-20" />
      <p className="text-black text-center text-xl mb-2 block md:hidden">Experimente clicar!</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mx-auto">
          <ImgGaleria
            text="Feira das profissões, UESC 2018."
            image="/assets/fotos/IMG_20181020_084622063.jpg"
          />
        
          <ImgGaleria
            text="Feira das profissões, UESC 2018."
            image="/assets/fotos/IMG_20181020_084627528.jpg"
          />
          <ImgGaleria
            text="Feira das profissões, UESC 2018."
            image="/assets/fotos/IMG_20181020_084658592.jpg"
          />
          <ImgGaleria
            text="Feira das profissões, UESC 2018."
            image="/assets/fotos/IMG_20181020_085634835.jpg"
          />
          <ImgGaleria
            text="Equipe IMA, Gramado."
            image="/assets/fotos/IMG-20220402-WA0002.jpg"
          />
       
        </div>
      </div>

      <FooterIma />
    </div>
  );
}
