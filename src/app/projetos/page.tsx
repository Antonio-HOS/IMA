import Image from "next/image";
import { Header } from "../components/Header";
import TituloPost from "../components/TituloPost";
import { FooterIma } from "../components/Footer";
import CardPosts from "../components/CardPosts";

const data = {
  projetos: [
    {
      nome: "ACCB PRICE MINER",
      descricao:
        "Aplicação para Mineração Semi Automática de Preços para o Cálculo da Cesta Básica.",
      link: "sem link por enquanto",
      imagem: "/assets/posts/ACCB.png",
    },
    {
      nome: "INDICA",
      descricao:
        "Site desenvolvido no escopo do grupo Imagem & Ação por bolsista Probex.",
      link: "https://www.indica.uescbr",
      imagem: "/assets/posts/INDICA.png",
    },
    {
      nome: "CUBETTO",
      descricao:
        "Produzir atividades de aprendizado em linguagens de programação e eletrônica básica, utilizando a robótica como ferramenta educacional num campo de aplicação prática das atividades de ensino.",
      link: "sem link por enquanto",
      imagem: "/assets/posts/CUBETTO.png",
    },
    {
      nome: "Sequências Didáticas para Processamento de Imagens",
      descricao:
        "Elaboração de sequências didáticas para introduzir conceitos básicos de processamento de imagens digitais para o ensino médio, aplicando conceitos de matemática de forma interessante e prática.",
      link: "sem link por enquanto",
      imagem: "/assets/posts/rede_neural.png",
    },
    {
      nome: "TCC: Rede Neural Artificial (RNA) na Previsão de Safras de Cacau",
      descricao:
        "Rede neural artificial (RNA) como ferramenta de auxílio na previsão de safras de cacau.",
      link: "sem link por enquanto",
      imagem: "/assets/posts/rede_neural.png",
    },
    {
      nome: "TCC: Segmentação de Amêndoas de Cacau",
      descricao:
        "Segmentação de amêndoas de cacau em imagens digitais de tábuas de corte.",
      link: "sem link por enquanto",
      imagem: "/assets/posts/rede_neural.png",
    },
    {
      nome: "TCC: Redes Neurais Convolucionais na Classificação de Amêndoas de Cacau",
      descricao:
        "Redes Neurais Convolucionais Aplicadas na Classificação de Amêndoas de Cacau.",
      imagem: "/assets/posts/rede_neural.png",
    },
    {
      nome: "Plataforma Cacau",
      descricao:
        "Sistema para apoiar o cacauicultor na gerência de sua roça de cacau.",
      link: "https://www.plataformacacau.uesc.br",
      imagem: "/assets/posts/rede_neural.png",
    },
  ],
};

export default function Projetos() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="Projetos" image="/assets/background/background.png" />
      <div className="flex my-20" />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
          {data.projetos.map((projeto, index) => (
            <CardPosts
              key={index}
              image={projeto.imagem} // Você pode alterar as imagens de acordo com o projeto
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
