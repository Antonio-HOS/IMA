"use client";

import Image from "next/image";
import { Header } from "./components/Header";
import TituloPost from "./components/TituloPost";
import TituloSimples from "./components/TituloSimples";
import CardPosts from "./components/CardPostsProjetos";
import { MousePointer2, MousePointerClick } from "lucide-react";
import Link from "next/link";
import BotaoNavegar from "./components/BotaoNavegar";
import CardGrande from "./components/CardGrande";
import { FooterIma } from "./components/Footer";
import { ImgGaleria } from "./components/ImgGaleria";

export default function Sobre() {
  return (
    <div className="bg-[#e4e4e4] min-h-screen text-black">
      <Header />
      <TituloPost title="Sobre" image="/assets/background/Uesc.jpg" />

      <div className="flex flex-col md:flex-row justify-center md:space-x-8 p-2 md:p-8 items-end mt-20">
        {/* Texto */}
    
        <div className="md:w-[30%] text-black ">
          <p className="text-justify mb-4">
          O projeto grupo IM&A iniciou em dezembro de 2016 com o objetivo de apoiar, promover e difundir o conhecimento ligado à ciência da computação para a comunidade interna e externa à UESC, conectando o ensino e a pesquisa à extensão. Desde 2017 vem oferecendo cursos de capacitação em alguns temas como: redes neurais, processamento de imagens, desenvolvimento mobile, e outros. Além disso, o grupo estabelece contatos com outros setores para a busca e desenvolvimento de projetos/parcerias que procurem integrar a teoria da sala de aula com a prática, produzindo conhecimento, capacitando o aluno e atendendo os setores envolvidos e comunidade como um todo. Dessa busca, surgiram parcerias com os projetos Acompanhamento do Custo da Cesta Básica – ACCB da UESC, com a CEPLAC- Comissão Executiva do Plano da Lavoura Cacaueira e com o projeto Indica da UESC.
          </p>
        </div>

        {/* Imagem */}
        <div className="w-[90%] md:w-[30%] mt-4 md:mt-0 mx-auto md:ml-auto">
  <div className="w-full h-[430px] relative ">
    <Image
      src="/assets/fotos/IMG-20220402-WA0002.jpg"
      alt="Descrição da Imagem"
      layout="fill"
      objectFit="cover"
      objectPosition="right"
      className="hover:rounded-none md:rounded-3xl transition-all duration-500 ease-in-out "
    />
  </div>
</div>


      </div>
      <p className="text-justify mb-4 w-[90%] md:w-[60%] mx-auto ">
      Algumas ações são também iniciativas do IM&A, como a criação de materiais didáticos para o ensino fundamental e médio com o objetivo de auxiliar o ensino de alguns assuntos, buscando fazer a ligação com a prática, a ciência e a universidade, como por exemplo:
      </p>
      <ul className="text-justify mb-4 w-[90%] md:w-[60%] mx-auto list-disc list-inside">
  <li>
    O CUBETTO que tem por objetivo produzir atividades de aprendizado em linguagens de programação e eletrônica básica, utilizando a robótica como ferramenta educacional num campo de aplicação prática das atividades de ensino;
  </li>
  <li>
    A elaboração de sequências didáticas para introduzir conceitos básicos de processamento de imagens digitais para o ensino médio, tendo como tema a esteganografia, contribuindo para o aprendizado de conceitos matemáticos inerentes ao tema;
  </li>
  <li>
    Dentre outros. Acredita-se assim que as ações do Grupo IM&A buscam atender os objetivos da extensão.
  </li>
</ul>

      <FooterIma />
    </div>
  );
}
