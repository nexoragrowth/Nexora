import type { ReactNode } from "react";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado, Coma } from "../Encabezado";
import { IconoCheck } from "../Iconos";

/* Un equipo de especialistas, no una sola contratación (el "pool of senior specialists" de designme.agency).
   Roles sin nombres, sin fotos y sin cantidad: salen del reparto de dueños del 2026-10-22.
   Desde el 2026-11-07 va en una sola vista que cierra la idea: hablás con una persona y ella coordina
   al resto. La comparación "una contratación contra un equipo" ya está en la sección Comparación. */

const trazo = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const RESPONSABLE = {
  rol: "Responsable de tu cuenta",
  texto: "Lleva las prioridades del mes, la llamada y el seguimiento.",
  icono: <path {...trazo} d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 19.5c.8-3.3 3.6-5 7-5s6.2 1.7 7 5" />,
};

const ESPECIALISTAS: { rol: string; texto: string; icono: ReactNode }[] = [
  {
    rol: "Sistemas y desarrollo",
    texto: "Webs, CRM, WhatsApp y sistemas a medida.",
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

const RAZONES: { titulo: string; texto: string }[] = [
  { titulo: "Cada tarea, al que la sabe hacer.", texto: "Un reel lo graba quien graba; un sistema lo arma quien programa." },
  {
    titulo: "Lo que atrae y lo que atiende, en el mismo equipo.",
    texto: "El que arma la publicidad ve qué pasa después en tu WhatsApp, así lo que atrae no se pierde en la respuesta.",
  },
];

function Icono({ children, fuerte = false }: { children: ReactNode; fuerte?: boolean }) {
  return (
    <span
      className={`w-10 h-10 shrink-0 rounded-xl border flex items-center justify-center text-accent ${
        fuerte ? "border-accent/40 bg-accent/[0.12] shadow-[0_0_18px_rgba(0,230,118,0.25)]" : "border-accent/20 bg-accent/[0.07]"
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

export default function Equipo() {
  return (
    <section id="equipo" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:items-center">
        <div>
          <Encabezado
            etiqueta="Un equipo, todas las partes"
            titulo={
              <>
                Un equipo de especialistas<Coma /> <Resaltado>no una sola contratación</Resaltado>
              </>
            }
            bajada="Contenido, publicidad, WhatsApp y sistemas, cada parte con quien la sabe hacer. Vos hablás con una sola persona."
          />
          <FadeUp delay={0.06}>
            <ul className="mt-8 space-y-5">
              {RAZONES.map((r) => (
                <li key={r.titulo} className="flex gap-3">
                  <IconoCheck className="mt-[3px] w-[18px] h-[18px] shrink-0 text-accent" />
                  <p className="text-[15px] leading-relaxed text-text-secondary">
                    <span className="font-semibold text-text-primary">{r.titulo}</span> {r.texto}
                  </p>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <FadeUp delay={0.08} className="tarjeta rounded-2xl border border-border p-5 sm:p-7">
          {/* Con quién hablás */}
          <div className="luz filo flex items-center gap-4 rounded-xl border border-accent/30 bg-accent/[0.05] px-4 py-4 sm:px-5">
            <Icono fuerte>{RESPONSABLE.icono}</Icono>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">Tu contacto</p>
              <p className="mt-0.5 font-display text-[17px] font-bold text-text-primary">{RESPONSABLE.rol}</p>
              <p className="mt-0.5 text-[14px] leading-snug text-text-secondary">{RESPONSABLE.texto}</p>
            </div>
          </div>

          {/* Une al responsable con los especialistas */}
          <div className="relative flex items-center justify-center py-4" aria-hidden="true">
            <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-accent/60 to-accent/10" />
            <span className="relative rounded-full border border-border-strong bg-bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Coordina a
            </span>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {ESPECIALISTAS.map((e) => (
              <li key={e.rol} className="flex gap-3 rounded-xl border border-border bg-white/[0.015] px-4 py-3.5">
                <Icono>{e.icono}</Icono>
                <div className="min-w-0">
                  <p className="font-display text-[15px] font-bold leading-tight text-text-primary">{e.rol}</p>
                  <p className="mt-1 text-[13.5px] leading-snug text-text-secondary">{e.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-5 border-t border-border pt-5 text-[15px] leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">Nada que buscar ni coordinar.</span> Cada mes trabaja la gente que
            ese mes necesita, y el avance lo ves en tu portal.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
