// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// type TituloProps = {
//   title: string;
//   image: string;
// };

// export default function TituloPost(props: TituloProps) {
//   const [image, setImage] = useState(props.image);
//   const [temImagem, setTemImagem] = useState(false);

//   useEffect(() => {
//     if (image) {
//       setTemImagem(true);
//     }
//   }, [image]);

//   return (
//     <section className="relative flex h-[360px] justify-center items-center flex-col mb-[50px]">
//       {temImagem && (
//         <Image
//           src={image}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           className=" z-0"
//         />
//       )}
//       <div className="min-w-[400px] h-[170px] px-8 py-5 bg-white rounded-tr-[45px] rounded-bl-[45px] shadow-2xl justify-center items-center gap-2.5 z-20 inline-flex absolute bottom-[-85px]">
//         <div className="w-[240px] h-[180px] relative ml-[-40px]">
//           <Image
//             layout="fill"
//             objectFit="cover"
//             src="/assets/logos/ima.png"
//             alt="IMA Logo"
//             className="z-50 scale-130"
//           />
//         </div>
//         <div className="text-[#003368] text-6xl font-normal itim ml-[-40px]">{props.title}</div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type TituloProps = {
  title: string;
  image: string;
};

export default function TituloPost(props: TituloProps) {
  const [image, setImage] = useState(props.image);
  const [temImagem, setTemImagem] = useState(false);

  useEffect(() => {
    if (image) {
      setTemImagem(true);
    }
  }, [image]);

  return (
<section className="relative flex h-[360px] justify-center items-center flex-col mb-[50px] bg-black">
  {temImagem && (
    <video
      src={"/assets/background/uesc.mp4"}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover z-0 opacity-60 hover:opacity-100 transition-all duration-500"
    />
  )}
  <div className="min-w-[400px] h-[170px] px-8 py-5 bg-white rounded-tr-[45px] rounded-bl-[45px] shadow-2xl justify-center items-center gap-2.5 z-20 inline-flex absolute bottom-[-85px]">
    <div className="w-[240px] h-[180px] relative ml-[-40px]">
      <Image
        layout="fill"
        objectFit="cover"
        src="/assets/logos/ima.png"
        alt="IMA Logo"
        className="z-50 scale-130"
      />
    </div>
    <div className="text-[#003368] text-6xl font-normal itim ml-[-40px]">{props.title}</div>
  </div>
</section>

  );
}
