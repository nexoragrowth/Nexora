import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ComoFunciona from "@/components/home/ComoFunciona";
import Equipo from "@/components/home/Equipo";
import Proyectos from "@/components/home/Proyectos";
import Comparacion from "@/components/home/Comparacion";
import ConIA from "@/components/home/ConIA";
import QueIncluye from "@/components/home/QueIncluye";
import PorQue from "@/components/home/PorQue";
import Preguntas from "@/components/home/Preguntas";
import Cierre from "@/components/home/Cierre";

/* Home de Nexora Subscription (2026-11-07), con el orden de designme.agency/design-subscription:
   hero → seis pasos → equipo → proyectos (con una franja chica de webs) → comparación → IA → la suscripción
   → lo que ya construimos (con el Portal) → por qué Nexora → preguntas → cierre.
   Las webs son una sección más, no el centro: tienen su página aparte en /webs.
   Reglas del texto: sin precios ni planes, sin cupos, garantías ni plazos, sin cifras sin fuente. */
export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <ComoFunciona />
        <Equipo />
        <Proyectos />
        <Comparacion />
        <ConIA />
        <QueIncluye />
        <PorQue />
        <Preguntas />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
