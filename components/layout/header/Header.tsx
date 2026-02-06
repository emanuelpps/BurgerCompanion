import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
  return (
    <header className="flex flex-col items-center w-full">
      <HeaderLogo />
      <HeaderTitle />
    </header>
  );
}
