"use client";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";

type propsCard = {
  title: string;
  text: string;
  image: string;
  link?: string;
};

export default function CardPosts(props: propsCard) {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (props.title.length > 19) {
      setTitle(props.title.slice(0, 30) + "...");
    } else {
      setTitle(props.title);
    }
  }, [props.title]);
  return (
    <div className="w-[320px] h-[380px] md:w-[380px] md:h-[410px] bg-white rounded-[20px] flex flex-col justify-center items-center hover:shadow-2xl hover:scale-110 transition-all duration-500">
      <div className="w-[310px] h-[190px] relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={props.image}
          alt="IMA Logo"
          className="z-50"
        />
      </div>
      <div className="w-[320px] md:w-[340px] px-2 ">
        <h1 className="text-black text-[16px] md:text-[18px]  itim  w-[330px] mt-2 ">
          {title}
        </h1>
        <p className=" text-black text-[14px] md:text-[16px] font-normal inter  ">
          {props.text}
        </p>
        <a
          href={props.link}
          target="_blank"
          className="self-stretch h-6 text-[#008cff] text-xl font-normal itim underline flex justify-center mt-3"
        >
          Ver mais...
        </a>
      </div>
    </div>
  );
}
