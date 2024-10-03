import Link from "next/link";
import NavMenuToggle from "./NavMenuToggle";
import LocalTime from "./assets/LocalTime";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-start p-6 sticky top-0 mix-blend-difference z-[100]">
      <Link
        href={"/"}
        className="flex items-baseline gap-1 w-fit text-sm text-bg-primary font-semibold"
      >
        Yuriy Koshyk{" "}
        <svg
          viewBox="0 0 9 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[1ch] w-auto"
        >
          <path
            d="M4.2344 8.64358C6.36858 8.64358 8.09868 6.89272 8.09868 4.73292C8.09868 2.57313 6.36858 0.822266 4.2344 0.822266C2.10021 0.822266 0.370117 2.57313 0.370117 4.73292C0.370117 6.89272 2.10021 8.64358 4.2344 8.64358Z"
            fill="#fff8ef"
          />
          <path
            d="M8.09868 16.4639V8.64258L0.370117 16.4639H8.09868Z"
            fill="#fff8ef"
          />
        </svg>
      </Link>

      <ul className="hidden md:block justify-self-center text-sm text-bg-primary font-semibold">
        <li>Product Designer</li>
        <li className="text-sm opacity-45">Always learning</li>
      </ul>
      <LocalTime />

      <NavMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
export default Navbar;
