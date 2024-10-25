"use client"
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";

type propsCard = {
  nome: string;
  image: string;
  link?: string;
};

export default function CardPerfil(props: propsCard) {
  
  return (
<div className="w-[380px] h-[410px] bg-white rounded-[14px] flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
    <div className="w-[350px] h-[220px] relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={props.image}
            alt="IMA Logo"
            className="z-50"
          />
        </div>
        <div>
    <h1 className="text-black text-[20px]  itim  w-[330px] mt-4 text-center">{props.nome}</h1>
   
    <a href={props.link} target="_blank" className=" text-xl font-normal itim hover:underline flex justify-center mt-3">Ver latess</a>
</div>
</div>
  );
}


