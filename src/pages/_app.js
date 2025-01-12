import "@/styles/globals.css";
import ComponenteTeste from "@/components/header";
import Section from "@/components/section";
import CardCarro from "@/components/cardCarro";
import ComponenteTesteStyle from "@/styles/componentsStyles/componenteTesteStyle.css";
import cardCarroStyle from "@/styles/componentsStyles/cardCarroStyle.css";
import firstSectionStyle from "@/styles/componentsStyles/firstSectionStyle.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
