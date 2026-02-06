import Image from "next/image";
import burgerCompanionLogo from "@/public/images/BurgerCompanionLogo.svg";

export default function HeaderLogo() {
  return (
    <div className="relative">
      <Image
        src={burgerCompanionLogo}
        alt="BurgerCompanion Logo"
        width={455}
        height={455}
        className="drop-shadow-[0_0_25px_rgba(255,101,0,0.3)]"
      />
    </div>
  );
}
