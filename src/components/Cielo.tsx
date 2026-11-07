/* Fondo de toda la página: cielo de noche con estrellas, dos nebulosas (verde de marca y azul) y grano.
   Es solo CSS: las estrellas son box-shadows calculadas una vez en el servidor, siempre las mismas
   (generador con semilla fija, así el HTML no cambia entre builds). Las posiciones van en vw/vh para
   que cualquier pantalla quede cubierta entera, del celular al monitor grande.
   Encima, en components/Particulas.tsx, caen las partículas de la marca. */

function generador(semilla: number) {
  let s = semilla;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function estrellas(cantidad: number, semilla: number, alfaMin: number, alfaMax: number, opciones: { brillo?: number; verdes?: number } = {}) {
  const azar = generador(semilla);
  const puntos: string[] = [];
  for (let i = 0; i < cantidad; i++) {
    const x = (azar() * 100).toFixed(2);
    const y = (azar() * 100).toFixed(2);
    const alfa = (alfaMin + azar() * (alfaMax - alfaMin)).toFixed(2);
    const verde = opciones.verdes ? azar() < opciones.verdes : false;
    const color = verde ? `rgba(0,230,118,${alfa})` : `rgba(255,255,255,${alfa})`;
    puntos.push(`${x}vw ${y}vh ${opciones.brillo ?? 0}px ${color}`);
  }
  return puntos.join(",");
}

const CHICAS = estrellas(300, 7, 0.2, 0.6);
const MEDIANAS = estrellas(60, 31, 0.4, 0.85);
const MEDIANAS_B = estrellas(50, 53, 0.4, 0.85, { verdes: 0.15 });
const GRANDES = estrellas(26, 97, 0.7, 1, { brillo: 2, verdes: 0.2 });

export default function Cielo() {
  return (
    <div className="cielo" aria-hidden="true">
      <div className="nebulosa nebulosa-verde" />
      <div className="nebulosa nebulosa-azul" />
      <div className="estrellas" style={{ width: 1, height: 1, boxShadow: CHICAS }} />
      <div className="estrellas titilar" style={{ width: 1.5, height: 1.5, boxShadow: MEDIANAS }} />
      <div className="estrellas titilar-desfasado" style={{ width: 1.5, height: 1.5, boxShadow: MEDIANAS_B }} />
      <div className="estrellas titilar-lento" style={{ width: 2, height: 2, boxShadow: GRANDES }} />
      <div className="grano" />
    </div>
  );
}
