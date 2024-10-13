
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones de menu e fechar
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-black bg-white h-[70px] flex items-center justify-between p-4 md:h-[120px] transition-all ">
      <div className="flex">
        <div className="  my-auto">
        <Image width={180} height={80} src="/assets/logos/ima.png" alt="Logo" />
        </div>
        <div className=" my-auto ml-[-40px]">
        
        <Image width={180} height={80} src="/assets/logos/proex.png" alt="Logo" />
</div>
      </div>
      <button
        className="md:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        color="black"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } absolute top-[60px] left-0 w-full bg-white px-2 z-50 transition-all duration-300 ease-in-out md:static md:flex md:max-h-none md:opacity-100 md:w-auto`}
      >
        <ul className="flex flex-col items-center md:flex-row md:space-x-4">
          <li className="w-full md:w-auto">
            <Link href="/" className="block py-2 px-2 md:px-4 hover:bg-[#d2d2d2] rounded-xl transition-all">
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/projetos"
              className="block py-2 px-2 md:px-4 hover:bg-[#d2d2d2] rounded-xl transition-all"
            >
              Projetos
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/andamento"
              className="block py-2 px-2 md:px-4 hover:bg-[#d2d2d2] rounded-xl transition-all"
            >
              Em andamento
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link href="/galeria" className="block py-2 px-2 md:px-4 hover:bg-[#d2d2d2] rounded-xl transition-all">
              Galeria
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link href="/sobre" className="block py-2 px-2 md:px-4 hover:bg-[#d2d2d2] rounded-xl transition-all">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
