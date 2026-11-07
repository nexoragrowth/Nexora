import Image from "next/image";
import Link from "next/link";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado, Coma } from "../Encabezado";
import { Flecha, IconoCheck } from "../Iconos";
import { DESTACADOS, TRABAJOS } from "@/lib/trabajos";

/* Proyectos reales (el "Real projects" de designme.agency). Desde el 2026-11-07 no se muestra la etapa de
   cada uno (pedido de Cogne: "solamente nombralos"): cada tarjeta dice qué le armamos o qué le estamos
   armando, con frases sacadas de las páginas de cada caso y verificadas contra el cerebro el 2026-11-07. Sin cifras ni resultados que no estén medidos.
   Al final, una sola franja chica de webs: las webs son una parte del trabajo, no la suscripción entera. */

type Proyecto = { nombre: string; rubro: string; rotulo: string; puntos: string[]; href?: string; foto?: string };

const PROYECTOS: Proyecto[] = [
  {
    nombre: "Dra. Raquel Rodríguez",
    rubro: "Ortodoncia · Jujuy",
    rotulo: "Lo que le armamos",
    puntos: [
      "Su web, con sus tratamientos y las instrucciones de cuidado para pacientes.",
      "En su WhatsApp, un sistema que agenda y recuerda los turnos de pacientes nuevos.",
      "Lo clínico y lo urgente pasa a una persona.",
    ],
    href: "/casos/raquel",
    foto: "/raquel/raquel.png",
  },
  {
    nombre: "TrendSpot",
    rubro: "Venta de iPhones",
    rotulo: "Lo que le armamos",
    puntos: [
      "La tienda online, con los precios en pesos al dólar del día.",
      "Una bandeja para todas sus líneas de WhatsApp, probada con datos de ejemplo.",
      "Stock por IMEI y una agenda que aparta el equipo, probados con datos de ejemplo.",
    ],
    href: "/casos/trendspot",
  },
  {
    nombre: "Traslap",
    rubro: "Logística · Última milla",
    rotulo: "Lo que le estamos armando",
    puntos: [
      "La liquidación de cada conector, explicada línea por línea.",
      "Las tarifas, para cambiarlas sin pedirle nada a nadie.",
      "Sin IA en el cálculo: cada peso sale de una regla a la vista.",
    ],
    href: "/casos/traslap",
  },
  {
    nombre: "Nexora",
    rubro: "Nuestro propio proyecto",
    rotulo: "Lo que armamos para nosotros",
    puntos: [
      "El Portal, donde seguimos cada negocio que contactamos.",
      "Nuestro motor de contenido: cada semana, la competencia, el banco de ideas y los guiones.",
      "Demos armadas sobre la marca de cada negocio, aprobadas por una persona.",
    ],
  },
];

function Tarjeta({ p }: { p: Proyecto }) {
  const cuerpo = (
    <>
      <div className="flex items-center gap-3.5">
        {p.foto ? (
          <Image src={p.foto} alt="" width={44} height={44} className="w-11 h-11 shrink-0 rounded-full object-cover object-[center_15%] border border-border" />
        ) : (
          <span className="w-11 h-11 shrink-0 rounded-full border border-accent/30 bg-gradient-to-br from-accent/25 to-accent/5 flex items-center justify-center font-display text-[15px] font-extrabold text-accent">
            {p.nombre.charAt(0)}
          </span>
        )}
        <div className="min-w-0">
          <p className="font-display text-[18px] font-bold leading-tight text-text-primary">{p.nombre}</p>
          <p className="mt-0.5 text-[13px] text-text-muted">{p.rubro}</p>
        </div>
      </div>
      <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">{p.rotulo}</p>
      <ul className="mt-3 space-y-2.5">
        {p.puntos.map((t) => (
          <li key={t} className="flex gap-2.5 text-[14.5px] leading-snug text-text-secondary">
            <IconoCheck className="mt-[2px] w-4 h-4 shrink-0 text-accent" />
            {t}
          </li>
        ))}
      </ul>
      {p.href && (
        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
          Ver el caso <Flecha className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </>
  );
  const clase = "tarjeta group flex h-full flex-col rounded-2xl border border-border p-6";
  return p.href ? (
    <Link href={p.href} className={`${clase} alzar`}>
      {cuerpo}
    </Link>
  ) : (
    <div className={clase}>{cuerpo}</div>
  );
}

export default function Proyectos() {
  const webs = DESTACADOS.map((id) => TRABAJOS.find((t) => t.id === id)).filter((t) => t !== undefined);

  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <Encabezado
        etiqueta="Proyectos"
        titulo={
          <>
            Proyectos reales<Coma /> <Resaltado>con nombre</Resaltado>
          </>
        }
        bajada="Lo que le armamos a cada negocio y para qué le sirve."
      />

      <FadeUp delay={0.06} className="mt-12 grid gap-4 sm:grid-cols-2">
        {PROYECTOS.map((p) => (
          <Tarjeta key={p.nombre} p={p} />
        ))}
      </FadeUp>

      {/* La única franja de webs de la home */}
      <FadeUp delay={0.08} className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[18px] font-extrabold text-text-primary">También hacemos webs, con la marca de cada negocio</p>
            <p className="mt-1 text-[14px] text-text-muted">Son una parte del trabajo, no la suscripción entera.</p>
          </div>
          <Link href="/webs" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
            Ver más webs y demos
            <Flecha className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-4 -mx-4 px-4 scroll-px-4 sm:mx-0 sm:px-0 sm:scroll-px-0 flex gap-3 overflow-x-auto sm:grid sm:grid-cols-4 sm:overflow-visible snap-x [scrollbar-width:none]">
          {webs.map((t) => (
            <Link
              key={t.id}
              href="/webs"
              className="alzar tarjeta group snap-start shrink-0 w-[62%] sm:w-auto rounded-xl border border-border overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={`/webs/${t.id}.webp`}
                  alt={`${t.tipo === "web" ? "Web" : "Demo"} de ${t.nombre}`}
                  fill
                  sizes="(min-width: 640px) 270px, 62vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  className={`absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10.5px] font-semibold bg-bg-primary/80 ${
                    t.tipo === "web" ? "border-accent/30 text-accent" : "border-white/15 text-text-secondary"
                  }`}
                >
                  {t.tipo === "web" ? "Publicada" : "Demo"}
                </span>
              </div>
              <p className="px-3 py-2.5 truncate text-[13.5px] font-semibold text-text-primary">{t.nombre}</p>
            </Link>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
