import Image from "next/image";

export default function Section() {
  return (
    <>
      <section>
        <div className="novidade">Novo</div>
        <h1>Carros mais vendidos em 2024</h1>
          <Image
            className="img"
            src={"/assets/banner1.png"}
            width={500}
            height={500}
          />
      </section>
    </>
  );
}
