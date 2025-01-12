import ComponenteTeste from "@/components/header";
import Section from "@/components/section";
import CardCarro from "@/components/cardCarro";
import Seta from "@/components/seta"
import { motion, useScroll, useSpring } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 }); // Suaviza o movimento

  return (
    <>
      {/* Barra de progresso fixa no topo */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          background: "#08263ab6",
          zIndex: 100,
        }}
      />

      {/* Conteúdo principal */}
      <div>
        <ComponenteTeste />
        <Section />
        <Seta />
        <CardCarro
          numLista={1}
          nomeCarro={"Fiat Strada"}
          uniVendidas={"143.940"}
          nomeArquivo={"fiatStrada.png"}
        />
        <CardCarro
          invertido={true}
          numLista={2}
          nomeCarro={"Volkswagen Polo"}
          uniVendidas={"139.727"}
          nomeArquivo={"volswagenPolo.webp"}
        />
      </div>
    </>
  );
}
