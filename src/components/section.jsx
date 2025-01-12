import Image from "next/image";
import { motion } from "motion/react";

export default function Section() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.700, delay: 0.6 }}
          className="novidade"
        >
          Novo
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.700, delay: 0.8 }}
        >
          Carros mais vendidos em 2024
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.700 , delay: 1 }}
        >
          <Image
            className="img"
            src={"/assets/banner1.png"}
            width={500}
            height={500}
            alt="Banner"
          />
        </motion.div>
      </motion.section>
    </>
  );
}
