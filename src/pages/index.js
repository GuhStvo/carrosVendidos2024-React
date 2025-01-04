import ComponenteTeste from "@/components/header";
import Section from "@/components/section";
import CardCarro from "@/components/cardCarro";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <ComponenteTeste />
      <Section />
      <CardCarro 
      numLista={1} 
      nomeCarro={"Fiat Strada"} 
      uniVendidas={"143.940"}
      // Nome do arquivo da imagem
      nomeArquivo={"fiatStrada.png"}
      />
      <CardCarro
      invertido={true} 
      numLista={2} 
      nomeCarro={"Volkswagen Polo"} 
      uniVendidas={"139.727"}
      // Nome do arquivo da imagem
      nomeArquivo={"volswagenPolo.webp"}
      />
    </>
  );
}
