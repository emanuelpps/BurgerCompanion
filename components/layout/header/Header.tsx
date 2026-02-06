import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
  return (
    <header className="w-full flex flex-col justify-center items-center h-full">
      <HeaderLogo />
      <HeaderTitle />
    </header>
  );
}
