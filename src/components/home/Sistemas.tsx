import Link from "next/link";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";
import { Flecha } from "../Iconos";

/* Lo que ya construimos (el "The tools change. The standard doesn't." de designme.agency): filas con el
   rótulo a la izquierda y los sistemas a la derecha. En vez de herramientas de terceros, los sistemas
   propios, cada uno con su estado real al 2026-11-07. La primera fila es el Portal, el diferencial. */

type Estado = "En uso" | "En piloto" | "En construcción";

const PUNTO: Record<Estado, string> = {
  "En uso": "bg-accent",
  "En piloto": "bg-sky-300",
  "En construcción": "bg-amber-300",
};

type Sistema = { nombre: string; texto: string; estado: Estado; href?: string };

const FILAS: { parte: string; sistemas: Sistema[] }[] = [
  {
    parte: "Atraemos",
    sistemas: [
      { nombre: "Content Engine", texto: "Lo que publica la competencia, el banco de ideas y los guiones de la semana, cada pieza en su estado.", estado: "En uso" },
      { nombre: "Demos con tu marca", texto: "Analizamos el Instagram y la web de un negocio y armamos una demo con su marca real. Una persona la revisa antes de mostrarla.", estado: "En uso", href: "/webs" },
    ],
  },
  {
    parte: "Convertimos",
    sistemas: [
      { nombre: "Turnos por WhatsApp", texto: "Turnos por WhatsApp al lado de la secretaria; lo urgente pasa a una persona.", estado: "En uso", href: "/casos/raquel" },
      { nombre: "Ventas por WhatsApp", texto: "Todas las líneas en una bandeja, stock por IMEI, agenda atada al stock y un asistente con modo sombra.", estado: "En piloto", href: "/casos/trendspot" },
    ],
  },
  {
    parte: "Organizamos",
    sistemas: [
      { nombre: "Liquidaciones", texto: "Lee los envíos que ya exporta el negocio y calcula lo que se le paga a cada uno, sin IA en el cálculo.", estado: "En construcción", href: "/casos/traslap" },
      { nombre: "Stock y agenda", texto: "Stock por unidad y turnos atados al stock, probados con datos de ejemplo.", estado: "En piloto", href: "/casos/trendspot" },
    ],
  },
  {
    parte: "Optimizamos",
    sistemas: [
      { nombre: "Vista del cliente en el Portal", texto: "Las etapas del proyecto, lo que hacemos nosotros y lo que necesitamos de vos.", estado: "En construcción" },
      { nombre: "Recordatorios y derivaciones", texto: "Una pantalla con los recordatorios que salieron y lo que se le pasó a una persona.", estado: "En uso", href: "/casos/raquel" },
    ],
  },
];

const SECCIONES_PORTAL = ["Hoy", "Ventas", "Prospección", "Clientes", "Proyectos", "Tareas", "WhatsApp", "Finanzas"];

function Ficha({ s }: { s: Sistema }) {
  const cuerpo = (
    <>
      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-text-muted">
        <span className={`w-1.5 h-1.5 rounded-full ${PUNTO[s.estado]}`} aria-hidden="true" />
        {s.estado}
      </span>
      <span className="mt-1 block font-display text-[15px] font-bold text-text-primary">{s.nombre}</span>
      <span className="mt-1 block text-[13.5px] leading-snug text-text-secondary">{s.texto}</span>
    </>
  );
  const clase = "tarjeta group block h-full rounded-xl border border-border px-4 py-3.5";
  return s.href ? (
    <Link href={s.href} className={`${clase} alzar`}>
      {cuerpo}
    </Link>
  ) : (
    <div className={clase}>{cuerpo}</div>
  );
}

export default function Sistemas() {
  return (
    <section id="sistemas" className="relative border-y border-border bg-white/[0.012]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <Encabezado
          etiqueta="Lo que ya construimos"
          titulo={
            <>
              No arrancamos de cero: <Resaltado>ya lo construimos</Resaltado>
            </>
          }
          bajada="Lo que armamos para un negocio se reutiliza y se adapta al siguiente, con su marca y su forma de trabajar. Las herramientas cambian; los sistemas quedan."
        />

        <FadeUp delay={0.06} className="mt-12 divide-y divide-border border-y border-border">
          {/* El Portal, destacado */}
          <div id="portal" className="grid gap-5 py-7 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-10">
            <div>
              <p className="flex items-center gap-2 font-display text-[18px] font-extrabold text-text-primary">
                Portal Nexora
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" aria-hidden="true" />
                  En uso
                </span>
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">
                Donde pasa todo: ves qué se está haciendo, qué falta y qué se entregó, sin tener que preguntar.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SECCIONES_PORTAL.map((s) => (
                  <span key={s} className="rounded-lg border border-accent/20 bg-accent/[0.05] px-3 py-2 text-center text-[13.5px] font-semibold text-text-primary">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[12.5px] text-text-muted">Son las secciones reales del Portal. Los datos de los clientes no se muestran.</p>
            </div>
          </div>

          {FILAS.map((f) => (
            <div key={f.parte} className="grid gap-4 py-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-10 lg:items-start">
              <p className="font-display text-[16px] font-bold text-text-secondary lg:pt-3">{f.parte}</p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {f.sistemas.map((s) => (
                  <Ficha key={s.nombre} s={s} />
                ))}
              </div>
            </div>
          ))}
        </FadeUp>

        <FadeUp delay={0.08} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-text-muted">
          {(Object.keys(PUNTO) as Estado[]).map((e) => (
            <span key={e} className="inline-flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${PUNTO[e]}`} aria-hidden="true" />
              {e}
            </span>
          ))}
          <Link href="/webs" className="ml-auto inline-flex items-center gap-1.5 font-semibold text-accent">
            Ver webs y demos <Flecha className="w-3.5 h-3.5" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
