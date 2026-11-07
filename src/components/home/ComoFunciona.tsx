import type { ReactNode } from "react";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* Los 6 pasos de la suscripción, con una mini-pantalla cada uno, como en designme.agency.
   Las mini-pantallas son esquemas hechos solo con rótulos que existen: el formulario de /agendar,
   la vista del cliente del Portal (semáforo, etapas con "Acá estamos", próximos pasos, "Ya lo mandé")
   y los estados de revisión. Sin nombres, fechas, montos ni plazos. */

function Mini({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-white/[0.07] bg-bg-primary/70 overflow-hidden" aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3 h-8 border-b border-white/[0.06]">
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="ml-2 text-[10.5px] font-semibold text-text-muted">{titulo}</span>
      </div>
      <div className="p-3.5 min-h-[150px] flex flex-col">{children}</div>
    </div>
  );
}

const chip = "rounded-md border px-2 py-1 text-[10.5px] font-semibold";
const boton = "rounded-md px-2.5 py-1.5 text-[10.5px] font-bold";

function MiniFormulario() {
  return (
    <Mini titulo="Antes de la llamada">
      {["¿Qué hace tu negocio?", "¿Qué es lo que más tiempo te come en el día?"].map((p) => (
        <div key={p} className="mb-2.5">
          <p className="text-[10.5px] font-semibold text-text-secondary">{p}</p>
          <div className="mt-1 h-6 rounded-md border border-white/[0.08] bg-white/[0.03]" />
        </div>
      ))}
      <div className="mt-auto flex justify-between items-center">
        <span className="text-[10px] text-text-muted">Seis preguntas cortas</span>
        <span className={`${boton} bg-accent text-bg-primary`}>Siguiente</span>
      </div>
    </Mini>
  );
}

function MiniPlan() {
  return (
    <Mini titulo="Tu plan">
      <div className="grid grid-cols-2 gap-1.5">
        {["Atraemos", "Convertimos", "Organizamos", "Optimizamos"].map((p, i) => (
          <span
            key={p}
            className={`${chip} flex items-center gap-1.5 ${i < 2 ? "border-accent/30 bg-accent/[0.08] text-accent" : "border-white/[0.08] text-text-muted"}`}
          >
            <span className={`w-2.5 h-2.5 rounded-[3px] border ${i < 2 ? "border-accent bg-accent" : "border-white/25"}`} />
            {p}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-3 flex justify-between items-center border-t border-white/[0.06]">
        <span className="text-[10.5px] font-semibold text-text-secondary">El precio, en la llamada</span>
        <span className={`${boton} bg-accent text-bg-primary`}>Seguir</span>
      </div>
    </Mini>
  );
}

function MiniPortal() {
  const etapas = ["Relevamiento", "Arranque", "Construcción", "Prueba", "En uso"];
  return (
    <Mini titulo="Tu portal">
      <span className={`${chip} self-start border-accent/30 bg-accent/[0.08] text-accent`}>● En camino</span>
      <div className="mt-3 flex items-center gap-1">
        {etapas.map((e, i) => (
          <span key={e} className={`h-1.5 flex-1 rounded-full ${i < 2 ? "bg-accent/70" : i === 2 ? "bg-accent" : "bg-white/10"}`} />
        ))}
      </div>
      <p className="mt-1.5 text-[10px] text-accent">Acá estamos: Construcción</p>
      <div className="mt-auto grid grid-cols-2 gap-1.5 pt-3">
        <div className="rounded-md border border-white/[0.07] p-2">
          <p className="text-[9.5px] font-semibold text-text-muted">Lo que hacemos nosotros</p>
          <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-white/10" />
        </div>
        <div className="rounded-md border border-white/[0.07] p-2">
          <p className="text-[9.5px] font-semibold text-text-muted">Lo que necesitamos de vos</p>
          <span className="mt-1.5 inline-block rounded bg-white/[0.08] px-1.5 py-0.5 text-[9px] font-semibold text-text-secondary">Ya lo mandé</span>
        </div>
      </div>
    </Mini>
  );
}

function MiniPrioridades() {
  const cols: { t: string; n: number; activa?: boolean }[] = [
    { t: "Anotado", n: 3 },
    { t: "Activa", n: 1, activa: true },
    { t: "Hecho", n: 2 },
  ];
  return (
    <Mini titulo="Prioridades del mes">
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {cols.map((c) => (
          <div key={c.t}>
            <p className={`text-[9.5px] font-bold uppercase tracking-wider ${c.activa ? "text-accent" : "text-text-muted"}`}>{c.t}</p>
            <div className="mt-1.5 space-y-1.5">
              {Array.from({ length: c.n }).map((_, i) => (
                <div
                  key={i}
                  className={`h-7 rounded-md border ${c.activa ? "border-accent/40 bg-accent/[0.08]" : "border-white/[0.07] bg-white/[0.03]"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[10px] text-text-muted">Una mejora activa a la vez</p>
    </Mini>
  );
}

function MiniRevision() {
  return (
    <Mini titulo="Para revisar">
      <div className="rounded-md border border-white/[0.07] bg-white/[0.03] p-2.5 flex-1">
        <div className="h-12 rounded bg-white/[0.05]" />
        <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-white/10" />
        <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-white/10" />
      </div>
      <div className="mt-2.5 flex justify-end gap-1.5">
        <span className={`${boton} border border-white/15 text-text-secondary`}>Pedir cambios</span>
        <span className={`${boton} bg-accent text-bg-primary`}>Aprobar</span>
      </div>
    </Mini>
  );
}

function MiniMes() {
  return (
    <Mini titulo="Tu suscripción">
      {["Seguir igual", "Sumar capacidad", "Pausar"].map((o, i) => (
        <span
          key={o}
          className={`mb-1.5 flex items-center gap-2 rounded-md border px-2.5 py-2 text-[10.5px] font-semibold ${
            i === 0 ? "border-accent/30 bg-accent/[0.08] text-accent" : "border-white/[0.07] text-text-secondary"
          }`}
        >
          <span className={`w-2.5 h-2.5 rounded-full border ${i === 0 ? "border-accent bg-accent" : "border-white/25"}`} />
          {o}
        </span>
      ))}
      <p className="mt-auto text-[10px] text-text-muted">Lo decidís mes a mes</p>
    </Mini>
  );
}

const PASOS: { etapa: string; titulo: string; texto: string; mini: ReactNode }[] = [
  {
    etapa: "Antes de la llamada",
    titulo: "Agendá la llamada",
    texto: "Respondés seis preguntas cortas sobre tu negocio. En la llamada vemos cómo te llegan los clientes, cómo los atendés y dónde se escapan.",
    mini: <MiniFormulario />,
  },
  {
    etapa: "En la llamada",
    titulo: "Armamos tu plan",
    texto: "Vemos qué partes necesita tu negocio: atraer, convertir, organizar u optimizar. El precio te lo decimos ahí, claro y antes de arrancar.",
    mini: <MiniPlan />,
  },
  {
    etapa: "El arranque",
    titulo: "Arrancamos en tu portal",
    texto: "Nos pasás los accesos, tenés un responsable de tu cuenta y tu portal abierto, con las etapas de tu proyecto.",
    mini: <MiniPortal />,
  },
  {
    etapa: "Cada mes",
    titulo: "Pedís lo que necesites",
    texto: "Anotamos todo y lo ordenamos por prioridad. Trabajamos una mejora activa a la vez, para que salga bien y se pueda medir.",
    mini: <MiniPrioridades />,
  },
  {
    etapa: "Todo el mes",
    titulo: "Revisás y aprobás",
    texto: "Avances y aprobaciones en tu portal. Nada sale sin tu OK, y lo que no funciona se corrige.",
    mini: <MiniRevision />,
  },
  {
    etapa: "Cualquier mes",
    titulo: "Seguís, sumás o pausás",
    texto: "Mes a mes decidís: seguir igual, sumar capacidad o pausar. Sin contratos largos.",
    mini: <MiniMes />,
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative border-y border-border bg-white/[0.012]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <Encabezado
          etiqueta="Paso a paso"
          centrado
          titulo={
            <>
              De la primera llamada a <Resaltado>trabajar todos los meses</Resaltado>
            </>
          }
          bajada="Seis pasos, siempre los mismos. Vos decidís qué importa este mes; el equipo lo hace y te muestra cómo va."
        />

        <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PASOS.map((p, i) => (
            <FadeUp as="li" key={p.titulo} delay={(i % 3) * 0.06} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 shrink-0 rounded-lg bg-accent text-bg-primary font-display text-[13px] font-extrabold flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-text-muted">{p.etapa}</p>
              <h3 className="mt-1.5 text-[22px] font-extrabold leading-snug text-text-primary">{p.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{p.texto}</p>
              {p.mini}
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
