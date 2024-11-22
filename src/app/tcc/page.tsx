"use client";

import Image from "next/image";
import { Header } from "../components/Header";
import TituloPost from "../components/TituloPost";
import { FooterIma } from "../components/Footer";
import CardPosts from "../components/CardPostsProjetos";
import { useState, useEffect } from "react";
import CardPostsBancas from "../components/CardPostsBancas";
import { data } from "../data/projetos";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {data.bancas.map((projeto, index) => (
            <CardPostsBancas
              key={index}
              image={projeto.imagem} // Você pode alterar as imagens de acordo com o projeto
              title={projeto.titulo}
              aluno={projeto.aluno}
              ano={projeto.ano.toString()}
              autores={projeto.autores}
            />
          ))}
        </div>
      </div>

      <FooterIma />
    </div>
  );
}
