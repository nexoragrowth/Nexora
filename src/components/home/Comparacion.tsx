import FadeUp from "../FadeUp";
import Encabezado, { Resaltado } from "../Encabezado";

/* "Un equipo entero, no una contratación" (como el "pool of senior specialists" de la referencia).
   La comparación es por cómo se trabaja, sin cifras ni nombres de otras agencias. */

const PERFILES = [
  "Responsable de tu cuenta",
  "Sistemas y desarrollo",
  "Contenido en video",
  "Diseño y carruseles",
  "Publicidad en Meta",
  "Atención comercial",
];

const OPCIONES = ["Contratar a alguien", "Freelancers sueltos", "Agencia tradicional", "Nexora Subscription"];

const FILAS: { tema: string; valores: string[] }[] = [
  {
    tema: "Qué sabe hacer",
    valores: ["Lo que sabe esa persona", "Cada uno, lo suyo", "Lo de su área", "Sistemas, contenido y publicidad juntos"],
  },
  {
    tema: "Quién coordina",
    valores: ["Vos", "Vos, con cada uno", "Un ejecutivo de cuentas", "Un responsable y tu portal"],
  },
  {
    tema: "Si un mes necesitás menos",
    valores: ["El sueldo es el mismo", "Renegociás con cada uno", "Depende del contrato", "Pausás o cambiás de plan"],
  },
  {
    tema: "Cómo ves el avance",
    valores: ["Le preguntás", "Le preguntás a cada uno", "En el reporte del mes", "En el portal, cuando quieras"],
  },
];

export default function Comparacion() {
  return (
    <section id="por-que" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <div>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Encabezado
            etiqueta="Por qué una suscripción"
            titulo={
              <>
                Un equipo entero, <Resaltado>no una contratación</Resaltado>
              </>
            }
            bajada="En vez de buscar, capacitar y coordinar a varias personas, cada tarea la hace el que mejor la sabe hacer, dentro del mismo equipo."
          />
          <FadeUp delay={0.08} className="flex flex-wrap gap-2.5 lg:justify-end">
            {PERFILES.map((p) => (
              <span
                key={p}
                className="rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1.5 text-[13.5px] font-medium text-accent"
              >
                {p}
              </span>
            ))}
          </FadeUp>
        </div>

        <FadeUp delay={0.1} className="mt-10 luz filo rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden">
          {/* En el celular, cada fila es una tarjeta; desde sm, una tabla */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-medium text-text-muted" />
                  {OPCIONES.map((o, i) => (
                    <th
                      key={o}
                      scope="col"
                      className={`p-4 font-display text-[13.5px] font-bold ${i === 3 ? "text-accent bg-accent/[0.06]" : "text-text-secondary"}`}
                    >
                      {o}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FILAS.map((f) => (
                  <tr key={f.tema} className="border-b border-border last:border-0">
                    <th scope="row" className="p-4 align-top font-semibold text-text-primary">
                      {f.tema}
                    </th>
                    {f.valores.map((v, i) => (
                      <td
                        key={v}
                        className={`p-4 align-top leading-snug ${i === 3 ? "bg-accent/[0.06] font-semibold text-text-primary" : "text-text-muted"}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="sm:hidden divide-y divide-border">
            {FILAS.map((f) => (
              <li key={f.tema} className="p-5">
                <p className="font-semibold text-text-primary">{f.tema}</p>
                <p className="mt-2 text-[14.5px] font-semibold text-accent">{f.valores[3]}</p>
                <p className="mt-1 text-[13.5px] text-text-muted">
                  Contratar: {f.valores[0].toLowerCase()} · Agencia: {f.valores[2].toLowerCase()}
                </p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
