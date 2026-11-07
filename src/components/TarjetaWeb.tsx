import Image from "next/image";
import type { Trabajo } from "@/lib/trabajos";
import { Flecha } from "./Iconos";

/* Una web o una demo: la captura real, el nombre, el rubro y si es la web del negocio o una demo.
   Solo las webs publicadas llevan link. */
export default function TarjetaWeb({ t, sizes = "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" }: { t: Trabajo; sizes?: string }) {
  const contenido = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-primary">
        <Image
          src={`/webs/${t.id}.webp`}
          alt={`${t.tipo === "web" ? "Web" : "Demo"} de ${t.nombre}`}
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span
          className={`absolute top-3 left-3 rounded-full border px-2.5 py-1 text-[11.5px] font-semibold backdrop-blur-sm ${
            t.tipo === "web"
              ? "border-accent/30 bg-bg-primary/80 text-accent"
              : "border-white/15 bg-bg-primary/80 text-text-secondary"
          }`}
        >
          {t.tipo === "web" ? "Publicada" : "Demo"}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div className="min-w-0">
          <p className="truncate font-display text-[16px] font-bold text-text-primary">{t.nombre}</p>
          <p className="truncate text-[13.5px] text-text-muted">{t.rubro}</p>
        </div>
        {t.url && <Flecha className="w-4 h-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />}
      </div>
    </>
  );
  const clase =
    "group luz filo block h-full rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden transition-colors";
  if (!t.url) return <div className={clase}>{contenido}</div>;
  const externo = t.url.startsWith("http");
  return (
    <a
      href={t.url}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${clase} hover:border-accent/40`}
    >
      {contenido}
    </a>
  );
}
