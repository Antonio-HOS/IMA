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

export default function Projetos() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="Projetos" image="/assets/background/background.png" />
      <div className="flex my-20" />
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />

<CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
               <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
               <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
        <CardPosts
          image="/assets/posts/rede_neural.png"
          title="Rede neural artificial"
          text="ferramenta de auxílio na previsão de safras de cacau."
          link="/"
        />
      </div>
      </div>


      <FooterIma />
    </div>
  );
}
