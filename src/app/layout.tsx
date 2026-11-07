import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import Cielo from "@/components/Cielo";
import LuzPuntero from "@/components/LuzPuntero";
import PixelMeta from "@/components/PixelMeta";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const TITULO = "Nexora Subscription · Tu equipo de sistemas y crecimiento";
const DESCRIPCION =
  "Contenido, publicidad, WhatsApp, CRM y sistemas a medida, con un mismo equipo y por una suscripción mensual. Sin contratar uno interno.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexoragrowth.es"),
  alternates: { canonical: "./" },
  title: TITULO,
  description: DESCRIPCION,
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    type: "website",
    locale: "es_AR",
    siteName: "Nexora",
    images: [{ url: "/thumbnail-profile.jpg", width: 1024, height: 1024, alt: "Logo de Nexora" }],
  },
  twitter: {
    card: "summary",
    title: TITULO,
    description: DESCRIPCION,
    images: ["/thumbnail-profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070A12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}>
        <Cielo />
        <LuzPuntero />
        <MotionProvider>{children}</MotionProvider>
        <PixelMeta />
      </body>
    </html>
  );
}
