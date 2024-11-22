import Link from "next/link";
import NavMenuToggle from "./NavMenuToggle";
import LocalTime from "./assets/LocalTime";
import Logo from "./assets/icons/Logo";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 items-start p-6 sticky top-0 mix-blend-difference z-[100]">
      <Link
        href={"/"}
        onClick={() => setMenuOpen(false)}
        className="flex items-baseline gap-1 col-span-1 md:col-span-3 w-fit text-sm text-bg-primary font-medium outline-offset-4 focus-visible:outline-2 focus-visible:outline-dashed active:outline-none"
      >
        Yuriy Koshyk
        <Logo />
      </Link>

      <ul className="hidden md:block col-span-2 text-sm text-bg-primary font-medium">
        <li>Product Designer</li>
        <li className="text-sm opacity-45">Always learning</li>
      </ul>
      <LocalTime />

      <NavMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
export default Navbar;
