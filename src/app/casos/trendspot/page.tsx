import type { Metadata } from "next";
import Image from "next/image";
import PaginaCaso, { BloqueCaso, ListaCaso } from "@/components/caso/PaginaCaso";
import Pantalla from "@/components/Pantalla";
import { Flecha } from "@/components/Iconos";

/* Caso TrendSpot: la tienda online y el sistema para vender iPhones por WhatsApp.
   Fuentes: los READMEs de los dos repos, el documento "Nexora para celulares v2" (estado al 2026-10-31)
   y las capturas del repo del panel, todas con datos de ejemplo. Sin cifras del negocio ni resultados:
   todavía no hay resultados medidos. No se publica su teléfono. */

export const metadata: Metadata = {
  title: "Caso TrendSpot · Nexora",
  description:
    "La tienda online y el sistema para vender iPhones por WhatsApp de TrendSpot: bandeja de conversaciones, stock por IMEI, agenda atada al stock y un asistente que se prueba con freno de mano.",
  alternates: { canonical: "/casos/trendspot" },
};

const WEB = "https://www.trend-spot.shop/";

const PANTALLAS = [
  { src: "/trendspot/panel-stock.webp", titulo: "Stock por IMEI", texto: "Cada unidad con su IMEI, su estado y su batería." },
  { src: "/trendspot/panel-dolar.webp", titulo: "Dólar del día", texto: "Se carga una vez y los precios en pesos salen solos." },
  { src: "/trendspot/panel-agenda.webp", titulo: "Agenda de turnos", texto: "El equipo que alguien viene a ver queda reservado." },
  { src: "/trendspot/panel-asistente.webp", titulo: "El asistente", texto: "Sombra, piloto o en vivo: lo decide el dueño." },
];

const ESTADO: { titulo: string; tono: string; items: string[] }[] = [
  {
    titulo: "Listo y probado con datos de ejemplo",
    tono: "text-accent border-accent/25 bg-accent/10",
    items: ["Panel y bandeja de conversaciones", "Stock por IMEI y listas de precios", "Agenda atada al stock", "Cotizador de canje", "Varias líneas de WhatsApp", "Modo prueba y botón de apagado"],
  },
  {
    titulo: "En prueba",
    tono: "text-sky-300 border-sky-300/25 bg-sky-400/10",
    items: ["El asistente: propone respuestas y no le escribe a ningún cliente", "Audios y fotos"],
  },
  {
    titulo: "En desarrollo",
    tono: "text-amber-300 border-amber-300/25 bg-amber-400/10",
    items: ["Avisarle a Meta qué consultas terminan en venta, para que la publicidad aprenda"],
  },
  {
    titulo: "Todavía no",
    tono: "text-text-secondary border-white/15 bg-white/[0.04]",
    items: ["Resultados medidos", "Seguimiento automático de cada consulta"],
  },
];

export default function CasoTrendSpot() {
  return (
    <PaginaCaso
      rubro="Caso · Comercio"
      nombre="TrendSpot"
      bajada="Venta de iPhones · Envíos a todo el país"
      resumen={
        <p>
          Le armamos la tienda online y el sistema con el que vende por WhatsApp: todas las consultas en un mismo panel, el
          stock y los precios del día a mano, y un embudo que va de la consulta a la venta.
        </p>
      }
      imagen={
        <Pantalla
          src="/trendspot/panel-inicio.webp"
          alt="Inicio del panel de ventas de TrendSpot, con datos de ejemplo"
          barra="Panel de ventas · TrendSpot"
          ancho={1366}
          alto={800}
          ejemplo
          prioridad
          sizes="(min-width: 768px) 460px, 100vw"
          className="borde-vivo"
        />
      }
      cierre="¿Vendés por WhatsApp?"
    >
      <BloqueCaso titulo="Qué le armamos">
        <ListaCaso
          items={[
            "La tienda online: catálogo con filtros y buscador, precios en dólares y en pesos al dólar blue del día, y una página por equipo con el botón a WhatsApp.",
            "Un cotizador de plan canje paso a paso, para saber cuánto vale el equipo que entregás.",
            "Un panel de ventas con todas las líneas de WhatsApp en una sola bandeja, los contactos y un embudo: consulta, cotizó, turno y compró.",
            "Stock por IMEI, con el estado y la batería de cada unidad, y listas de precios que se arman en borrador y se publican.",
            "Una agenda de turnos atada al stock: el equipo que alguien viene a ver queda reservado.",
            "Métricas propias de la tienda: visitas, equipos vistos, cotizaciones y clics a WhatsApp.",
          ]}
        />
      </BloqueCaso>

      <BloqueCaso titulo="La tienda">
        <a
          href={WEB}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden hover:border-accent/40 transition-colors"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[13px] text-text-muted truncate">trend-spot.shop</span>
          </div>
          {/* Captura real del 2026-11-07 (más confiable que un iframe con el modelo 3D) */}
          <Image
            src="/webs/trendspot.webp"
            alt="Tienda online de TrendSpot"
            width={1200}
            height={750}
            sizes="(min-width: 768px) 640px, 100vw"
            className="block w-full h-auto"
          />
          <div className="flex items-center justify-between gap-3 px-4 py-4">
            <span className="text-[15px] text-text-primary font-semibold">Visitá la tienda</span>
            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
              trend-spot.shop
              <Flecha className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      </BloqueCaso>

      <BloqueCaso titulo="El panel de ventas">
        <p>Lo que ve el dueño todos los días. Las capturas son del sistema real, cargado con datos de ejemplo.</p>
        <div className="grid gap-5 sm:grid-cols-2 pt-2">
          {PANTALLAS.map((p) => (
            <div key={p.src}>
              <a href={p.src} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity" aria-label={`Ver en grande: ${p.titulo}`}>
                <Pantalla src={p.src} alt={`${p.titulo}, con datos de ejemplo`} barra={p.titulo} ancho={1366} alto={800} sizes="(min-width: 768px) 340px, 100vw" />
              </a>
              <p className="mt-2.5 text-[14.5px] text-text-secondary">
                <span className="font-semibold text-text-primary">{p.titulo}.</span> {p.texto}
              </p>
            </div>
          ))}
        </div>
      </BloqueCaso>

      <BloqueCaso titulo="Un asistente con freno de mano">
        <p>El asistente arma las respuestas con el stock y los precios del día. El dueño elige hasta dónde llega:</p>
        <ListaCaso
          items={[
            <>
              <strong className="text-text-primary">Sombra:</strong> lee y propone qué respondería, pero no le manda nada al
              cliente.
            </>,
            <>
              <strong className="text-text-primary">Piloto:</strong> contesta de verdad, pero solo a los números de prueba.
            </>,
            <>
              <strong className="text-text-primary">En vivo:</strong> les contesta a todos.
            </>,
          ]}
        />
        <p>
          Se apaga con un botón y cualquier conversación se le puede pasar a una persona. Con el asistente apagado, las
          consultas siguen entrando al panel.
        </p>
      </BloqueCaso>

      <BloqueCaso titulo="En qué está">
        <div className="grid gap-4 sm:grid-cols-2">
          {ESTADO.map((e) => (
            <div key={e.titulo} className="rounded-2xl border border-border bg-bg-card/60 p-5">
              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[12px] font-semibold ${e.tono}`}>{e.titulo}</span>
              <ul className="mt-3 space-y-1.5 text-[15px]">
                {e.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-[15px] text-text-muted">Estado al 31 de octubre de 2026. Los números los contamos cuando estén medidos.</p>
      </BloqueCaso>
    </PaginaCaso>
  );
}
