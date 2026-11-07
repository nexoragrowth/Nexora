import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* El diferencial del tablero: el Portal Nexora. Sin pantallas inventadas: a la derecha van las secciones
   reales del Portal (las páginas del repo nexora-crm), sin datos de ningún cliente. */

const QUE_VES = [
  "Las etapas de tu proyecto y en cuál está",
  "Lo que ya se entregó",
  "Lo que falta de tu lado",
  "Las decisiones que se tomaron, con su fecha",
];

const SECCIONES: { nombre: string; texto: string }[] = [
  { nombre: "Hoy", texto: "Lo que toca en el día" },
  { nombre: "Ventas", texto: "Cada consulta, en su etapa" },
  { nombre: "Prospección", texto: "Negocios por contactar" },
  { nombre: "Clientes", texto: "Su ficha y su historia" },
  { nombre: "Proyectos", texto: "Etapas, pedidos y decisiones" },
  { nombre: "Tareas", texto: "Quién hace qué" },
  { nombre: "WhatsApp", texto: "Las conversaciones" },
  { nombre: "Finanzas", texto: "Cobros y gastos" },
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
            bajada="Trabajamos todo dentro del Portal Nexora, el sistema que construimos para la agencia. Cada cliente tiene ahí una vista con su proyecto, para no tener que preguntar en qué está."
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
          <div className="flex items-center gap-2 px-5 h-11 border-b border-white/[0.07]">
            <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
            <span className="text-[12.5px] font-semibold text-text-secondary">Qué hay adentro del Portal</span>
          </div>
          <ul className="p-4 grid gap-2.5 grid-cols-2">
            {SECCIONES.map((s) => (
              <li key={s.nombre} className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3.5">
                <p className="font-display text-[15px] font-bold text-text-primary">{s.nombre}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-text-muted">{s.texto}</p>
              </li>
            ))}
          </ul>
          <p className="px-5 pb-5 text-[12.5px] text-text-muted">Son las secciones reales del Portal. Los datos de los clientes no se muestran.</p>
        </FadeUp>
      </div>
    </section>
  );
}
