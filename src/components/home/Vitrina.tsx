"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Pantalla from "../Pantalla";

/* Tres capturas reales debajo del hero, inclinadas en 3D, que se enderezan al bajar:
   la web de la Dra. Raquel Rodríguez, el panel de ventas de TrendSpot (con datos de ejemplo,
   tomado del repo del sistema) y la tienda online de TrendSpot. */

export default function Vitrina() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  // Además del scroll, se inclina un poco hacia donde está el mouse (como el panel de nexora-sitio-landing)
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });
  const giroScroll = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const giroX = useTransform([giroScroll, mouseY], ([s, m]: number[]) => s - m * 4);
  const giroY = useTransform(mouseX, (m) => m * 5);
  const escala = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const ladoY = useTransform(scrollYProgress, [0, 1], [16, 7]);
  const ladoYneg = useTransform(ladoY, (v) => -v);

  const alMover = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const alSalir = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={alMover}
      onMouseLeave={alSalir}
      className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-8 [perspective:1400px]"
    >
      {/* Halo verde detrás de las pantallas */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-accent/[0.12] blur-[100px]"
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        style={{ rotateX: giroX, rotateY: giroY, scale: escala, transformStyle: "preserve-3d" }}
        className="relative grid items-center gap-5 md:grid-cols-[1fr_1.25fr_1fr]"
      >
        <motion.div style={{ rotateY: ladoY }} className="hidden md:block origin-right">
          <Pantalla src="/webs/raquel.webp" alt="Web de la Dra. Raquel Rodríguez" barra="raquelrodriguez.com.ar" sizes="360px" />
        </motion.div>
        <Pantalla
          src="/trendspot/panel-inicio.webp"
          alt="Panel de ventas de TrendSpot, con datos de ejemplo"
          barra="Panel de ventas · TrendSpot"
          ancho={1366}
          alto={800}
          ejemplo
          prioridad
          sizes="(min-width: 768px) 460px, 100vw"
          className="borde-vivo"
        />
        <motion.div style={{ rotateY: ladoYneg }} className="hidden md:block origin-left">
          <Pantalla src="/webs/trendspot.webp" alt="Tienda online de TrendSpot" barra="trend-spot.shop" sizes="360px" />
        </motion.div>
      </motion.div>
      <p className="relative mt-5 text-center text-[12px] text-text-muted">
        <span className="md:hidden">Captura real del panel de ventas de TrendSpot, con datos de ejemplo.</span>
        <span className="hidden md:inline">
          Capturas reales de lo que armamos: la web de la Dra. Raquel Rodríguez, el panel de ventas de TrendSpot y su tienda
          online.
        </span>
      </p>
    </div>
  );
}
