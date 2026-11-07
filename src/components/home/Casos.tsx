import Image from "next/image";
import Link from "next/link";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";
import { Flecha } from "../Iconos";

/* Los tres casos. Sin cifras: se cuentan cuando estén medidas y confirmadas.
   Las imágenes son capturas reales (el panel de TrendSpot, con datos de ejemplo). Traslap está en construcción. */

function Rubro({ children }: { children: string }) {
  return <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-muted">{children}</span>;
}

export default function Casos() {
  return (
    <section id="casos" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <Encabezado
        etiqueta="Casos"
        titulo={
          <>
            Negocios reales, <Resaltado>sin cifras infladas</Resaltado>
          </>
        }
        bajada="Te contamos qué hicimos y qué estamos haciendo. Los números, cuando estén medidos."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <FadeUp as="article" className="lg:col-span-1">
          <Link
            href="/casos/raquel"
            className="group luz filo flex h-full flex-col rounded-3xl border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden hover:border-accent/40 transition-colors"
          >
            {/* La foto es vertical: cuando la tarjeta ocupa todo el ancho (tablet) va más alta para no cortarle la cara */}
            <div className="relative h-[260px] sm:h-[440px] lg:h-[260px] overflow-hidden">
              <Image
                src="/raquel/raquel.png"
                alt="Retrato de la Dra. Raquel Rodríguez"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <Rubro>Salud · San Salvador de Jujuy</Rubro>
              <h3 className="mt-2 text-[22px] font-extrabold text-text-primary">Dra. Raquel Rodríguez</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                Le hicimos la web y el sistema que agenda, confirma y recuerda los turnos por WhatsApp. Trabaja al lado de
                su secretaria.
              </p>
              <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
                Ver el caso <Flecha className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </FadeUp>

        <FadeUp as="article" delay={0.06}>
          <Link
            href="/casos/trendspot"
            className="group luz filo flex h-full flex-col rounded-3xl border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden hover:border-accent/40 transition-colors"
          >
            <div className="relative h-[260px] overflow-hidden border-b border-border">
              <Image
                src="/trendspot/panel-inicio.webp"
                alt="Panel de ventas de TrendSpot, con datos de ejemplo"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 right-4 rounded-full border border-amber-300/30 bg-bg-primary/80 px-3 py-1 text-[12px] font-semibold text-amber-200">
                Datos de ejemplo
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <Rubro>Comercio · Venta de iPhones</Rubro>
              <h3 className="mt-2 text-[22px] font-extrabold text-text-primary">TrendSpot</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                La tienda online y el sistema para vender por WhatsApp: todas las consultas en un panel, stock por IMEI,
                agenda atada al stock y un asistente que se prueba con freno de mano.
              </p>
              <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
                Ver el caso <Flecha className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </FadeUp>

        <FadeUp as="article" delay={0.12}>
          <Link
            href="/casos/traslap"
            className="group luz filo flex h-full flex-col rounded-3xl border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden hover:border-accent/40 transition-colors"
          >
            <div className="relative h-[260px] overflow-hidden border-b border-border">
              <Image
                src="/traslap/liquidaciones.webp"
                alt="Entrada al sistema de liquidaciones de Traslap"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 right-4 rounded-full border border-white/15 bg-bg-primary/80 px-3 py-1 text-[12px] font-semibold text-text-secondary">
                En construcción
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <Rubro>Logística · Última milla</Rubro>
              <h3 className="mt-2 text-[22px] font-extrabold text-text-primary">Traslap</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                Le estamos armando el sistema de liquidaciones: lee los envíos que ya exportan y calcula cuánto se le paga a
                cada conector, sin IA en el cálculo.
              </p>
              <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
                Ver en qué está <Flecha className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
