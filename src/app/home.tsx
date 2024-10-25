"use client";

import Image from "next/image";
import { Header } from "./components/Header";
import TituloPost from "./components/TituloPost";
import TituloSimples from "./components/TituloSimples";
import CardPosts from "./components/CardPosts";
import { MousePointer2, MousePointerClick } from "lucide-react";
import Link from "next/link";
import BotaoNavegar from "./components/BotaoNavegar";
import CardGrande from "./components/CardGrande";
import { FooterIma } from "./components/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

export default function Home() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="IMA" image="/assets/background/background.png" />
      <div className="flex my-5" />
      <TituloSimples title="Projetos:" title2="Projetos promovido pelo IMA" />
      <div className=" flex justify-center space-x-8 my-7">
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
      <BotaoNavegar text="Clique aqui para ver mais projetos" link="/" />

      <div className="flex flex-col space-y-9 my-7 items-center">
        <CardGrande
          title="Construção do Site imagem e ação."
          image="/assets/posts/rede_neural.png"
          link="/"
          text="Construção do mais novo site da Projeto IMA, com o objetivo de estreitar as  relações entre público e Universidade."
        />
        <CardGrande
          title="Construção do Blog Salobrinho."
          image="/assets/posts/rede_neural.png"
          link="/"
          text="Objetivo do blog é auxiliar os calouros que ingressam na UESC a se alocar no bairro de Salobrino-Ilheus e arredores."
        />
        <CardGrande
          title="Curso de criação de games em Python"
          image="/assets/posts/rede_neural.png"
          link="/"
          text="O projeto IMA vai oferecer aulas de Python de forma grauita para o público, o curso tem o objetivo de ensinar jovens a desenvolver jogos se a necessidade de conhecimento prévio."
        />
      </div>
      <FooterIma />
    </div>
  );
}
