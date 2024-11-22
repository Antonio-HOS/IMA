"use client";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";



// {
//   autores: ["Santos, Fabiano S. dos", "DORNELLES, MARTA M."],
//   titulo:
//     "METODOLOGIA DE APOIO PARA O ENSINO DE PROCESSAMENTO DIGITAL DE IMAGENS NO CURSO DE CIÊNCIA DA COMPUTAÇÃO",
//   evento:
//     "9º Simpósio de Ensino, Extensão, Inovação, Pesquisa e Pós-Graduação, 28º Seminário de Iniciação Científica",
//   tema: "Ser inclusiva e estar incluída: a realidade das universidades brasileiras.",
//   ano: 2022,
//   local: "Ilhéus",
//   publicacao: "Universidade Estadual de Santa Cruz",
//   imagem: "/assets/posts/rede_neural.png",
// },

type propsCard = {
  autores?: string[];
  title: string;
  evento?: string;
  ano?: string;
  tema?: string;
  local?: string;
  image?: string;
  link?: string;
};

export default function CardPostsResumosAnais(props: propsCard) {

  return (
    <div className="w-[320px] h-auto py-3 md:py-0 md:w-[380px] md:h-[540px] bg-white rounded-[20px] flex flex-col justify-center items-center hover:shadow-2xl hover:scale-110 transition-all duration-500">
      {props.image && (
        <div className="w-[310px] h-[190px] relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={props.image}
            alt="IMA Logo"
            className="z-50"
          />
        </div>
      )}
      <div className="w-[320px] md:w-[340px] px-2 ">
        <h1 className="text-black text-[14px] md:text-[18px]  itim h-20   mt-2 ">
          {props.title}
        </h1>
        <hr />
        <p className=" text-gray-700 text-[10px] md:text-lg font-normal inter ml-5">
          Evento:
        </p>

        <p className=" text-black text-[12px] md:text-[16px] font-normal inter line-clamp-3 h-14 ml-2 md:h-24 ">
          {props.evento}
        </p>
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            className="self-stretch h-6 text-[#008cff] text-xl font-normal itim underline flex justify-center mt-3"
          >
            Ver mais...
          </a>
        )}

        <hr />
        {props.autores && props.autores.length > 0 && (
          <div className="h-24">
            <p className="text-gray-700 text-[12px] md:text-[16px] font-normal inter ml-5">
              Autores:
            </p>
            <ul className="text-black text-[12px] md:text-[16px] font-normal inter ml-10 list-disc">
              {props.autores.map((autor, index) => (
                <li key={index}>{autor}</li>
              ))}
            </ul>
          </div>
        )}

        <p className=" text-black text-[14px] text-center font-normal inter line-clamp-3 ">
          {props.local}-{props.ano}
        </p>
      </div>
    </div>
  );
}
