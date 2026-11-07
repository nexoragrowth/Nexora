import type { ReactNode } from "react";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* Qué incluye la suscripción: los 4 pilares del tablero (atraemos, convertimos, organizamos,
   optimizamos). Cada uno dice en qué trabajo real se apoya; sin cifras. */

const trazo = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const PILARES: { titulo: string; bajada: string; items: string[]; prueba: string; icono: ReactNode }[] = [
  {
    titulo: "Atraemos",
    bajada: "Que te conozcan los clientes que buscás.",
    items: ["Contenido en video y carruseles", "Campañas en Meta", "Pautamos lo que ya funcionó en orgánico"],
    prueba: "La inversión en publicidad la pagás aparte",
    icono: <path {...trazo} d="M4 13.5V10.5l11-5v13l-11-5ZM15 9.5h2.5a2.5 2.5 0 0 1 0 5H15M7 14l1.5 5h2.5L9.5 14" />,
  },
  {
    titulo: "Convertimos",
    bajada: "Que ninguna consulta se enfríe.",
    items: ["Agentes de IA en WhatsApp que contestan y califican", "Seguimiento de cada consulta", "Lo que necesita criterio, lo atiende una persona"],
    prueba: "Turnos por WhatsApp en el consultorio de la Dra. Raquel Rodríguez",
    icono: <path {...trazo} d="M4 5.5h16v10H9l-5 4v-14ZM8.5 10.5h7" />,
  },
  {
    titulo: "Organizamos",
    bajada: "Que el negocio no dependa de tu memoria.",
    items: ["CRM y agenda", "Stock, ventas y cobros", "Sistemas a medida de cómo trabajás"],
    prueba: "La gestión de MB Cell y el cálculo de pagos de Traslap",
    icono: (
      <>
        <rect {...trazo} x="3.5" y="4" width="7" height="7" rx="1.5" />
        <rect {...trazo} x="13.5" y="4" width="7" height="7" rx="1.5" />
        <rect {...trazo} x="3.5" y="14" width="7" height="7" rx="1.5" />
        <path {...trazo} d="M17 14v7M13.5 17.5h7" />
      </>
    ),
  },
  {
    titulo: "Optimizamos",
    bajada: "Que cada mes funcione mejor que el anterior.",
    items: ["De dónde viene cada cliente", "Qué convierte y qué no", "Una mejora activa a la vez"],
    prueba: "Lo ves todo en tu portal",
    icono: <path {...trazo} d="M4 19.5h16M6.5 16l4-5 3 3 5-7M15 7h3.5v3.5" />,
  },
];

const REGLAS = [
  "Una iniciativa activa a la vez",
  "No vendemos horas: vendemos un resultado y una capacidad por mes",
  "Los proyectos grandes se presupuestan aparte",
];

export default function QueIncluye() {
  return (
    <section id="que-incluye" className="relative border-y border-border bg-white/[0.012]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <Encabezado
          etiqueta="Qué incluye"
          titulo={
            <>
              Atraemos, convertimos, organizamos <Resaltado>y optimizamos</Resaltado>
            </>
          }
          bajada="Todo lo que hace crecer a un negocio, en un solo equipo. Cada mes se pone foco donde más rinde."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PILARES.map((p, i) => (
            <FadeUp
              key={p.titulo}
              delay={i * 0.05}
              as="article"
              className="group luz filo flex flex-col rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm p-6 hover:border-border-strong transition-colors"
            >
              <span className="w-11 h-11 rounded-xl border border-accent/20 bg-accent/[0.07] text-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  {p.icono}
                </svg>
              </span>
              <h3 className="mt-5 text-[21px] font-extrabold text-text-primary">{p.titulo}</h3>
              <p className="mt-1.5 text-[14.5px] text-text-secondary">{p.bajada}</p>
              <ul className="mt-5 space-y-2.5">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-[14.5px] leading-snug text-text-primary/90">
                    <svg viewBox="0 0 16 16" className="mt-[3px] w-3.5 h-3.5 shrink-0 text-accent" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {it}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-[12.5px] font-medium text-accent/90">{p.prueba}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
          {REGLAS.map((r) => (
            <span key={r} className="rounded-full border border-border bg-bg-card/60 px-4 py-2 text-[13.5px] text-text-secondary">
              {r}
            </span>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
