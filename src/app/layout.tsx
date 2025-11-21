import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hollow Knight Silksong",
  description: "A website about the game Hollow Knight Silksong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
