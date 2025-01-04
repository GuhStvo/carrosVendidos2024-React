import cardCarroStyle from "@/styles/componentsStyles/cardCarroStyle.css";
import Image from "next/image";

export default function CardCarro(props) {
  const numInserido = props.numLista;
  const nomeCarro = props.nomeCarro;
  const uniVendidas = props.uniVendidas;
  const nomeArquivo = props.nomeArquivo;
  const invertido = props.invertido;

  return (
    <div className={`cardCarro ${invertido ? "cardInvertido" : ""}`}>
      <div className="texto">
        <div>
            <h2 className={`${invertido ? "cardInvertido" : ""}`}>#{numInserido}</h2>
            <h3>{nomeCarro}</h3>
        </div>
        <div>
            <h3>Uni. vendidas</h3>
            <h3>{uniVendidas}</h3>
        </div>
      </div>
      <Image className="imgCardCarro" src={`/assets/carros/${nomeArquivo}`} width={200} height={200}></Image>
    </div>
  );
}
