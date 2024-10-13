import Image from "next/image";

interface ImgGaleriaProps {
  image: string;
  text: string;
}
export function ImgGaleria(props: ImgGaleriaProps) {
  return (
    <div className="w-[630px] h-[360px] relative group">
      <Image
        src={props.image}
        alt="Imagem post"
        fill
        style={{ objectFit: "cover" }}
        className="z-10"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
