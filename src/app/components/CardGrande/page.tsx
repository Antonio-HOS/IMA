import Image from "next/image";
import Link from "next/link";

type propsCard = {
  title: string;
  image: string;
  link: string;
  text: string;
};

export default function CardGrande(props: propsCard) {
  return (
 <Link href={props.link} className="w-[1200px] h-[190px]  bg-white rounded-tl-[30px] rounded-br-[30px] shadow justify-center items-center gap-5 inline-flex hover:shadow-2xl transition-all duration-300">
    <div className="w-[250px] h-[160px] relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={props.image}
            alt="Imagem post"
            className="z-50"
          />
        </div>
    <div className="w-[776px] px-2.5 py-[15px] flex-col justify-center items-start gap-2.5 inline-flex">
        <div className="text-black text-[30px] font-semibold interBold">{props.title}</div>
        <div className="w-[766px] text-black text-[22px] font-normal inter">{props.text}</div>
    </div>

    </Link>
  );
}
