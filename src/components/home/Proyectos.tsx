import Image from "next/image";
import Link from "next/link";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado, Coma } from "../Encabezado";
import { Flecha } from "../Iconos";
import { DESTACADOS, TRABAJOS } from "@/lib/trabajos";

/* Proyectos reales (el "Real projects, real timelines" de designme.agency). La escala es de etapas
   y no de tiempo, porque no publicamos plazos. Sin cifras. Al final, una sola franja chica de webs:
   las webs son una parte del trabajo, no la suscripción entera. */

const ETAPAS = ["Relevamiento", "Construcción", "Prueba", "En uso"] as const;
type Etapa = (typeof ETAPAS)[number];

const PROYECTOS: { nombre: string; rubro: string; texto: string; etapa: Etapa; nota?: string; href: string; link: string; foto?: string }[] = [
  {
    nombre: "Dra. Raquel Rodríguez",
    rubro: "Ortodoncia · Jujuy",
    texto: "Su web y los turnos por WhatsApp, al lado de su secretaria.",
    etapa: "En uso",
    href: "/casos/raquel",
    link: "Ver el caso",
    foto: "/raquel/raquel.png",
  },
  {
    nombre: "TrendSpot",
    rubro: "Venta de iPhones",
    texto: "La tienda online y el sistema para vender por WhatsApp.",
    etapa: "Prueba",
    nota: "Panel, stock y agenda probados con datos de ejemplo · el asistente, en piloto",
    href: "/casos/trendspot",
    link: "Ver el caso",
  },
  {
    nombre: "Traslap",
    rubro: "Logística · Última milla",
    texto: "El sistema de liquidaciones: calcula lo que se le paga a cada uno, sin IA en el cálculo.",
    etapa: "Construcción",
    nota: "2 de 5 etapas hechas · en curso: que dé igual que la cuenta a mano",
    href: "/casos/traslap",
    link: "Ver en qué está",
  },
  {
    nombre: "Nexora",
    rubro: "Nuestro propio proyecto",
    texto: "Nexora también es cliente de Nexora: el Portal y el Content Engine se construyeron como un proyecto más.",
    etapa: "En uso",
    href: "/#como-funciona",
    link: "Ver cómo trabajamos",
  },
];

function Barra({ etapa }: { etapa: Etapa }) {
  const i = ETAPAS.indexOf(etapa);
  const ancho = `${(i / (ETAPAS.length - 1)) * 100}%`;
  return (
    <div className="relative h-8" role="img" aria-label={`Etapa: ${etapa}`}>
      <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] rounded-full bg-white/[0.08]" />
      <span
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full bg-gradient-to-r from-accent/40 to-accent"
        style={{ width: ancho }}
      />
      <span
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-[4px] border-2 border-accent bg-bg-primary shadow-[0_0_14px_rgba(0,230,118,0.55)]"
        style={{ left: ancho }}
      />
    </div>
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
            Proyectos reales<Coma /> <Resaltado>en qué está cada uno</Resaltado>
          </>
        }
        bajada="Lo que armamos, contado como está hoy: lo que anda, lo que está en prueba y lo que falta. Los números, cuando estén medidos."
      />

      <FadeUp delay={0.06} className="tarjeta mt-12 rounded-2xl border border-border overflow-hidden">
        {/* Encabezado de la escala (desde md) */}
        <div className="hidden md:grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-8 px-6 py-3 border-b border-border text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
          <span>Del relevamiento al uso · una misma escala</span>
          <div className="flex justify-between">
            {ETAPAS.map((e) => (
              <span key={e}>{e}</span>
            ))}
          </div>
        </div>

        <ul className="divide-y divide-border">
          {PROYECTOS.map((p) => (
            <li key={p.nombre}>
              <Link
                href={p.href}
                className="group grid gap-4 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-8 md:items-center px-5 py-5 sm:px-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex gap-3.5 min-w-0">
                  {p.foto ? (
                    <Image src={p.foto} alt="" width={44} height={44} className="w-11 h-11 shrink-0 rounded-full object-cover object-[center_15%] border border-border" />
                  ) : (
                    <span className="w-11 h-11 shrink-0 rounded-full border border-accent/30 bg-gradient-to-br from-accent/25 to-accent/5 flex items-center justify-center font-display text-[15px] font-extrabold text-accent">
                      {p.nombre.charAt(0)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="font-display text-[17px] font-bold text-text-primary">
                      {p.nombre} <span className="ml-1 text-[13px] font-medium text-text-muted">{p.rubro}</span>
                    </p>
                    <p className="mt-1 text-[14.5px] leading-snug text-text-secondary">{p.texto}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                      {p.link} <Flecha className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex md:hidden justify-between text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    {ETAPAS.map((e) => (
                      <span key={e}>{e}</span>
                    ))}
                  </div>
                  <Barra etapa={p.etapa} />
                  <p className="text-[12.5px] text-text-muted">
                    <span className="font-semibold text-text-secondary">{p.etapa}</span>
                    {p.nota && <> · {p.nota}</>}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
