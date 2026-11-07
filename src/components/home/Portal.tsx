import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* El diferencial del tablero: el Portal Nexora. La pantalla es de ejemplo, sin datos de ningún cliente. */

const QUE_VES = [
  "Qué se está haciendo este mes",
  "Lo que ya se entregó",
  "Lo que falta de tu lado",
  "Las métricas de lo que se priorizó",
  "Los accesos, guardados en un solo lugar",
];

const COLUMNAS: { titulo: string; tono: string; tareas: string[] }[] = [
  { titulo: "En curso", tono: "text-sky-300 border-sky-300/25 bg-sky-400/10", tareas: ["Guiones de la semana", "Campaña de consultas"] },
  { titulo: "Falta de tu lado", tono: "text-amber-300 border-amber-300/25 bg-amber-400/10", tareas: ["Aprobar los videos", "Pasar la lista de precios"] },
  { titulo: "Entregado", tono: "text-accent border-accent/25 bg-accent/10", tareas: ["Respuestas por WhatsApp", "Agenda conectada"] },
];

export default function Portal() {
  return (
    <section id="portal" className="relative border-y border-border bg-white/[0.012]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Encabezado
            etiqueta="El portal"
            titulo={
              <>
                Siempre sabés <Resaltado>qué estamos haciendo</Resaltado>
              </>
            }
            bajada="Cada cliente tiene su portal. Ahí ves el trabajo del mes sin tener que preguntar."
          />
          <FadeUp delay={0.08} className="mt-8">
            <ul className="space-y-3">
            {QUE_VES.map((q) => (
              <li key={q} className="flex gap-3 text-[16px] text-text-secondary">
                <svg viewBox="0 0 16 16" className="mt-[5px] w-3.5 h-3.5 shrink-0 text-accent" aria-hidden="true">
                  <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {q}
              </li>
            ))}
            </ul>
          </FadeUp>
        </div>

        <FadeUp delay={0.1} className="borde-vivo rounded-2xl border border-white/[0.06] bg-[#0b1020]/90 backdrop-blur-md shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
          <div aria-hidden="true">
          <div className="flex items-center gap-1.5 px-4 h-9 border-b border-white/[0.07]">
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="ml-3 text-[11px] font-semibold text-text-muted">Portal Nexora · Este mes</span>
          </div>
          <div className="p-4 grid gap-3 sm:grid-cols-3">
            {COLUMNAS.map((c) => (
              <div key={c.titulo} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10.5px] font-semibold ${c.tono}`}>{c.titulo}</span>
                <ul className="mt-3 space-y-2">
                  {c.tareas.map((t) => (
                    <li key={t} className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-[12px] font-medium text-text-secondary">
                      {t}
                      <span className="mt-2 block h-1 w-2/3 rounded-full bg-white/10" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </div>
          <p className="px-4 pb-4 text-[11px] text-text-muted">Pantalla de ejemplo</p>
        </FadeUp>
      </div>
    </section>
  );
}
