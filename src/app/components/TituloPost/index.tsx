

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import TypewriterComponent from "typewriter-effect";

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
//     <section className="relative flex h-[360px] justify-center items-center flex-col mb-[50px] bg-black">
//       {temImagem && (
//         <a
//           href="https://youtu.be/TKMu8HnnSvw?si=25sa0KrJDU9mqBPQ"
//           target="_blank"
//           className="w-full h-full object-cover z-0 opacity-60 hover:opacity-100 transition-all duration-500"
//         >
//           <video
//             src={"/assets/background/uesc.mp4"}
//             autoPlay
//             loop
//             muted
//             className="w-full h-full object-cover z-0 opacity-60 hover:opacity-100 transition-all duration-500"
//           />
//         </a>
//       )}
//       <div className="  px-8 h-[170px] py-5 bg-white rounded-tr-[45px] rounded-bl-[45px] shadow-sm transition-all duration-500 hover:shadow-2xl justify-center items-center gap-2.5 z-20 inline-flex absolute bottom-[-85px]">
//         <div className=" w-[200px] h-[120px]   lg:w-[240px] lg:h-[180px] relative ml-[-40px]">
//           <Image
//             layout="fill"
//             objectFit="cover"
//             src="/assets/logos/ima.png"
//             alt="IMA Logo"
//             className="z-50 scale-130"
//           />
//         </div>
//         <div className="text-[#003368] text-3xl md:text-4xl lg:text-6xl font-normal itim ml-[-40px] ">
//           {" "}
//           <TypewriterComponent
//             options={{
//               strings: `${props.title}`,
//               autoStart: true,
//               loop: false,
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import TypewriterComponent from "typewriter-effect";

type TituloProps = {
  title: string;
  image: string;
};

export default function TituloPost(props: TituloProps) {
  const [image, setImage] = useState(props.image);
  const [temImagem, setTemImagem] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (image) {
      setTemImagem(true);
    }
  }, [image]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="relative flex h-[360px] justify-center items-center flex-col mb-[50px] bg-black">
      {temImagem && (
        <a
          href="https://youtu.be/TKMu8HnnSvw?si=25sa0KrJDU9mqBPQ"
          target="_blank"
          className="w-full h-full object-cover z-0 opacity-90 hover:opacity-100 transition-all duration-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={"/assets/background/uesc.mp4"}
            loop
            muted
            className="w-full h-full object-cover z-0 opacity-60 hover:opacity-100 transition-all duration-500"
          />
        </a>
      )}
      <div className="px-8 h-[170px] py-5 bg-white rounded-tr-[45px] rounded-bl-[45px] shadow-sm transition-all duration-500 hover:shadow-2xl justify-center items-center gap-2.5 z-20 inline-flex absolute bottom-[-85px]">
        <div className="w-[200px] h-[120px] lg:w-[240px] lg:h-[180px] relative ml-[-40px]">
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/logos/ima.png"
            alt="IMA Logo"
            className="z-50 scale-130"
          />
        </div>
        <div className="text-[#003368] text-3xl md:text-4xl lg:text-6xl font-normal itim ml-[-40px]">
          <TypewriterComponent
            options={{
              strings: `${props.title}`,
              autoStart: true,
              loop: false,
            }}
          />
        </div>
      </div>
    </section>
  );
}
