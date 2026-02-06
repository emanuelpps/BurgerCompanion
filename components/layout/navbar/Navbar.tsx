import Avatar from "./Avatar";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className="w-full p-6 text-white flex items-center justify-between">
      <Menu />
      <Avatar />
    </nav>
  );
}
