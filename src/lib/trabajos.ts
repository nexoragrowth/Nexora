/* Webs y demos que armó el equipo. Todas las capturas son de los sitios reales, tomadas el 2026-11-07.
   - "web": está publicada y es la web del negocio.
   - "demo": es una propuesta de diseño o una demo con datos de ejemplo; no es la web oficial del negocio.
   Las demos no se linkean (no se indexan); las webs publicadas sí. Quedaron afuera las capturas con caras
   de personas o con teléfonos. */

export type Trabajo = {
  id: string;
  nombre: string;
  rubro: string;
  tipo: "web" | "demo";
  url?: string;
  dominio?: string;
};

export const TRABAJOS: Trabajo[] = [
  { id: "raquel", nombre: "Dra. Raquel Rodríguez", rubro: "Ortodoncia · Jujuy", tipo: "web", url: "https://www.raquelrodriguez.com.ar/", dominio: "raquelrodriguez.com.ar" },
  { id: "trendspot", nombre: "TrendSpot", rubro: "Venta de iPhones · Envíos a todo el país", tipo: "web", url: "https://www.trend-spot.shop/", dominio: "trend-spot.shop" },
  { id: "landing", nombre: "Nexora · Diagnóstico", rubro: "Nuestra landing de consultas", tipo: "web", url: "/diagnostico", dominio: "nexoragrowth.es/diagnostico" },
  { id: "chicapple", nombre: "Chic Apple", rubro: "iPhones · La Plata", tipo: "demo" },
  { id: "veredita", nombre: "Veredita", rubro: "Café y bar · La Plata", tipo: "demo" },
  { id: "heladeria", nombre: "Heladería H", rubro: "Heladería · Gran La Plata", tipo: "demo" },
  { id: "balneario", nombre: "Balneario Pepe's", rubro: "Balneario · Miramar", tipo: "demo" },
  { id: "eurekasistema", nombre: "Eureka Academy", rubro: "Escuela de música · La Plata", tipo: "demo" },
  { id: "tita", nombre: "Tita Café", rubro: "Café de especialidad · La Plata", tipo: "demo" },
  { id: "mona", nombre: "MONA", rubro: "Estética corporal · Gonnet", tipo: "demo" },
  { id: "vital", nombre: "Vital", rubro: "Veterinaria · Gonnet", tipo: "demo" },
  { id: "rebelde", nombre: "Rebelde Estilistas", rubro: "Peluquería · La Plata", tipo: "demo" },
  { id: "pilates", nombre: "Pilates Bell", rubro: "Pilates · City Bell", tipo: "demo" },
  { id: "funcioparke", nombre: "Funcioparke", rubro: "Entrenamiento funcional · La Plata", tipo: "demo" },
  { id: "mododiablo", nombre: "Modo Diablo", rubro: "Distribuidora de bebidas · CABA", tipo: "demo" },
];

/* Los cuatro que van en la franja chica de la home (sección Proyectos). */
export const DESTACADOS = ["raquel", "trendspot", "chicapple", "veredita"];
