"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Ícones de menu e fechar
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tamImage,setTamImage] = useState({
    width:180,
    height:80
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      setTamImage({
        width:180,
        height:80
      });
    } else {
      setTamImage({
        width:140,
        height:60
    })
  }
  }, []);

  return (
    <div className="text-black bg-white py-16 md:px-0 h-[70px] flex items-center justify-between p-4 md:h-[120px] transition-all ">
      <div className="flex">
        <div className="  my-auto">
          <Image
            width={tamImage.width}
            height={tamImage.height}
            src="/assets/logos/ima.png"
            alt="Logo"
          />
        </div>
        <div className=" my-auto ml-[-40px]">
          <Image
            width={tamImage.width}
            height={tamImage.height}
            src="/assets/logos/proex.png"
            alt="Logo"
          />
        </div>
      </div>
      <button
        className="md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        color="black"
      >
        {isMenuOpen ? <X size={28} className="z-[999]"/> : <Menu size={28} />}
      </button>

      <nav
        className={`${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } absolute top-[60px] left-0 w-full bg-white px-2 z-50 transition-all duration-300 ease-in-out md:static md:flex md:max-h-none md:opacity-100 md:w-auto`}
      >
        <ul className="flex mt-7 sm:mt-0 flex-col items-center md:flex-row md:space-x-4">
          <li className="w-full md:w-auto">
            <Link
              href="/"
              className="block py-2 px-2 md:px-4 hover:bg-[#2f5a88] duration-500 hover:text-white rounded-xl transition-all"
            >
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/projetos"
              className="block py-2 px-2 md:px-4 hover:bg-[#2f5a88] duration-500 hover:text-white rounded-xl transition-all"
            >
              Projetos
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/tcc"
              className="block py-2 px-2 md:px-4 hover:bg-[#2f5a88] duration-500 hover:text-white rounded-xl transition-all"
            >
              TCC
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/galeria"
              className="block py-2 px-2 md:px-4 hover:bg-[#2f5a88] duration-500 hover:text-white rounded-xl transition-all"
            >
              Galeria
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/equipe"
              className="block py-2 px-2 md:px-4 hover:bg-[#2f5a88] duration-500 hover:text-white rounded-xl transition-all"
            >
              Equipe
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
