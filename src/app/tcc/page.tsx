"use client";

import Image from "next/image";
import { Header } from "../components/Header";
import TituloPost from "../components/TituloPost";
import { FooterIma } from "../components/Footer";
import CardPosts from "../components/CardPosts";
import { useState, useEffect } from "react";

const data = {
  projetos: [
    {
      nome: "TCC: Rede Neural Artificial (RNA) na Previsão de Safras de Cacau",
      descricao:
        "Rede neural artificial (RNA) como ferramenta de auxílio na previsão de safras de cacau.",
      link: "sem link por enquanto",
    },
    {
      nome: "TCC: Segmentação de Amêndoas de Cacau",
      descricao:
        "Segmentação de amêndoas de cacau em imagens digitais de tábuas de corte.",
      link: "sem link por enquanto",
    },
    {
      nome: "TCC: Redes Neurais Convolucionais na Classificação de Amêndoas de Cacau",
      descricao:
        "Redes Neurais Convolucionais Aplicadas na Classificação de Amêndoas de Cacau.",
    },
  ],
};

export default function Tcc() {
  const [titulo, settitulo] = useState<string>("");

  useEffect(() => {
    if (window.innerWidth > 768) {
      settitulo("Projetos de Conclusão de Curso");
    } else {
      settitulo("TCC's IMA");
    }
  }, []);

  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost
        title={titulo}
        image="/assets/background/background.png"
      />
      <div className="flex my-20" />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
          {data.projetos.map((projeto, index) => (
            <CardPosts
              key={index}
              image="/assets/posts/rede_neural.png" // Você pode alterar as imagens de acordo com o projeto
              title={projeto.nome}
              text={projeto.descricao}
              link={projeto.link} // Verifica se o link está disponível
            />
          ))}
        </div>
      </div>
      <FooterIma />
    </div>
  );
}
