/* Píxel de Meta. Está apagado mientras no exista NEXT_PUBLIC_META_PIXEL_ID en Vercel: sin esa
   variable no se carga nada de Meta y la política de privacidad sigue diciendo que no hay
   herramientas de publicidad. Nunca se le manda a Meta ningún dato de la persona (ni nombre, ni
   WhatsApp, ni lo que escribe): solo el nombre del paso. */

export const PIXEL_ID = (process.env.NEXT_PUBLIC_META_PIXEL_ID || "").trim();
export const hayPixel = () => /^\d{6,20}$/.test(PIXEL_ID);

/* Páginas internas donde el píxel no se carga. */
export const SIN_PIXEL = ["/diagnostico/panel"];

type Fbq = (accion: "track" | "trackCustom", evento: string, parametros?: Record<string, string>) => void;

export type EventoPixel = "PageView" | "Lead" | "Contact" | "Schedule";

export function avisarAMeta(evento: EventoPixel) {
  if (!hayPixel() || typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  try {
    fbq?.("track", evento);
  } catch {
    /* si el píxel falla, la página sigue igual */
  }
}
