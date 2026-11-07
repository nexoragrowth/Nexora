import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import CintaDolores from "@/components/home/CintaDolores";
import ComoFunciona from "@/components/home/ComoFunciona";
import QueIncluye from "@/components/home/QueIncluye";
import Comparacion from "@/components/home/Comparacion";
import Portal from "@/components/home/Portal";
import ConIA from "@/components/home/ConIA";
import Casos from "@/components/home/Casos";
import Sistemas from "@/components/home/Sistemas";
import Webs from "@/components/home/Webs";
import Preguntas from "@/components/home/Preguntas";
import Cierre from "@/components/home/Cierre";

/* Home de Nexora Subscription (2026-11-07), armada sobre la referencia de designme.agency:
   hero → dolores → cómo funciona → qué incluye → sistemas propios → casos → webs → portal → equipo vs. contratación → IA → preguntas → llamada.
   Todo lo que se muestra es real: capturas de los sitios y sistemas, y las demos marcadas como demos.
   Reglas del texto: sin precios ni planes, sin cupos, garantías ni plazos, sin cifras sin fuente. */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CintaDolores />
        <ComoFunciona />
        <QueIncluye />
        <Sistemas />
        <div className="linea-luz" aria-hidden="true" />
        <Casos />
        <div className="linea-luz" aria-hidden="true" />
        <Webs />
        <Portal />
        <Comparacion />
        <ConIA />
        <Preguntas />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
