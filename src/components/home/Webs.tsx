import Link from "next/link";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";
import TarjetaWeb from "../TarjetaWeb";
import { Flecha } from "../Iconos";
import { DESTACADOS, TRABAJOS } from "@/lib/trabajos";

/* Webs y demos: capturas reales de lo que armamos. Las demos se marcan como demos. */
export default function Webs() {
  const destacados = DESTACADOS.map((id) => TRABAJOS.find((t) => t.id === id)!).filter(Boolean);
  return (
    <section id="webs" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Encabezado
          etiqueta="Webs"
          titulo={
            <>
              Webs con la marca de cada negocio, <Resaltado>no plantillas</Resaltado>
            </>
          }
          bajada="Partimos de su marca real: sus colores, sus fotos y cómo habla. Algunas ya están publicadas; otras son demos que armamos para mostrarle a un negocio cómo se vería."
        />
        <FadeUp delay={0.06} className="shrink-0">
          <Link
            href="/webs"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/60 px-5 py-3 text-[14.5px] font-semibold text-text-primary hover:border-accent/40 transition-colors"
          >
            Ver todas
            <Flecha className="w-4 h-4 text-accent" />
          </Link>
        </FadeUp>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {destacados.map((t, i) => (
          <FadeUp key={t.id} delay={(i % 3) * 0.05}>
            <TarjetaWeb t={t} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
