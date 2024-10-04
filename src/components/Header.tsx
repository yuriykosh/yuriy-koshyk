"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <AnimatePresence>
        {menuOpen && <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};
export default Header;
