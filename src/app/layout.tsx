import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

//Components:
import Navbar from "./components/navbar";

//Default Font:
const poppins = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pomotodo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} m-4`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
