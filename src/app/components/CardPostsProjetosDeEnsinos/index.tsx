"use client";
import Image from "next/image";
import { useState } from "react";

type PropsCard = {
  autores?: { nome: string; papel: string }[];
  descricao?: string;
  title: string;
  ano_fim?: string;
  ano?: string;
  image?: string;
  link?: string;
};

export default function CardPostsProjetosDeEnsino(props: PropsCard) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={handleToggleDescription} onMouseLeave={()=>setIsExpanded(false)} className="w-[320px] cursor-pointer h-auto md:w-[380px] bg-white rounded-[20px] flex flex-col justify-center items-center hover:shadow-2xl  transition-all duration-500 py-2">
      {props.image && (
        <div className="w-[310px] h-[190px] relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={props.image}
            alt="Imagem do Post"
            className="z-50"
          />
        </div>
      )}
      <div className="w-[320px] md:w-[340px] px-2">
        <h1 className="text-black text-[14px] md:text-[17px] itim h-20  mt-2">
          {props.title}
        </h1>
        <hr />
        <p className="text-gray-700 text-[10px] md:text-lg font-normal inter ml-5">
          Descrição:
        </p>
        <p
          className={`text-black text-[12px] md:text-[14px] font-normal inter ${
            isExpanded ? "h-auto" : "line-clamp-3 h-24"
          }`}
        >
          {props.descricao}
        </p>
        
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch h-6 text-[#008cff] text-xl font-normal itim underline flex justify-center mt-3"
          >
            Ver mais...
          </a>
        )}
        <hr />
        {props.autores && props.autores.length > 0 && (
          <div className="mt-2">
            <p className="text-gray-700 text-[12px] md:text-[16px] font-normal inter ml-5">
              Autores:
            </p>
            <ul className="text-black text-[12px] md:text-[14px] font-normal inter ml-10 list-disc">
              {props.autores.map((autor, index) => (
                <li key={index}>
                  {autor.nome} - {autor.papel}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="text-black text-[14px] text-center font-normal inter mt-2">
          {props.ano} - {props.ano_fim}
        </p>
      </div>
    </div>
  );
}
