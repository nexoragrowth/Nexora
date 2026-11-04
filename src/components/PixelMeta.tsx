"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { PIXEL_ID, SIN_PIXEL, avisarAMeta, hayPixel } from "@/lib/pixel";

/* Carga el píxel de Meta en todo el sitio (menos las páginas internas) y cuenta una vista por
   cada página que se abre, también al navegar sin recargar. Sin NEXT_PUBLIC_META_PIXEL_ID no
   renderiza nada. */
export default function PixelMeta() {
  const ruta = usePathname() || "/";
  const primera = useRef(true);
  const interna = SIN_PIXEL.some((r) => ruta === r || ruta.startsWith(`${r}/`));

  useEffect(() => {
    if (!hayPixel() || interna) return;
    // La primera vista la manda el script de abajo al cargar; acá van las siguientes.
    if (primera.current) {
      primera.current = false;
      return;
    }
    avisarAMeta("PageView");
  }, [ruta, interna]);

  if (!hayPixel() || interna) return null;

  return (
    <Script id="pixel-meta" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
