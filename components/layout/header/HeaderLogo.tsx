import Image from "next/image";
import burgerCompanionLogo from "@/public/images/BurgerCompanionLogo.svg";

export default function HeaderLogo() {
  return (
    <div>
      <Image
        src={burgerCompanionLogo}
        alt="BurgerCompanion Logo"
        width={455}
        height={455}
      />
    </div>
  );
}
