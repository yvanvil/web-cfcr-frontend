"use client";

import News from "@/components/Inicio/01_News/News";
import Marcas from "@/components/Inicio/02_Marcas/Marcas";
import Categorias from "@/components/Inicio/03_Categorias/Categorias";
import ProductosDestacados from "@/components/Inicio/04_ProductosDestacados/ProductosDestacados";
import Rubros from "@/components/Inicio/05_Rubros/Rubros";
import Catalogos from "@/components/Inicio/06_Catalogos/Catalogos";
import Testimonios from "@/components/Inicio/07_Testimonios/Testimonios";
import Clientes from "@/components/Inicio/08_Clientes/Clientes";
import Whatsapp from "@/components/Inicio/09_Whatsapp/Whatsapp";
import Fortalezas from "@/components/Inicio/10_Fortalezas/Fortalezas";
import Suscripcion from "@/components/Inicio/11_Suscripcion/Suscripcion";
import Articulos from "@/components/Inicio/12_Articulos/Articulos";

export default function Home() {
  return (
    <>
      <News/>
      <Marcas/>
      <Categorias/>
      <ProductosDestacados/>
      <Rubros/>
      <Catalogos/>
      <Testimonios/>
      <Clientes/>
      <Whatsapp/>
      <Fortalezas/>
      <Suscripcion/>
      <Articulos/>
    </>
  );
}