"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type TituloProps = {
  title: string;
  title2?: string;
};

export default function TituloPost(props: TituloProps) {
  return (
    <div className="flex pl-24 flex-col">
    <div className="text-black text-[55px] font-normal inter">
      {props.title}
    </div>
    <div className="text-black text-[28px] font-normal inter">
      {props.title2}
    </div>
    </div>
  );
}
