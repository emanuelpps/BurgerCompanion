import Header from "@/components/layout/header/Header";
import Navbar from "@/components/layout/navbar/Navbar";
import ButtonFactory from "@/components/ui/buttons/ButtonFactory";
import Card from "@/components/ui/card/Card";
import TitleFactory from "@/components/ui/titles/TitleFactory";
import Image from "next/image";
import burgerImage from "@/public/images/burger-1024x1024.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#2B2D2E] flex flex-col justify-center items-center w-full gap-10">
        <Header />
        <Card className="p-6">
          General Roca 28 C <br /> Primavera
        </Card>
        <section className="flex flex-col items-center justify-center w-full gap-5 max-w-[50%]">
          <ButtonFactory variant="primary">Seguir una Receta</ButtonFactory>
          <ButtonFactory variant="secondary">
            Crear Mi Hamburguesa
          </ButtonFactory>
        </section>
        <section className="flex flex-col items-center justify-center">
          <TitleFactory variant="secondary">Sugeridos para vos</TitleFactory>
          <Card className="flex flex-col items-start justify-center w-full pb-6 rounded-4xl">
            <Image
              src={burgerImage}
              alt="burger"
              width={800}
              height={800}
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
              }}
            />
            <TitleFactory variant="tertiary">Primavera BBQ Burger</TitleFactory>
          </Card>
        </section>
      </main>
    </>
  );
}
