"use client";

import { useState, type ReactNode } from "react";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";
import BotonesContacto from "../BotonesContacto";
import { IconoCheck } from "../Iconos";
import Complemento from "./Complemento";

/* La suscripción (el "Pick a monthly plan" de designme.agency), sin montos: a la izquierda las
   cuatro partes del tablero y a la derecha la tarjeta de Nexora Subscription. El precio se dice en la llamada. */

const trazo = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const PARTES: { titulo: string; bajada: string; items: string[]; icono: ReactNode }[] = [
  {
    titulo: "Atraemos",
    bajada: "Que te conozcan los clientes que buscás.",
    items: ["Contenido con material de tu negocio", "Una campaña principal en Meta, con pruebas de creativos", "Webs y landings"],
    icono: <path {...trazo} d="M4 13.5V10.5l11-5v13l-11-5ZM15 9.5h2.5a2.5 2.5 0 0 1 0 5H15M7 14l1.5 5h2.5L9.5 14" />,
  },
  {
    titulo: "Convertimos",
    bajada: "Que ninguna consulta se enfríe.",
    items: ["WhatsApp atendido por un asistente que contesta, pregunta y deriva", "Seguimiento de los que no compraron", "Calificación de cada consulta"],
    icono: <path {...trazo} d="M4 5.5h16v10H9l-5 4v-14ZM8.5 10.5h7" />,
  },
  {
    titulo: "Organizamos",
    bajada: "Que el negocio no dependa de tu memoria.",
    items: ["CRM con la ficha y la etapa de cada consulta", "Agenda y stock", "Sistemas a medida de cómo trabajás"],
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
    items: ["Los números del mes: qué entró y qué se cerró", "Qué funciona y qué no", "Una mejora activa a la vez"],
    icono: <path {...trazo} d="M4 19.5h16M6.5 16l4-5 3 3 5-7M15 7h3.5v3.5" />,
  },
];

const TODOS_LOS_MESES: [string, string][] = [
  ["Una mejora activa a la vez", "Lo demás, anotado y ordenado por prioridad."],
  ["Un responsable de tu cuenta", "Tu contacto para todo lo del mes."],
  ["Tu portal", "Lo que se hace, lo que falta y lo que se entregó."],
  ["Un reporte por mes", "Con los números del mes."],
];

function Item({ titulo, texto }: { titulo: string; texto?: string }) {
  return (
    <li className="flex gap-2.5">
      <IconoCheck className="mt-[3px] w-4 h-4 shrink-0 text-accent" />
      <span className="text-[14.5px] leading-snug">
        <span className="font-semibold text-text-primary">{titulo}</span>
        {texto && <span className="block text-text-muted">{texto}</span>}
      </span>
    </li>
  );
}

export default function QueIncluye() {
  const [elegida, setElegida] = useState(0);
  const parte = PARTES[elegida];

  return (
    <section id="que-incluye" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <Encabezado
        etiqueta="La suscripción"
        centrado
        titulo={
          <>
            Una suscripción, <Resaltado>cuatro partes</Resaltado>
          </>
        }
        bajada="Mes a mes. Se pausa o se cancela cuando quieras. Las cuatro partes están disponibles; cada mes ponemos el foco donde más rinde. Y si ya tenés una parte cubierta, sumamos las que faltan."
      />

      <FadeUp delay={0.06} className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.14em] text-text-muted">Elegí una parte</p>
          <div className="space-y-2.5" role="tablist" aria-label="Las cuatro partes de la suscripción">
            {PARTES.map((p, i) => {
              const activa = i === elegida;
              return (
                <button
                  key={p.titulo}
                  type="button"
                  role="tab"
                  aria-selected={activa}
                  onClick={() => setElegida(i)}
                  className={`w-full flex items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                    activa ? "border-accent/40 bg-accent/[0.08]" : "border-border bg-bg-card/60 hover:border-border-strong"
                  }`}
                >
                  <span
                    className={`w-10 h-10 shrink-0 rounded-lg border flex items-center justify-center ${
                      activa ? "border-accent/30 bg-accent/[0.1] text-accent" : "border-border text-text-secondary"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                      {p.icono}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className={`block font-display text-[16px] font-bold ${activa ? "text-text-primary" : "text-text-secondary"}`}>{p.titulo}</span>
                    <span className="block text-[13.5px] text-text-muted">{p.bajada}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-5 text-[13.5px] leading-relaxed text-text-muted">
            La publicidad la pagás aparte, directo a Meta. Los proyectos grandes se presupuestan aparte. No vendemos horas:
            vendemos lo que se entrega y una capacidad por mes.
          </p>
        </div>

        <div className="borde-vivo rounded-2xl border border-border-strong bg-bg-card/80 backdrop-blur-sm p-6 sm:p-8">
          <p className="font-display text-[22px] font-extrabold text-text-primary">Nexora Subscription</p>
          <p className="mt-1.5 text-[15px] text-text-secondary">
            Un equipo de sistemas y crecimiento para tu negocio, todos los meses.
          </p>
          <p className="mt-6 text-[clamp(1.4rem,2.6vw,1.8rem)] font-extrabold leading-tight text-text-primary">
            El precio te lo decimos en la llamada
          </p>
          <p className="mt-1 text-[14px] text-text-muted">Según tu negocio y cuánta capacidad necesitás.</p>
          <BotonesContacto className="mt-6 flex-col items-stretch sm:flex-row [&>*]:justify-center" />

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-text-muted">Todos los meses</p>
            <ul className="mt-4 grid gap-3.5 sm:grid-cols-2">
              {TODOS_LOS_MESES.map(([t, x]) => (
                <Item key={t} titulo={t} texto={x} />
              ))}
            </ul>
          </div>

          <div className="mt-7 border-t border-border pt-6" role="tabpanel" aria-label={parte.titulo}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Lo que incluye · {parte.titulo}</p>
            <ul className="mt-4 space-y-3">
              {parte.items.map((it) => (
                <Item key={it} titulo={it} />
              ))}
            </ul>
          </div>

          <div className="mt-7 border-t border-border pt-5 flex items-center justify-between gap-3">
            <p className="text-[14px] text-text-secondary">Un responsable y los especialistas que el trabajo necesita.</p>
            <a href="#equipo" className="shrink-0 text-[14px] font-semibold text-accent hover:underline underline-offset-4">
              Ver quién trabaja
            </a>
          </div>
        </div>
      </FadeUp>

      <Complemento />
    </section>
  );
}
