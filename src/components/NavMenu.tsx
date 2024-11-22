import { easings } from "@/utils/animations";
import { motion } from "framer-motion";
import NavMenuItem from "./NavMenuItem";
import Link from "next/link";

interface NavMenuProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { title: "Index", url: "/" },
    { title: "Library", url: "/library" },
    { title: "About", url: "/about" },
    { title: "Playground", url: "/playground" },
  ];

  const contactItems = [
    { title: "yuriy.koshyk@gmail.com", url: "mailto:yuriy.koshyk@gmail.com" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/yuriy-koshyk" },
    { title: "GitHub", url: "https://github.com/yuriykosh" },
    { title: "Behance", url: "https://www.behance.net/yuriykosh" },
    { title: "Resume", url: "https://read.cv/yuriy_kosh" },
  ];

  return (
    <motion.nav
      className="fixed h-screen w-screen bg-black flex flex-col gap-8 px-6 pt-28 md:pt-20 pb-8 z-50"
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: "-100%", transition: { duration: 0.3 } }}
    >
      <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
        {navItems.map((item, i) => (
          <NavMenuItem
            key={i}
            index={i + 1}
            title={item.title}
            url={item.url}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.75, duration: 2, ease: easings.easeOutQuart },
        }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="h-[1ch] w-[1ch] mb-4 bg-fg-secondary rounded-full"
      />

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 2, ease: easings.easeOutQuart },
        }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="flex flex-col gap-1 w-full font-medium text-fg-secondary"
      >
        {contactItems.map((item, i) => (
          <li key={i} className="w-full">
            <Link
              href={item.url}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block w-full transition-all duration-200 
              hover:duration-200 hover:transition-all hover:underline hover:underline-offset-2 hover:text-bg-primary
              focus-visible:duration-200 focus-visible:transition-all focus-visible:underline focus-visible:underline-offset-2 focus-visible:text-bg-primary
              "
            >
              {item.title}
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
export default NavMenu;
