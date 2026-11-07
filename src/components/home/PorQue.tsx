import Link from "next/link";
import FadeUp from "../FadeUp";
import Encabezado, { Resaltado, Coma } from "../Encabezado";
import { Flecha } from "../Iconos";

/* Por qué Nexora (el "Senior craft, shipped at AI speed" de designme.agency). Donde la referencia pone
   cifras, acá van tres pruebas sin números, cada una con su link. */

const PRUEBAS = [
  { titulo: "Casos con nombre", texto: "Raquel, TrendSpot y Traslap: lo que le armamos a cada uno y para qué le sirve.", link: "Ver proyectos", href: "/#proyectos" },
  { titulo: "Un proceso claro", texto: "Seis pasos, de la primera llamada a cada mes, con todo a la vista en tu portal.", link: "Ver los pasos", href: "/#como-funciona" },
  { titulo: "Webs y demos", texto: "Publicadas y demos, con la marca real de cada negocio.", link: "Ver webs", href: "/webs" },
];

const RAZONES: { titulo: string; texto: string }[] = [
  { titulo: "Primero entendemos", texto: "Antes de proponer nada, vemos cómo te llegan los clientes, cómo los atendés y dónde se escapan." },
  { titulo: "La IA, bien usada", texto: "Acelera lo que se repite. Nada sale sin que una persona lo revise." },
  { titulo: "Atraer y atender, juntos", texto: "Publicidad, WhatsApp y CRM en el mismo equipo, para que lo que atrae no se pierda en la respuesta." },
  { titulo: "Todo a la vista", texto: "En tu portal ves las etapas, lo entregado, lo que falta y las decisiones con su fecha." },
  { titulo: "Una cosa a la vez, bien hecha", texto: "Una mejora activa por vez, que se puede medir." },
  { titulo: "Mes a mes", texto: "No vendemos horas. Seguís, sumás capacidad o pausás." },
];

export default function PorQue() {
  return (
    <section id="por-que" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <Encabezado
        etiqueta="Por qué Nexora"
        titulo={
          <>
            Vendemos criterio<Coma /> <Resaltado>no herramientas</Resaltado>
          </>
        }
        bajada="Lo que hacemos se ve en los proyectos y las webs, pero lo que contratás es un equipo que entiende tu negocio y lo hace crecer ordenado."
      />

      <FadeUp delay={0.06} className="mt-12 grid gap-4 sm:grid-cols-3">
        {PRUEBAS.map((p) => (
          <Link key={p.titulo} href={p.href} className="tarjeta alzar luz filo group flex flex-col rounded-2xl border border-border px-6 py-6">
            <p className="font-display text-[20px] font-extrabold text-text-primary">{p.titulo}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{p.texto}</p>
            <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
              {p.link} <Flecha className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </FadeUp>

      <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {RAZONES.map((r, i) => (
          <FadeUp key={r.titulo} delay={(i % 3) * 0.05} className="border-t border-border pt-5">
            <span className="font-display text-[13px] font-bold text-accent">0{i + 1}</span>
            <h3 className="mt-2 text-[19px] font-bold text-text-primary">{r.titulo}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{r.texto}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
