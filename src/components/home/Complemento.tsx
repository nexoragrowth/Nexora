"use client";

import { useId, useState } from "react";
import FadeUp from "../FadeUp";
import { BotonLlamada } from "../BotonesContacto";
import { IconoCheck } from "../Iconos";

/* Para quien ya tiene una parte cubierta con otro equipo (por ejemplo, una agencia que le hace el
   contenido y la publicidad). No se venden partes sueltas con precio propio: es la misma suscripción,
   con las partes que faltan, y el precio sale en la llamada como un solo número (regla "un sistema,
   un número"). Si alguien marca todo como cubierto, no se le ofrece un paquete reducido: se lo invita
   a la llamada. Nada de prometer medición que hoy no existe (de dónde viene cada cliente, qué vendió). */

const PARTES = [
  { titulo: "Atraemos", texto: "Contenido y publicidad" },
  { titulo: "Convertimos", texto: "WhatsApp y seguimiento" },
  { titulo: "Organizamos", texto: "CRM, agenda y stock" },
] as const;

const SIEMPRE = ["Optimizamos: los números del mes y una mejora activa a la vez", "Un responsable de tu cuenta", "Tu portal"];

function lista(partes: string[]) {
  if (partes.length === 1) return `la parte de ${partes[0]}`;
  return `las partes de ${partes.slice(0, -1).join(", ")} y ${partes[partes.length - 1]}`;
}

export default function Complemento() {
  // El ejemplo de arranque: un negocio que ya tiene el contenido y la publicidad con otra agencia.
  const [cubiertas, setCubiertas] = useState<string[]>(["Atraemos"]);
  const alternar = (t: string) => setCubiertas((c) => (c.includes(t) ? c.filter((x) => x !== t) : [...c, t]));
  const sumamos = PARTES.filter((p) => !cubiertas.includes(p.titulo)).map((p) => p.titulo);
  const idConsigna = useId();

  return (
    <FadeUp delay={0.08} className="mt-6 rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">¿Ya tenés una parte cubierta?</p>
          <h3 className="mt-3 font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-extrabold leading-tight text-text-primary">
            Sumamos lo que falta, para que funcione con lo que ya tenés
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            Si otro equipo ya te hace el contenido y la publicidad, no lo reemplazamos. Por ejemplo: armamos que las consultas
            que trae su publicidad se atiendan por WhatsApp y queden en tu CRM, para que ninguna se pierda.
          </p>
          <p className="mt-4 text-[14px] text-text-secondary">
            Es la misma suscripción, con las partes que te faltan. El precio te lo decimos en la llamada, en un solo número.
          </p>
          <BotonLlamada texto="Contanos qué ya tenés" className="mt-6" />
        </div>

        <div className="rounded-xl border border-border-strong bg-bg-primary/60 p-5">
          <p id={idConsigna} className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-text-secondary">
            Marcá lo que ya tenés cubierto
          </p>
          <div className="mt-3 grid gap-2" role="group" aria-labelledby={idConsigna}>
            {PARTES.map((p) => {
              const cubierta = cubiertas.includes(p.titulo);
              return (
                <button
                  key={p.titulo}
                  type="button"
                  aria-pressed={cubierta}
                  aria-label={`${p.titulo}: ${p.texto}. Ya lo tengo cubierto`}
                  onClick={() => alternar(p.titulo)}
                  className={`flex items-center justify-between gap-3 rounded-lg border px-3.5 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    cubierta
                      ? "border-border-strong bg-white/[0.03] hover:border-white/25"
                      : "border-accent/30 bg-accent/[0.06] hover:border-accent/50"
                  }`}
                >
                  <span className="min-w-0">
                    <span className={`block text-[14.5px] font-bold ${cubierta ? "text-text-secondary line-through decoration-white/30" : "text-text-primary"}`}>
                      {p.titulo}
                    </span>
                    <span className="block text-[12.5px] text-text-secondary">{p.texto}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11.5px] font-semibold ${
                      cubierta ? "border-border-strong text-text-secondary" : "border-accent/30 text-accent"
                    }`}
                  >
                    {cubierta ? "Ya lo tengo" : "Lo sumamos"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 border-t border-border pt-4">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-text-secondary">Va siempre</p>
            <ul className="mt-3 space-y-2">
              {SIEMPRE.map((s) => (
                <li key={s} className="flex gap-2.5 text-[14px] leading-snug text-text-primary">
                  <IconoCheck className="mt-[2px] w-4 h-4 shrink-0 text-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-[14px] text-text-secondary" aria-live="polite">
            {sumamos.length === 0
              ? "Si ya tenés todo eso cubierto, contanos en la llamada qué te falta conectar y vemos si tiene sentido trabajar juntos."
              : `Nosotros sumamos ${lista(sumamos)}, más lo que va siempre.`}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}
