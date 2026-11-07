"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "../FadeUp";
import Encabezado from "../Encabezado";

/* Preguntas frecuentes de Nexora Subscription (2026-11-07). Sin precio, sin plazos y sin garantías:
   el precio se dice en la llamada. */
const PREGUNTAS = [
  {
    q: "¿Qué es Nexora Subscription?",
    a: "Un equipo de sistemas y crecimiento que trabaja para tu negocio todos los meses, por una suscripción mensual. En vez de contratar y coordinar a varias personas, tenés un responsable, un portal y un equipo que hace contenido, publicidad y sistemas.",
  },
  {
    q: "¿Cuánto sale?",
    a: "Depende de la etapa de tu negocio y de cuánta capacidad necesitás. Lo vemos en la llamada y te lo decimos claro antes de arrancar. La inversión en publicidad va aparte y la pagás vos directo.",
  },
  {
    q: "¿Puedo pausar o cancelar?",
    a: "Sí. Es mes a mes: podés pausar o cancelar cuando quieras, sin contratos largos.",
  },
  {
    q: "¿Y si quiero pedir muchas cosas a la vez?",
    a: "Las anotamos todas y las ordenamos por prioridad. Trabajamos una iniciativa activa a la vez, para que cada cosa salga bien y se pueda medir. Los proyectos grandes se presupuestan aparte.",
  },
  {
    q: "¿Usan IA?",
    a: "Sí, en todo lo que se puede acelerar: borradores, variantes, atención por WhatsApp y tareas que se repiten. Pero nada sale sin que una persona del equipo lo revise.",
  },
  {
    q: "¿Reemplaza a mi equipo?",
    a: "No: lo libera. Lo que armamos se queda con lo repetitivo y trabaja al lado de tu equipo, no en su lugar. Lo que necesita criterio lo resuelve una persona.",
  },
  {
    q: "¿Sirve para mi rubro?",
    a: "Hoy trabajamos con un consultorio, un comercio de celulares y una empresa de logística, entre otros. Si el tuyo es de otro rubro, lo vemos en la llamada.",
  },
  {
    q: "¿Qué pasa cuando agendo?",
    a: "Primero respondés unas preguntas cortas sobre tu negocio. En la llamada vemos cómo trabajás y, si tiene sentido, te proponemos cómo arrancar.",
  },
];

export default function Preguntas() {
  const [abierta, setAbierta] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="preguntas" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <Encabezado
        etiqueta="Preguntas"
        titulo="Lo que nos preguntan siempre"
        bajada="Si tu duda no está acá, escribinos y te contestamos."
      />

      <FadeUp className="space-y-3">
        {PREGUNTAS.map((p, i) => {
          const estaAbierta = abierta === i;
          const idBoton = `${base}-q${i}`;
          const idPanel = `${base}-a${i}`;
          return (
            <div
              key={p.q}
              className={`rounded-2xl border transition-colors ${
                estaAbierta ? "border-accent/30 bg-bg-card/60 backdrop-blur-sm" : "border-border bg-bg-card/60 hover:bg-bg-card"
              }`}
            >
              <h3>
                <button
                  id={idBoton}
                  type="button"
                  aria-expanded={estaAbierta}
                  aria-controls={idPanel}
                  onClick={() => setAbierta(estaAbierta ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-[16.5px] font-semibold text-text-primary"
                >
                  {p.q}
                  <motion.svg
                    aria-hidden="true"
                    animate={{ rotate: estaAbierta ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-4 h-4 shrink-0 ${estaAbierta ? "text-accent" : "text-text-muted"}`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </motion.svg>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {estaAbierta && (
                  <motion.div
                    id={idPanel}
                    role="region"
                    aria-labelledby={idBoton}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[15.5px] leading-relaxed text-text-secondary">{p.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </FadeUp>
    </section>
  );
}
