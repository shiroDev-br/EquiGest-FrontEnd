import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import '../styles/global.css'

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "EquiGest",
  description: "EquiGest Frontend; A project for mare management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className}`}>
        {children}
      </body>
    </html>
  );
}
