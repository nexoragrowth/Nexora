import type { Metadata } from "next";
import PaginaCaso, { BloqueCaso, ListaCaso } from "@/components/caso/PaginaCaso";
import Pantalla from "@/components/Pantalla";

/* Caso Traslap, en construcción. Sin montos, sin tarifas, sin nombres de conectores ni de sellers,
   y sin la cantidad de reglas (no está confirmada). La captura es la entrada real del sistema. */

export const metadata: Metadata = {
  title: "Caso Traslap · Nexora",
  description:
    "El sistema de liquidaciones de Traslap, logística de última milla: lee los envíos que ya exportan y calcula cuánto se le paga a cada conector, sin IA en el cálculo.",
  alternates: { canonical: "/casos/traslap" },
};

const ETAPAS: { titulo: string; estado: "hecho" | "curso" | "despues" }[] = [
  { titulo: "Relevamiento y accesos", estado: "hecho" },
  { titulo: "Tarifas y primer cálculo", estado: "hecho" },
  { titulo: "Que dé igual que la cuenta a mano", estado: "curso" },
  { titulo: "Una semana en paralelo", estado: "despues" },
  { titulo: "Liquidación en vivo", estado: "despues" },
];

const TONO = {
  hecho: { texto: "Hecho", clase: "text-accent border-accent/25 bg-accent/10" },
  curso: { texto: "En curso", clase: "text-sky-300 border-sky-300/25 bg-sky-400/10" },
  despues: { texto: "Después", clase: "text-text-muted border-white/15 bg-white/[0.04]" },
};

export default function CasoTraslap() {
  return (
    <PaginaCaso
      rubro="Caso · Logística · En construcción"
      nombre="Traslap"
      bajada="Logística de última milla · Avellaneda"
      resumen={
        <p>
          Le estamos armando el sistema de liquidaciones: lee los envíos que exporta el sistema que ya usan y calcula cuánto
          se le paga a cada conector, con las tarifas y las reglas a la vista.
        </p>
      }
      imagen={
        <Pantalla
          src="/traslap/liquidaciones.webp"
          alt="Entrada al sistema de liquidaciones de Traslap"
          barra="Liquidaciones · Traslap"
          prioridad
          sizes="(min-width: 768px) 460px, 100vw"
          className="borde-vivo"
        />
      }
      cierre="¿Tu negocio hace cuentas a mano todas las semanas?"
    >
      <BloqueCaso titulo="El problema">
        <p>
          Lo que se le paga a cada conector depende de la zona, la tarifa, el tipo de servicio y varias reglas especiales.
          Esa cuenta se hacía a mano, cruzando los envíos de la semana con las tarifas.
        </p>
      </BloqueCaso>

      <BloqueCaso titulo="Qué le estamos armando">
        <ListaCaso
          items={[
            "Un paso a paso: se sube el archivo de envíos que exporta su sistema, sin tocar ese sistema.",
            "Una pantalla de tarifas de conectores, para cambiarlas sin pedirle nada a nadie.",
            "El cálculo de lo que le toca a cada conector, explicado línea por línea.",
            "Las etapas, los pedidos y las decisiones del proyecto, cargados en el Portal de Nexora.",
          ]}
        />
      </BloqueCaso>

      <BloqueCaso titulo="Sin IA en el cálculo">
        <p>
          Es una regla de este proyecto: cada peso que se paga sale de una tarifa o de una regla que se puede ver y cambiar.
          Si un número no cierra, se sabe por qué.
        </p>
      </BloqueCaso>

      <BloqueCaso titulo="En qué está">
        <ol className="space-y-2.5">
          {ETAPAS.map((e, i) => (
            <li key={e.titulo} className="flex items-center gap-3 rounded-xl border border-border bg-bg-card/60 px-4 py-3">
              <span className="font-display text-[13px] font-bold text-text-muted w-6">0{i + 1}</span>
              <span className="flex-1 text-[15.5px] text-text-primary">{e.titulo}</span>
              <span className={`rounded-full border px-2.5 py-0.5 text-[12px] font-semibold ${TONO[e.estado].clase}`}>
                {TONO[e.estado].texto}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-[15px] text-text-muted">
          Hasta que dé igual, al centavo, que la cuenta a mano, los totales se siguen controlando contra la cuenta de siempre.
          Lo contamos entero cuando esté andando.
        </p>
      </BloqueCaso>
    </PaginaCaso>
  );
}
