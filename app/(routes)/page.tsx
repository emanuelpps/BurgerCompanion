import Header from "@/components/layout/header/Header";
import Navbar from "@/components/layout/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#2B2D2E]">
        <Header />
      </main>
    </>
  );
}
