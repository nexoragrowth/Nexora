import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* Cómo funciona la suscripción, en los 6 pasos del tablero "Nexora - Sistema de negocio"
   (Apply & Diagnose → Continue, upgrade o pause). Sin plazos ni días: eso se ve en la llamada. */

const PASOS = [
  {
    titulo: "Llamada y diagnóstico",
    texto: "Antes de la llamada respondés unas preguntas. En la llamada vemos cómo te llegan los clientes, cómo los atendés y dónde se escapan.",
  },
  {
    titulo: "Te suscribís y arrancamos",
    texto: "Definimos el plan, nos pasás los accesos, tenés un responsable de tu cuenta y tu portal abierto.",
  },
  {
    titulo: "Priorizamos el mes",
    texto: "Elegimos qué resultado buscamos este mes y en qué se pone el equipo. Una iniciativa activa a la vez, bien hecha.",
  },
  {
    titulo: "Construimos y hacemos crecer",
    texto: "Contenido, publicidad, sistemas y automatizaciones: lo que se priorizó, hecho por el especialista que corresponde.",
  },
  {
    titulo: "Revisamos y ajustamos",
    texto: "Avances, métricas y aprobaciones en el portal. Nada sale sin tu OK, y lo que no funciona se corrige.",
  },
  {
    titulo: "Seguís, sumás o pausás",
    texto: "Mes a mes decidís: seguir igual, sumar capacidad o pausar. Sin contratos largos.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <Encabezado
        etiqueta="Cómo funciona"
        titulo={
          <>
            De la primera llamada a <Resaltado>trabajar todos los meses</Resaltado>
          </>
        }
        bajada="Una suscripción mensual con un equipo que conoce tu negocio. Así es el camino."
      />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PASOS.map((p, i) => (
          <FadeUp
            as="li"
            key={p.titulo}
            delay={(i % 3) * 0.06}
            className="luz filo flex flex-col rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm p-6 md:p-7"
          >
            <span className="font-display text-[13px] font-bold tracking-[0.14em] text-accent">PASO {String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-[19px] font-bold leading-snug text-text-primary">{p.titulo}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{p.texto}</p>
          </FadeUp>
        ))}
      </ol>
    </section>
  );
}
