import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* La IA y las personas (como el "AI multiplies what a senior team ships" de la referencia).
   Cogne habilitó hablar de IA en la web el 2026-11-07. */

const IA = [
  "Lee lo que publica la competencia y propone ideas",
  "Primeros borradores de guiones y textos",
  "Variantes de creatividades para probar",
  "Contesta, pregunta y deriva las consultas por WhatsApp",
  "Ordena lo que nos contás antes de la llamada",
];

const CHIPS = ["Tu negocio", "Tu marca", "Tus reglas", "Guiones", "Anuncios", "WhatsApp"];

const PERSONAS = [
  "Deciden qué se hace y por qué",
  "Hablan con vos y conocen tu negocio",
  "Revisan y aprueban todo antes de que salga",
  "Atienden lo que necesita criterio: lo urgente o delicado pasa a una persona",
  "Se hacen cargo del resultado",
];

function Columna({ titulo, items, destacada = false }: { titulo: string; items: string[]; destacada?: boolean }) {
  return (
    <div className={`luz filo rounded-2xl border p-6 md:p-7 backdrop-blur-sm ${destacada ? "border-accent/30 bg-accent/[0.05]" : "border-border bg-bg-card/60"}`}>
      <p className={`font-display text-[13px] font-bold tracking-[0.14em] ${destacada ? "text-accent" : "text-text-muted"}`}>{titulo}</p>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[15.5px] text-text-primary/90">
            <span className={`mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full ${destacada ? "bg-accent" : "bg-text-muted"}`} aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ConIA() {
  return (
    <section id="ia" className="relative border-y border-border bg-[#05070d]">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Encabezado
            etiqueta="IA, bien usada"
            titulo={
              <>
                La IA multiplica lo que entrega <Resaltado>el equipo</Resaltado>
              </>
            }
            bajada="Usamos IA en todo lo que se puede acelerar, dentro de las reglas que dejamos escritas para cada negocio. Lo que define el resultado lo decide una persona."
          />
          <FadeUp delay={0.06} className="flex flex-wrap gap-2 lg:justify-end">
            {CHIPS.map((c) => (
              <span key={c} className="rounded-md border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-text-secondary">
                {c}
              </span>
            ))}
          </FadeUp>
        </div>
        <FadeUp delay={0.08} className="mt-12 grid gap-4 md:grid-cols-2">
          <Columna titulo="LO QUE HACE LA IA" items={IA} />
          <Columna titulo="LO QUE HACEN LAS PERSONAS" items={PERSONAS} destacada />
        </FadeUp>
        <p className="mt-6 text-[14px] text-text-muted">
          Donde hay plata en juego, como una liquidación, el cálculo no lo hace la IA.
        </p>
      </div>
    </section>
  );
}
