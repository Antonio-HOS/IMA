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
import CardPerfil from "../components/CardPerfil";
import {participantes} from "../data/envolvidos";


export default function Equipe() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="Equipe" image="/assets/background/background.png" />
      <div className="flex my-20" />
      <div className="flex justify-center flex-col text-black">
        <h1 className="text-4xl itim mb-5 text-center">Cordenadores do projeto IMA:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto">
          <CardPerfil
            nome="Marta M. Dornelles"
            image="/assets/fotos/Marta.jpeg"
            link="http://lattes.cnpq.br/0053869533760582"
          />
          <CardPerfil
            nome="César Alberto Bravo Pariente"
            image="/assets/fotos/bravo.webp"
            link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do"
          />
        </div>

        <h1 className="text-4xl itim mb-5 mt-10 text-center">Professora envolvida:</h1>
        <div className="flex justify-evenly">
          <CardPerfil
            nome="Martha Ximena Torres Delgado"
            image="/assets/fotos/Ximena.jpeg"
            link="http://lattes.cnpq.br/5466915298318577"
          />
        </div>
        
        <h1 className="text-4xl itim text-center mb-5 mt-10">Partícipes:</h1>
        <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto">
          {participantes.map((name, index) => (
            <div key={index} className="text-xl text-center">
              • {name}
            </div>
          ))}
        </div>
      </div>

      <FooterIma />
    </div>
  );
}
