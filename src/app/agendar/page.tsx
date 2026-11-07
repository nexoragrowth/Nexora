import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Etiqueta, Resaltado } from "@/components/Encabezado";
import Formulario from "../diagnostico/Formulario";
import s from "../diagnostico/diagnostico.module.css";
import { origenDeUtm } from "@/lib/diagnostico/origen";

/* La llamada de la web, con el formulario antes de la agenda (el mismo de /diagnostico).
   La consulta queda en el mismo panel, con origen "web" si no llegó con UTM.
   Variables (las mismas de /diagnostico):
   - DIAGNOSTICO_CAL: la agenda de Cal.com (usuario/evento). Sin agenda, le escribe Valentino.
   - DIAGNOSTICO_WHATSAPP: el número para adelantarse por WhatsApp. */

export const metadata: Metadata = {
  title: "Agendá una llamada · Nexora",
  description: "Seis preguntas cortas sobre tu negocio y elegís día y horario para hablar con el equipo de Nexora.",
  alternates: { canonical: "/agendar" },
};

const numeroWhatsapp = () => {
  const n = (process.env.DIAGNOSTICO_WHATSAPP || "").replace(/\D/g, "");
  return n.length >= 10 && n.length <= 15 ? n : "";
};

const linkCal = () => {
  const l = (process.env.DIAGNOSTICO_CAL || "").trim().replace(/^https:\/\/cal\.com\//, "");
  return /^[\w.-]+(\/[\w.-]+){1,2}$/.test(l) ? l : "";
};

export default async function Agendar({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const utm = origenDeUtm(await searchParams);
  const origen = utm.fuente ? utm : { ...utm, fuente: "web", medio: "agendar" };
  const calLink = linkCal();

  const pasos = [
    "Respondés seis preguntas cortas sobre tu negocio.",
    calLink
      ? "Si es el momento, elegís día y horario ahí mismo. Si no, te escribimos por WhatsApp."
      : "Te escribimos por WhatsApp para coordinar la llamada.",
    "En la llamada vemos tu negocio y, si tiene sentido, te proponemos cómo arrancar.",
  ];

  return (
    <>
      <Header />
      <main className="relative pt-[68px]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Etiqueta>Agendá una llamada</Etiqueta>
            <h1 className="titulo-degrade mt-5 text-[clamp(2.1rem,4.6vw,3.3rem)] font-extrabold leading-[1.05]">
              Contanos de tu negocio y <Resaltado>hablemos</Resaltado>
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-text-secondary">
              Antes de la llamada te hacemos unas preguntas, así llegamos con tu negocio entendido y la usamos para lo que
              importa.
            </p>
            <ol className="mt-8 space-y-4">
              {pasos.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/30 text-accent font-display text-[13px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-[16px] leading-relaxed text-text-secondary">{p}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* El formulario usa los estilos de /diagnostico: el marco sin su alto ni su fondo */}
          <div className={s.marco} style={{ minHeight: 0, background: "transparent" }}>
            <div className="rounded-2xl border border-border-strong bg-bg-card/70 backdrop-blur-sm p-6 sm:p-8">
              <Formulario origen={origen} whatsapp={numeroWhatsapp()} calLink={calLink} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
