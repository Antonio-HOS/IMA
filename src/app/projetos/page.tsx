import Image from "next/image";
import { Header } from "../components/Header";
import TituloPost from "../components/TituloPost";
import { FooterIma } from "../components/Footer";
import CardPosts from "../components/CardPostsProjetos";
import CardPostsBancas from "../components/CardPostsBancas";
import CardPostsResumosAnais from "../components/CardPostsResumosAnais";
import CardPostsProjetosDeEnsino from "../components/CardPostsProjetosDeEnsinos";
import { Titulo2 } from "../components/titulo2";
import { data } from "../data/projetos";


export default function Projetos() {
  return (
    <div className="bg-[#d2d2d2] min-h-screen">
      <Header />
      <TituloPost title="Projetos" image="/assets/background/background.png" />
      <div className="flex  my-14 md:my-20" />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
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
      <div className="flex my-5 md:my-10" />
      <div className="flex justify-center">
        <Titulo2 title="Bancas" />
      </div>
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

      <div className="flex my-5 md:my-10" />
      <div className="flex justify-center">
        <Titulo2 title="Resumos Anais" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {data.ResumoAnais.map((projeto, index) => (
            <CardPostsResumosAnais
              key={index}
              image={projeto.imagem} // Você pode alterar as imagens de acordo com o projeto
              title={projeto.titulo}
              ano={projeto.ano.toString()}
              autores={projeto.autores}
              evento={projeto.evento}
              tema={projeto.tema}
              local={projeto.local}
            />
          ))}
        </div>
      </div>

      <div className="flex my-5 md:my-10" />


      <div className="flex justify-center">
        <Titulo2 title="Projetos de Ensino" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {data.projetosDeEnsino.map((projeto, index) => (
            <CardPostsProjetosDeEnsino
              key={index}
              image={projeto.imagem} // Você pode alterar as imagens de acordo com o projeto
              title={projeto.titulo}
              ano={projeto.ano_inicio.toString()}
              ano_fim={projeto.ano_fim.toString()}
              autores={projeto.integrantes}
              descricao={projeto.descricao}
            />
          ))}
        </div>
      </div>
      <FooterIma />
    </div>
  );
}
