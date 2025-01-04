import ComponenteTesteStyle from "@/styles/componentsStyles/componenteTesteStyle.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { AlignJustify } from "lucide-react";

export default function ComponenteTeste() {
  const [menuAberto, SetMenuAberto] = useState(false);
  function abrirMenu() {
    SetMenuAberto(!menuAberto);
  }

  function trocaMenu() {}

  return (
    <>
      <header>
        <ul>
          <li>
            <Link href={"/"}>
              <Image src={"/assets/carLogo.webp"} width={60} height={60} />
            </Link>
          </li>
          <li>
            <AlignJustify />
          </li>
        </ul>
      </header>

      <div className={`menuLateral ${menuAberto ? "menuAberto" : ""}`}>
        <ul>
          <l1>
            <Link href={"/"}>Home</Link>
          </l1>
          <l1>
            <Link href={"/contato"}>Contato</Link>
          </l1>
          <l1>Nos conheça</l1>
          <l1>Login</l1>
        </ul>
      </div>
    </>
  );
}
