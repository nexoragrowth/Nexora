import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import BotonesContacto from "@/components/BotonesContacto";
import TarjetaWeb from "@/components/TarjetaWeb";
import { Etiqueta, Resaltado } from "@/components/Encabezado";
import { TRABAJOS } from "@/lib/trabajos";

export const metadata: Metadata = {
  title: "Webs y demos · Nexora",
  description: "Webs publicadas y demos que armó el equipo de Nexora, con la marca real de cada negocio.",
  alternates: { canonical: "/webs" },
};

export default function PaginaWebs() {
  const publicadas = TRABAJOS.filter((t) => t.tipo === "web");
  const demos = TRABAJOS.filter((t) => t.tipo === "demo");
  return (
    <>
      <Header />
      <main className="relative pt-[68px] overflow-x-clip">
        <div className="absolute inset-x-0 top-0 h-[520px] grid-bg pointer-events-none" aria-hidden="true" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[-120px] w-[760px] h-[480px] glow-accent pointer-events-none" aria-hidden="true" />

        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-12 md:pt-20 text-center">
          <FadeUp>
            <Etiqueta>Webs y demos</Etiqueta>
            <h1 className="mt-6 text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-text-primary titulo-degrade">
              Lo que armamos, <Resaltado>tal cual está</Resaltado>
            </h1>
            <p className="mt-6 mx-auto max-w-[620px] text-[17px] md:text-[18px] leading-relaxed text-text-secondary">
              Cada web parte de la marca real del negocio. Las publicadas se pueden visitar; las demos son propuestas que le
              armamos a un negocio para que vea cómo se vería la suya.
            </p>
          </FadeUp>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <FadeUp>
            <h2 className="text-[22px] font-extrabold text-text-primary">Publicadas</h2>
          </FadeUp>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publicadas.map((t, i) => (
              <FadeUp key={t.id} delay={(i % 3) * 0.05}>
                <TarjetaWeb t={t} />
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20">
          <FadeUp>
            <h2 className="text-[22px] font-extrabold text-text-primary">Demos</h2>
            <p className="mt-2 text-[15px] text-text-muted">
              Propuestas de diseño: no son la web oficial de esos negocios.
            </p>
          </FadeUp>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((t, i) => (
              <FadeUp key={t.id} delay={(i % 3) * 0.05}>
                <TarjetaWeb t={t} />
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <FadeUp className="corners rounded-3xl border border-border bg-bg-card/60 backdrop-blur-sm p-8 md:p-12 text-center">
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] font-extrabold leading-tight text-text-primary">
              ¿Querés ver cómo quedaría la tuya?
            </h2>
            <p className="mt-4 text-[16px] text-text-secondary max-w-[520px] mx-auto">
              Contanos de tu negocio y te mostramos una propuesta con tu marca.
            </p>
            <BotonesContacto className="mt-8 justify-center" />
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
