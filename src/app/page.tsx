import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ComoFunciona from "@/components/home/ComoFunciona";
import Equipo from "@/components/home/Equipo";
import Proyectos from "@/components/home/Proyectos";
import ConIA from "@/components/home/ConIA";
import QueIncluye from "@/components/home/QueIncluye";
import PorQue from "@/components/home/PorQue";
import Preguntas from "@/components/home/Preguntas";
import Cierre from "@/components/home/Cierre";

/* Home de Nexora Subscription (2026-11-07), con el orden de designme.agency/design-subscription:
   hero → seis pasos → equipo → proyectos (con una franja chica de webs) → IA → la suscripción
   → por qué Nexora → preguntas → cierre. El 2026-11-07 salieron la comparación y "lo que ya construimos".
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
