import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Inter} from 'next/font/google';
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Inter({
  subsets: ["latin"],
  weight: ["300","400", "500", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>UDO Software League</title>
        <link rel="icon" href="/favicon.ico" /> 
      </head>
        <body className={lato.className}>
          <Navbar/>
          <div className="pt-14">{children}</div>
        </body>
    </html>
  );
}
