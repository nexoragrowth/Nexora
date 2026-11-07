"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "../FadeUp";
import Link from "next/link";
import Encabezado from "../Encabezado";
import { BotonLlamada } from "../BotonesContacto";
import { EMAIL } from "@/lib/contacto";

/* Preguntas frecuentes de Nexora Subscription (el "Questions founders ask" de designme.agency).
   Sin precio, sin plazos y sin garantías: el precio se dice en la llamada. */
const PREGUNTAS: { q: string; a: string; link?: { href: string; texto: string } }[] = [
  {
    q: "¿Qué es Nexora Subscription?",
    a: "Un equipo de sistemas y crecimiento que trabaja para tu negocio todos los meses, por una suscripción mensual. En vez de contratar y coordinar a varias personas, tenés un responsable, un portal y un equipo que hace contenido, publicidad y sistemas.",
  },
  {
    q: "¿Reemplaza a mi equipo?",
    a: "No: lo libera. Lo que armamos se queda con lo repetitivo y trabaja al lado de tu equipo, no en su lugar. Lo que necesita criterio lo resuelve una persona.",
  },
  {
    q: "¿Por qué una suscripción y no contratar a alguien?",
    a: "Porque una persona sabe lo suyo. Con la suscripción tenés contenido, publicidad, WhatsApp y sistemas en un mismo equipo, con un responsable.",
  },
  {
    q: "¿Quién trabaja en mi negocio?",
    a: "Un responsable de tu cuenta y los especialistas que el trabajo necesita: sistemas, publicidad, video y diseño.",
  },
  {
    q: "¿Usan IA?",
    a: "Sí, en todo lo que se puede acelerar: borradores, variantes, atención por WhatsApp y tareas que se repiten. Pero nada sale sin que una persona del equipo lo revise.",
  },
  {
    q: "¿Cuánto sale?",
    a: "Depende de la etapa de tu negocio y de cuánta capacidad necesitás. Lo vemos en la llamada y te lo decimos claro antes de arrancar. La inversión en publicidad va aparte y la pagás vos directo.",
  },
  {
    q: "Ya trabajo con una agencia de contenido o de publicidad. ¿Me sirve?",
    a: "Sí. No reemplazamos a tu agencia: sumamos las partes que faltan y las armamos para que funcionen con lo que ya hace. Por ejemplo, que las consultas que trae su publicidad se atiendan por WhatsApp y queden en tu CRM. Es la misma suscripción, con las partes que te faltan, y el precio te lo decimos en la llamada, en un solo número.",
  },
  {
    q: "¿Y si quiero pedir muchas cosas a la vez?",
    a: "Las anotamos todas y las ordenamos por prioridad. Trabajamos una mejora activa a la vez, para que cada cosa salga bien y se pueda medir. Los proyectos grandes se presupuestan aparte.",
  },
  {
    q: "¿Puedo pausar o cancelar?",
    a: "Sí. Es mes a mes: podés pausar o cancelar cuando quieras, sin contratos largos.",
  },
  {
    q: "¿Cómo veo el avance?",
    a: "En tu portal: las etapas de tu proyecto y en cuál está, lo que se entregó, lo que falta de tu lado y las decisiones que se tomaron, con su fecha.",
  },
  {
    q: "¿También hacen webs?",
    a: "Sí. La web es una de las cosas que hace el equipo dentro de la suscripción, no la suscripción entera. Partimos de tu marca real: tus colores, tus fotos y cómo hablás.",
    link: { href: "/webs", texto: "Mirá webs y demos" },
  },
  {
    q: "¿Sirve para mi rubro?",
    a: "Hoy hay proyectos en salud, logística y venta de celulares. Si el tuyo es de otro rubro, lo vemos en la llamada.",
  },
];

export default function Preguntas() {
  const [abierta, setAbierta] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="preguntas" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Encabezado
          etiqueta="Preguntas"
          titulo="Lo que preguntan los dueños"
          bajada="Quién trabaja, cómo arrancamos, qué pasa si cambian las prioridades y cómo se compara con contratar a alguien."
        />
        <FadeUp delay={0.06} className="mt-8">
          <BotonLlamada texto="Mejor, agendá una llamada" />
          <p className="mt-4 text-[14px] text-text-muted">
            O escribinos a{" "}
            <a href={`mailto:${EMAIL}`} className="text-text-secondary underline underline-offset-4 hover:text-text-primary">
              {EMAIL}
            </a>
          </p>
        </FadeUp>
      </div>

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
                    <p className="px-6 pb-6 text-[15.5px] leading-relaxed text-text-secondary">
                      {p.a}
                      {p.link && (
                        <>
                          {" "}
                          <Link href={p.link.href} className="font-semibold text-accent hover:underline underline-offset-4">
                            {p.link.texto}
                          </Link>
                        </>
                      )}
                    </p>
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
