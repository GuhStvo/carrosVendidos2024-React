import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { AlignJustify } from "lucide-react";
import { motion } from "motion/react";

export default function ComponenteTeste() {
  const [menuAberto, SetMenuAberto] = useState(false);
  function abrirMenu() {
    SetMenuAberto(!menuAberto);
  }

  function trocaMenu() {}

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: "-120%" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul>
          <motion.li
            initial={{ opacity: 0, y: "-120%" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href={"/"}>
              <Image
                className="imgLogo"
                src={"/assets/carLogo.png"}
                width={60}
                height={60}
              />
            </Link>
          </motion.li>
          <li>
            <AlignJustify />
          </li>
        </ul>
      </motion.header>

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
