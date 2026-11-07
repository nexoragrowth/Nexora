import Image from "next/image";

/* Una captura real dentro de un marco de navegador. Si la pantalla tiene datos de ejemplo, lo dice. */
export default function Pantalla({
  src,
  alt,
  barra,
  ancho = 1200,
  alto = 750,
  ejemplo = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
  prioridad = false,
  className = "",
}: {
  src: string;
  alt: string;
  barra: string;
  ancho?: number;
  alto?: number;
  ejemplo?: boolean;
  sizes?: string;
  prioridad?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`relative rounded-2xl border border-white/[0.08] bg-[#0b1020] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3.5 h-8 border-b border-white/[0.07] bg-[#0b1020]">
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="ml-2.5 min-w-0 truncate text-[11px] font-medium text-text-muted">{barra}</span>
        {ejemplo && (
          <span className="ml-auto shrink-0 rounded-full border border-amber-300/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
            Datos de ejemplo
          </span>
        )}
      </div>
      <Image src={src} alt={alt} width={ancho} height={alto} sizes={sizes} priority={prioridad} className="block w-full h-auto" />
    </figure>
  );
}
