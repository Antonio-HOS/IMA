import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type propsButton = {
  text: string;
  link: string;
};

export default function BotaoNavegar(props: propsButton) {
  return ( 
    <div className="flex justify-center mt-4">
      <Link
        href={props.link}
        className="w-[852px] h-[95px] py-[31px] bg-[#8aa6bf] rounded-[25px]  justify-center items-center gap-5 inline-flex hover:shadow-2xl shadow-sm transition-all duration-300 hover:bg-blue-500 hover:text-black text-white"
      >
        <div className="text-center text-4xl font-normal itim">
          {props.text}
        </div>
        <MousePointerClick className="w-16 h-16" />
      </Link>
    </div>
  );
}
