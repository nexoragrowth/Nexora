import type { ReactNode } from "react";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* Un equipo de especialistas, no una sola contratación (el "pool of senior specialists" de designme.agency).
   Roles sin nombres, sin fotos y sin cantidad: salen del reparto de dueños del 2026-10-22. */

const trazo = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const ROLES: { rol: string; texto: string; icono: ReactNode }[] = [
  {
    rol: "Responsable de tu cuenta",
    texto: "Tu contacto. Lleva las prioridades del mes, la llamada y el seguimiento.",
    icono: <path {...trazo} d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 19.5c.8-3.3 3.6-5 7-5s6.2 1.7 7 5" />,
  },
  {
    rol: "Sistemas y desarrollo",
    texto: "Webs, CRM, WhatsApp y los sistemas a medida.",
    icono: <path {...trazo} d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13" />,
  },
  {
    rol: "Publicidad en Meta",
    texto: "La campaña, las pruebas de creativos y el ajuste.",
    icono: <path {...trazo} d="M4 13.5V10.5l11-5v13l-11-5ZM15 9.5h2.5a2.5 2.5 0 0 1 0 5H15" />,
  },
  {
    rol: "Contenido en video",
    texto: "Grabación y edición de reels con material de tu negocio.",
    icono: <path {...trazo} d="M4 7h11v10H4V7ZM15 10.5l5-3v9l-5-3" />,
  },
  {
    rol: "Contenido con IA y diseño",
    texto: "Videos con IA, carruseles y páginas.",
    icono: <path {...trazo} d="M12 4.5l1.6 4.4 4.4 1.6-4.4 1.6L12 16.5l-1.6-4.4-4.4-1.6 4.4-1.6L12 4.5ZM18 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />,
  },
];

const PARTES = ["Contenido", "Publicidad", "WhatsApp", "CRM", "Sistemas", "Números"];

const RAZONES: { titulo: string; texto: string }[] = [
  { titulo: "Cada tarea, al que la sabe hacer.", texto: "Un reel lo graba quien graba; un sistema lo arma quien programa." },
  {
    titulo: "Lo que atrae y lo que atiende, en el mismo circuito.",
    texto: "El que arma la publicidad ve qué pasa después en tu WhatsApp, así no pagás para atraer y lo perdés en la respuesta.",
  },
  { titulo: "Nada que buscar ni coordinar.", texto: "Un responsable lleva el equipo y vos ves el avance en tu portal." },
];

function Partes({ prendidas, centro }: { prendidas: "una" | "todas"; centro: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2" aria-hidden="true">
      {PARTES.map((p, i) => {
        const on = prendidas === "todas" || i === 0;
        return (
          <span
            key={p}
            className={`rounded-md border px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
              on ? "border-accent/40 bg-accent/[0.1] text-accent" : "border-dashed border-white/15 text-text-muted/70"
            }`}
          >
            {p}
          </span>
        );
      })}
      <span
        className={`rounded-md px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider ${
          prendidas === "todas" ? "bg-accent text-bg-primary" : "border border-white/20 text-text-secondary"
        }`}
      >
        {centro}
      </span>
    </div>
  );
}

export default function Equipo() {
  return (
    <section id="equipo" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <Encabezado
        etiqueta="Un equipo, todas las partes"
        titulo={
          <>
            Un equipo de especialistas, <Resaltado>no una sola contratación</Resaltado>
          </>
        }
        bajada="Contenido, publicidad, WhatsApp y sistemas. Cada suscripción tiene un responsable de tu cuenta y la gente que el trabajo necesita, de un mismo equipo de La Plata."
      />

      <FadeUp delay={0.06} className="mt-12 rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm divide-y divide-border">
        {ROLES.map((r) => (
          <div key={r.rol} className="grid gap-2 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center px-5 py-4 sm:px-6">
            <p className="flex items-center gap-3 font-display text-[16px] font-bold text-text-primary">
              <span className="w-9 h-9 shrink-0 rounded-lg border border-accent/20 bg-accent/[0.07] text-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-hidden="true">
                  {r.icono}
                </svg>
              </span>
              {r.rol}
            </p>
            <p className="text-[15px] text-text-secondary sm:pl-0 pl-12">{r.texto}</p>
          </div>
        ))}
      </FadeUp>

      <FadeUp delay={0.08} className="mt-16">
        <h3 className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-extrabold text-text-primary">Por qué un equipo le gana a una persona</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg-card/40 p-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-text-muted">Una contratación</p>
            <p className="mt-2 text-[16px] font-semibold text-text-secondary">Lo que sabe esa persona. Lo demás, otra búsqueda.</p>
            <Partes prendidas="una" centro="Una persona" />
          </div>
          <div className="luz filo rounded-2xl border border-accent/30 bg-accent/[0.04] p-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Nexora</p>
            <p className="mt-2 text-[16px] font-semibold text-text-primary">Un especialista para cada parte, con un responsable.</p>
            <Partes prendidas="todas" centro="Responsable" />
          </div>
        </div>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {RAZONES.map((r, i) => (
            <li key={r.titulo} className="flex gap-3">
              <span className="font-display text-[13px] font-bold text-accent">0{i + 1}</span>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                <span className="font-semibold text-text-primary">{r.titulo}</span> {r.texto}
              </p>
            </li>
          ))}
        </ol>
      </FadeUp>
    </section>
  );
}
