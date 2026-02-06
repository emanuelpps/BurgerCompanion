import Header from "@/components/layout/header/Header";
import Navbar from "@/components/layout/navbar/Navbar";
import ButtonFactory from "@/components/ui/buttons/ButtonFactory";
import Card from "@/components/ui/card/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#2B2D2E] flex flex-col justify-center items-center w-full gap-10">
        <Header />
        <Card>
          General Roca 28 C <br /> Primavera
        </Card>
        <section className="flex flex-col items-center justify-center w-full gap-4 max-w-[50%]">
          <ButtonFactory variant="primary">Follow a Recipe</ButtonFactory>
          <ButtonFactory variant="secondary">Follow a Recipe</ButtonFactory>
        </section>
      </main>
    </>
  );
}
