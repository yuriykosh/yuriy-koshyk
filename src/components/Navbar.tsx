import Link from "next/link";
import NavMenuToggle from "./NavMenuToggle";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="grid grid-cols-2 items-start p-6 sticky top-0 mix-blend-difference z-[100]">
      <Link href={"/"} className="text-[#ccbaa9] font-semibold">
        Yuriy Koshyk
      </Link>

      <ul className="text-white font-semibold">
        <li>Product Designer</li>
        <li className="opacity-45">Always learning</li>
      </ul>
      <NavMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
export default Navbar;
