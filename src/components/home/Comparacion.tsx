import FadeUp from "../FadeUp";
import Encabezado, { Resaltado, Coma } from "../Encabezado";

/* Cómo se compara (el "How we compare" de designme.agency), sin barras de costo ni "por menos que una
   contratación": no hay precio publicado. Comparación por cómo se trabaja, sin nombrar a nadie. */

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
    <section id="compara" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <div>
        <Encabezado
          etiqueta="Cómo se compara"
          titulo={
            <>
              Contratar<Coma /> sumar freelancers<Coma /> una agencia <Resaltado>o Nexora</Resaltado>
            </>
          }
          bajada="Sin cifras: cómo se trabaja en cada caso."
        />

        <FadeUp delay={0.1} className="tarjeta mt-10 luz filo rounded-2xl border border-border overflow-hidden">
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
