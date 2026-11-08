import type { Metadata } from "next";
import "./globals.css";

const description =
  "La historia de la lucha libre mexicana, contada por Médico Asesino Jr. Crónicas del Pancracio. Próximamente.";

export const metadata: Metadata = {
  title: "Crónicas del Pancracio | Médico Asesino Jr.",
  description,
  icons: {
    icon: {
      url: "/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
    },
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Crónicas del Pancracio | Médico Asesino Jr.",
    description,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
