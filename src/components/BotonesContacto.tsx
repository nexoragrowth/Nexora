import Link from "next/link";
import { hayWhatsapp, whatsappUrl } from "@/lib/contacto";
import { Flecha, IconoWhatsapp } from "./Iconos";

/* Los llamados de la web. El principal lleva a /agendar: unas preguntas cortas antes de la llamada,
   y si califica elige día y horario ahí mismo. El WhatsApp aparece solo si hay número en lib/contacto. */

type Tam = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const tamanos: Record<Tam, string> = {
  md: "px-5 py-2.5 text-[14px]",
  lg: "px-7 py-3.5 text-[15px]",
};
const primario =
  "destello bg-accent text-accent-ink hover:bg-accent-hover hover:-translate-y-px shadow-[0_0_0_1px_rgba(0,230,118,0.4),0_8px_30px_-8px_rgba(0,230,118,0.55)] hover:shadow-[0_0_0_1px_rgba(0,230,118,0.6),0_10px_40px_-6px_rgba(0,230,118,0.7)]";
const secundario =
  "border border-border-strong bg-white/[0.04] backdrop-blur-md text-text-primary hover:bg-white/[0.08] hover:border-white/25";

export function BotonLlamada({ tam = "lg", texto = "Agendá una llamada", className = "" }: { tam?: Tam; texto?: string; className?: string }) {
  return (
    <Link href="/agendar" className={`${base} ${tamanos[tam]} ${primario} ${className}`}>
      {texto}
      <Flecha />
    </Link>
  );
}

export function BotonWhatsapp({
  tam = "lg",
  destacado = false,
  texto = "Escribinos por WhatsApp",
  className = "",
}: {
  tam?: Tam;
  destacado?: boolean;
  texto?: string;
  className?: string;
}) {
  if (!hayWhatsapp) return null;
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${tamanos[tam]} ${destacado ? primario : secundario} ${className}`}
    >
      <IconoWhatsapp />
      {texto}
    </a>
  );
}

/* Los botones juntos: la llamada como principal y el WhatsApp al lado, si hay número. */
export default function BotonesContacto({ tam = "lg", className = "" }: { tam?: Tam; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <BotonLlamada tam={tam} />
      <BotonWhatsapp tam={tam} />
    </div>
  );
}
