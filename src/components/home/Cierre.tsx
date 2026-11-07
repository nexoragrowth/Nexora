import FadeUp from "../FadeUp";
import BotonesContacto from "../BotonesContacto";
import { Etiqueta, Resaltado } from "../Encabezado";
import { EMAIL } from "@/lib/contacto";

const PASOS = [
  "Respondés unas preguntas cortas sobre tu negocio.",
  "En la llamada vemos cómo trabajás, qué te frena y te decimos el precio.",
  "Si tiene sentido, arrancamos con tu suscripción y tu portal.",
];

export default function Cierre() {
  return (
    <section id="contacto" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <FadeUp className="borde-vivo relative overflow-hidden rounded-[28px] border border-border bg-bg-card/60 backdrop-blur-sm">
        <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[-160px] w-[700px] h-[420px] glow-accent pointer-events-none" aria-hidden="true" />

        <div className="relative grid gap-10 p-7 sm:p-10 md:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Etiqueta>Llegaste al final, así que…</Etiqueta>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[1.06] text-text-primary">
              Contanos qué querés <Resaltado>hacer crecer</Resaltado>
            </h2>
            <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-text-secondary">
              Un equipo de sistemas y crecimiento, todos los meses, sin contratar uno interno.
            </p>
            <ol className="mt-8 space-y-4">
              {PASOS.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/30 text-accent font-display text-[13px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-[16px] leading-relaxed text-text-secondary">{p}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-border-strong bg-bg-primary/70 backdrop-blur p-6 sm:p-8">
            <p className="text-[20px] font-display font-bold text-text-primary">Hablemos</p>
            <p className="mt-2 text-[15px] text-text-secondary">Una llamada para conocer tu negocio. Sin compromiso.</p>
            <BotonesContacto className="mt-6 flex-col items-stretch [&>*]:w-full" />
            <p className="mt-5 text-[13.5px] text-text-muted">
              Si preferís escribir:{" "}
              <a href={`mailto:${EMAIL}`} className="text-text-secondary underline underline-offset-4 hover:text-text-primary">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
