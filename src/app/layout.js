import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '500', '600', '700', '800']});

export const metadata = {
  title: "Corporación FCR",
  description: "Soluciones Integrales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}