import type { ReactNode } from "react";
import Link from "next/link";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";
import { Flecha } from "../Iconos";

/* Los sistemas que ya construyó el equipo, cada uno con su estado real (2026-11-07).
   Sin cifras ni resultados: dónde se usa y en qué está. */

const trazo = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

type Estado = "En uso" | "En piloto" | "En construcción";

const TONO: Record<Estado, string> = {
  "En uso": "text-accent border-accent/25 bg-accent/10",
  "En piloto": "text-sky-300 border-sky-300/25 bg-sky-400/10",
  "En construcción": "text-amber-300 border-amber-300/25 bg-amber-400/10",
};

const SISTEMAS: { nombre: string; texto: string; donde: string; estado: Estado; href?: string; icono: ReactNode }[] = [
  {
    nombre: "Portal Nexora",
    texto: "Clientes, proyectos, ventas, prospección, tareas y finanzas en un solo lugar. Cada proyecto tiene sus etapas, sus pedidos y sus decisiones.",
    donde: "Con él trabaja todo el equipo",
    estado: "En uso",
    href: "/#portal",
    icono: (
      <>
        <rect {...trazo} x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path {...trazo} d="M3.5 9h17M9 9v10.5" />
      </>
    ),
  },
  {
    nombre: "Content Engine",
    texto: "Lo que publica la competencia, el banco de ideas, los guiones de la semana, los carruseles y el calendario de publicaciones.",
    donde: "Con él armamos nuestro contenido",
    estado: "En uso",
    icono: <path {...trazo} d="M5 4.5h10l4 4v11H5v-15ZM15 4.5v4h4M8.5 12.5h7M8.5 16h5" />,
  },
  {
    nombre: "Ventas por WhatsApp",
    texto: "Todas las líneas en una bandeja, stock por IMEI, agenda atada al stock, cotizador de canje y un asistente con modo sombra.",
    donde: "TrendSpot",
    estado: "En piloto",
    href: "/casos/trendspot",
    icono: <path {...trazo} d="M4 5.5h16v10H9l-5 4v-14ZM8.5 10.5h7" />,
  },
  {
    nombre: "Turnos por WhatsApp",
    texto: "Agenda, confirma, recuerda, cancela y reprograma turnos mirando la agenda del consultorio. Lo urgente, a una persona.",
    donde: "Dra. Raquel Rodríguez",
    estado: "En uso",
    href: "/casos/raquel",
    icono: (
      <>
        <rect {...trazo} x="4" y="5.5" width="16" height="14" rx="2" />
        <path {...trazo} d="M4 10h16M8.5 3.5v4M15.5 3.5v4M9 14.5l2 2 4-4" />
      </>
    ),
  },
  {
    nombre: "Liquidaciones",
    texto: "Lee los envíos que ya exporta el negocio y calcula lo que se le paga a cada uno, con tarifas y reglas a la vista. Sin IA en el cálculo.",
    donde: "Traslap",
    estado: "En construcción",
    href: "/casos/traslap",
    icono: <path {...trazo} d="M5 19.5h14M7 16V11M12 16V7M17 16v-3" />,
  },
  {
    nombre: "Demos con tu marca",
    texto: "Analizamos el Instagram y la web de un negocio y armamos una demo con su marca real. Una persona la revisa antes de mostrarla.",
    donde: "Las demos de la sección Webs",
    estado: "En uso",
    href: "/webs",
    icono: <path {...trazo} d="M4 6.5h16v11H4v-11ZM4 10h16M8 14h4" />,
  },
];

export default function Sistemas() {
  return (
    <section id="sistemas" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <Encabezado
        etiqueta="Sistemas propios"
        titulo={
          <>
            No arrancamos de cero: <Resaltado>ya lo construimos</Resaltado>
          </>
        }
        bajada="Estos son los sistemas que armó el equipo. Lo que se construye para un negocio se reutiliza y se adapta al siguiente, con su marca y su forma de trabajar."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SISTEMAS.map((s, i) => {
          const cuerpo = (
            <>
              <div className="flex items-start justify-between gap-3">
                <span className="w-11 h-11 rounded-xl border border-accent/20 bg-accent/[0.07] text-accent flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    {s.icono}
                  </svg>
                </span>
                <span className={`rounded-full border px-2.5 py-1 text-[11.5px] font-semibold ${TONO[s.estado]}`}>{s.estado}</span>
              </div>
              <h3 className="mt-5 text-[20px] font-extrabold text-text-primary">{s.nombre}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{s.texto}</p>
              <p className="mt-auto pt-5 flex items-center justify-between gap-3 text-[13px] font-medium text-text-muted">
                <span>{s.donde}</span>
                {s.href && <Flecha className="w-4 h-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />}
              </p>
            </>
          );
          const clase =
            "group luz filo flex h-full flex-col rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm p-6 transition-colors";
          return (
            <FadeUp key={s.nombre} delay={(i % 3) * 0.05}>
              {s.href ? (
                <Link href={s.href} className={`${clase} hover:border-accent/40`}>
                  {cuerpo}
                </Link>
              ) : (
                <div className={clase}>{cuerpo}</div>
              )}
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
