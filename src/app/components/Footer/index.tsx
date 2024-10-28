import { Mail, MapPin, UsbIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FooterIma() {
  return (
    <footer className="bg-white  py-8 text-black mt-10 md:h-80 border-t-[1px] border-slate-400">
      <div className="container mx-auto place-items-center md:place-self-auto grid grid-cols-1  md:grid-cols-4 gap-8  text-center md:text-left">
        {/* Seção de ícones sociais */}
        <div className="flex flex-col">
        <div className="  my-auto">
          <Image
            width={200}
            height={80}
            src="/assets/logos/ima.png"
            alt="Logo"
          />
        </div>
        <div className=" my-auto">
          <Image
            width={200}
            height={80}
            src="/assets/logos/proex.png"
            alt="Logo"
          />
        </div>
      </div>

        {/* Seção de Email */}
        <div className="flex items-center flex-col w-80">
          <Mail className="w-16 h-16  " />
          <h2 className="text-3xl font-semibold">Email</h2>
          <p className="mt-4">mmbertoldi@uesc.br</p>
        </div>

        {/* Seção de Local */}
        <div className="flex items-center flex-col w-80 ">
          <MapPin className="w-16 h-16  " />
          <h2 className="text-3xl font-semibold">Local</h2>
          <p className="mt-4">Km 16 - Salobrinho,</p>
          <p> Ilhéus - BA, 45662-900</p>
        </div>

        <div className=" text-right mt-2 hidden md:block ">
          <h4 className="text-xl font-semibold">Opções importantes</h4>
          <ul className="space-y-2 text-lg">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projetos" className="hover:underline">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/tcc" className="hover:underline">
                TCC
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="hover:underline">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="/equipe" className="hover:underline">
                Equipe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
