"use client";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";


type propsCard = {
  autores?: string[];
  title: string;
  aluno?: string;
  ano?: string;
  curso?: string;
  instituicao?: string;
  image?: string;
  link?: string;
};

export default function CardPostsBancas(props: propsCard) {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setTitle(props.title);
  }, []);
  return (
    <div className="w-[320px] h-auto py-4 md:py-0 md:w-[380px] md:h-[500px] bg-white rounded-[20px] flex flex-col justify-center items-center hover:shadow-2xl hover:scale-110 transition-all duration-500">
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
        <h1 className="text-black text-[16px] md:text-[18px]  itim h-20   mt-2 ">
          {props.title}
        </h1>
        <hr />
        <p className=" text-gray-700 text-[12px] md:text-lg font-normal inter ml-5">
          Aluno:
        </p>

        <p className=" text-black text-[16px] md:text-lg font-normal inter line-clamp-3 ml-2 h-10 ">
          {props.aluno}
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
          <div className="">
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
          Ano:{props.ano}
        </p>
      </div>
    </div>
  );
}
