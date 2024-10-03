import { easings } from "@/utils/animations";
import { motion } from "framer-motion";
import NavMenuItem from "./NavMenuItem";
import Link from "next/link";

const NavMenu = () => {
  const navItems = [
    { title: "Index", url: "/" },
    { title: "Library", url: "/" },
    { title: "About", url: "/" },
    { title: "Playground", url: "/" },
  ];

  const contactItems = [
    { title: "yuriy.koshyk@gmail.com", url: "mailto:yuriy.koshyk@gmail.com" },
    { title: "LinkedIn", url: "/" },
    { title: "GitHub", url: "/" },
    { title: "Dribbble", url: "/" },
    { title: "Resume", url: "/" },
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
          />
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 2, ease: easings.easeOutQuart },
        }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="h-[1ch] w-[1ch] mb-4 bg-fg-secondary rounded-full"
      />

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 2, ease: easings.easeOutQuart },
        }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="flex flex-col gap-1 w-full font-semibold text-fg-secondary"
      >
        {contactItems.map((item, i) => (
          <li key={i} className="w-full">
            <Link
              href={item.url}
              className="inline-block w-full transition-all duration-200 
              hover:duration-200 hover:transition-all hover:underline hover:underline-offset-2 hover:text-bg-primary
              focus:duration-200 focus:transition-all focus:underline focus:underline-offset-2 focus:text-bg-primary
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
