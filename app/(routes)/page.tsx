import Header from "@/components/layout/header/Header";
import Navbar from "@/components/layout/navbar/Navbar";
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
      </main>
    </>
  );
}
