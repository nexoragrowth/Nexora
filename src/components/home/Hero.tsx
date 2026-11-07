import BotonesContacto from "../BotonesContacto";
import { Etiqueta, Resaltado } from "../Encabezado";
import { Flecha } from "../Iconos";

/* Hero de Nexora Subscription (referencia: designme.agency). Sin precio: se habla en la llamada.
   Debajo del botón, una franja de pruebas como la de la referencia, sin cifras. */

const PRUEBAS = [
  { titulo: "Un equipo, no una persona", texto: "Contenido, publicidad, WhatsApp y sistemas" },
  { titulo: "Mes a mes", texto: "Se pausa o se cancela cuando quieras" },
  { titulo: "Todo a la vista", texto: "Un portal con lo que se hace y lo que falta" },
];

export default function Hero() {
  return (
    <section className="relative pt-[68px] pb-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[760px] grid-bg opacity-60 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[-180px] w-[min(1000px,140vw)] h-[620px] glow-accent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <div className="aparecer" style={{ animationDelay: "0s" }}>
          <Etiqueta>
            Nexora Subscription<span className="hidden sm:inline"> · suscripción mensual</span>
          </Etiqueta>
        </div>

        <div className="aparecer" style={{ animationDelay: "0.08s" }}>
          <h1 className="mt-7 text-[clamp(2.4rem,6.2vw,4.6rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-text-primary titulo-degrade">
            Tu equipo de sistemas y crecimiento,
            <br className="hidden sm:block" /> <Resaltado>sin contratar uno interno</Resaltado>
          </h1>
        </div>

        <div className="aparecer" style={{ animationDelay: "0.16s" }}>
          <p className="mt-7 mx-auto max-w-[660px] text-[18px] md:text-[19px] leading-relaxed text-text-secondary">
            Contenido, publicidad, WhatsApp, CRM y sistemas a medida, con un mismo equipo y por una suscripción mensual.
            La IA multiplica lo que hacemos; las personas deciden y te responden.
          </p>
        </div>

        <div className="aparecer" style={{ animationDelay: "0.24s" }}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <BotonesContacto className="justify-center" />
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors"
            >
              Mirá cómo funciona
              <Flecha />
            </a>
          </div>
        </div>
      </div>

      {/* Franja de pruebas, como la de la referencia */}
      <div className="aparecer relative border-y border-border bg-bg-primary/40 backdrop-blur-sm" style={{ animationDelay: "0.3s" }}>
        <ul className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {PRUEBAS.map((p) => (
            <li key={p.titulo} className="py-4 sm:py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0 text-center sm:text-left">
              <p className="font-display text-[14px] font-bold text-text-primary">{p.titulo}</p>
              <p className="mt-0.5 text-[13.5px] text-text-muted">{p.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
