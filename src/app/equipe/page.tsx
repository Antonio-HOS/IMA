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
import CardPerfil from "../components/CardPerfil";

const data = {
  "names": [
    "Antonio Henrique Oliveira santos",
    "Bruno de Souza Santos",
    "Cristiano Oliveira Santos",
    "Davi Silva Oliveira",
    "Eduardo Santos Silva",
    "Eduardo Silva Oliveira",
    "Eduardo OliveiraSouza",
    "Antonio Henrique Oliveira santos",
    "Bruno de Souza Santos",
    "Cristiano Oliveira Santos",
    "Davi Silva Oliveira",
    "Eduardo Santos Silva",
    "Eduardo Silva Oliveira",
    "Eduardo OliveiraSouza",
    "Antonio Henrique Oliveira santos",
    "Bruno de Souza Santos",
    "Cristiano Oliveira Santos",
    "Davi Silva Oliveira",
    "Eduardo Santos Silva",
    "Eduardo Silva Oliveira",
    "Eduardo OliveiraSouza",
    "Antonio Henrique Oliveira santos",
    "Bruno de Souza Santos",
    "Cristiano Oliveira Santos",
    "Davi Silva Oliveira",
    "Eduardo Santos Silva",
    "Eduardo Silva Oliveira",
    "Eduardo OliveiraSouza",
  ]
};

export default function Equipe() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="Equipe" image="/assets/background/background.png" />
      <div className="flex my-20" />
      <div className="flex justify-center flex-col text-black">
        <h1 className="text-4xl itim ml-20 mb-5">Cordenadores do projeto IMA:</h1>
        <div className="flex justify-evenly">
          <CardPerfil
            nome="Marta M. Dornelles"
            image="/assets/posts/rede_neural.png"
            link=""
          />
          <CardPerfil
            nome="César Alberto Bravo Pariente"
            image="/assets/posts/rede_neural.png"
            link=""
          />
        </div>

        <h1 className="text-4xl itim ml-20 mb-5 mt-10">Professora envolvida:</h1>
        <div className="flex justify-evenly">
          <CardPerfil
            nome="Martha Ximena Torres Delgado"
            image="/assets/posts/rede_neural.png"
            link=""
          />
        </div>
        
        <h1 className="text-4xl itim text-center mb-5 mt-10">Alunos que contribuíram:</h1>
        <div className="grid grid-cols-2 gap-4 w-11/12 mx-auto">
          {data.names.map((name, index) => (
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
