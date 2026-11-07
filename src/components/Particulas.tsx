"use client";

import { useEffect, useRef } from "react";

/* Las partículas de la marca: puntos blancos y verdes que caen en diagonal desde arriba a la
   izquierda, por delante del cielo y por detrás del contenido. Vuelven de la primera web
   (components/Particles.tsx, sacado el 2026-10-27 en f7b0584) con el verde de la marca.
   No se anima si la persona pidió menos movimiento, y se frena con la pestaña oculta. */

const CANTIDAD = 130;
const VERDE = "0,230,118";

type Particula = { x: number; y: number; r: number; alfa: number; vx: number; vy: number; verde: boolean };

function crear(w: number, h: number, i: number, alInicio: boolean): Particula {
  return {
    // Nacen sobre todo en la mitad izquierda, como en la web original, y cruzan en diagonal
    x: Math.random() * w * 0.65 - w * 0.1,
    y: alInicio ? Math.random() * h : -(Math.random() * 40),
    r: 0.5 + Math.random() * 0.9,
    alfa: 0.12 + Math.random() * 0.28,
    vx: 0.06 + Math.random() * 0.16,
    vy: 0.16 + Math.random() * 0.3,
    verde: i % 3 === 0,
  };
}

export default function Particulas() {
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = lienzo.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    let particulas: Particula[] = [];
    let cuadro = 0;

    const medir = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // En el celular, menos partículas para que no se vea cargado
      const n = w < 640 ? Math.round(CANTIDAD * 0.55) : CANTIDAD;
      particulas = Array.from({ length: n }, (_, i) => crear(w, h, i, true));
    };

    const dibujar = () => {
      ctx.clearRect(0, 0, w, h);
      particulas.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > h + 4 || p.x > w + 4) particulas[i] = crear(w, h, i, false);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.verde ? `rgba(${VERDE},${p.alfa * 0.9})` : `rgba(255,255,255,${p.alfa})`;
        ctx.fill();
      });
      cuadro = requestAnimationFrame(dibujar);
    };

    const alCambiarVisibilidad = () => {
      cancelAnimationFrame(cuadro);
      if (!document.hidden) cuadro = requestAnimationFrame(dibujar);
    };

    medir();
    cuadro = requestAnimationFrame(dibujar);
    window.addEventListener("resize", medir);
    document.addEventListener("visibilitychange", alCambiarVisibilidad);
    return () => {
      cancelAnimationFrame(cuadro);
      window.removeEventListener("resize", medir);
      document.removeEventListener("visibilitychange", alCambiarVisibilidad);
    };
  }, []);

  return (
    // Mismo z-index que el cielo (-1) y después en el HTML: queda encima del cielo y debajo del contenido
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} aria-hidden="true">
      <canvas ref={lienzo} className="block w-full h-full" />
    </div>
  );
}
