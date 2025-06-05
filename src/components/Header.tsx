'use client'

import { useState, useEffect } from "react";
import Container from './Container';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

type NavLink = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { name: "Tu Universidad", href: "/#tuuni" },
    { name: "Ofrecemos", href: "/#formacion" },
    { name: "Plataformas", href: "/#extencion" },
    { name: "Carreras", href: "/carreras" },
    { name: "Contactos", href: "/#contactos" },
  ];

  const isSubmenuActive = (submenuItems: Array<{ href: string }>) => {
    return submenuItems.some(item => pathname === item.href);
  };

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  return (
    <header>
      <Container>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'bg-gray-900 bg-opacity-100 py-1' : 'bg-transparent py-6'}`}
          aria-label="Navegación principal"
        >
          <div className="container mx-auto flex justify-between items-center px-4 transition-all duration-300">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="z-50 transition-all duration-300">
              <Link href="/" aria-label="Ir al inicio">
                <img
                  width={scrolled ? 180 : 220}
                  height={scrolled ? 80 : 100}
                  src="/Images/logo.png"
                  alt="Logo Universidad Real de Cámara de Comercio"
                  className={`object-contain transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}
                />
              </Link>
            </motion.div>

            {/* Menú Desktop */}
            <ul className={`hidden md:flex gap-4 text-white items-center transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.submenu && setOpenSubmenu(link.name)}
                  onMouseLeave={() => link.submenu && setOpenSubmenu(null)}
                >
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                          pathname === link.href || isSubmenuActive(link.submenu)
                            ? "font-bold bg-white text-black"
                            : "hover:bg-gray-800"
                        }`}
                        aria-expanded={openSubmenu === link.name}
                        aria-haspopup="true"
                      >
                        {link.name}
                        {openSubmenu === link.name ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </button>

                      <AnimatePresence>
                        {openSubmenu === link.name && (
                          <motion.ul
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-1 w-56 bg-gray-900 rounded-lg shadow-xl py-2 z-50"
                            role="menu"
                          >
                            {link.submenu.map((subItem) => (
                              <motion.li key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  className={`block px-4 py-2 transition-colors ${
                                    pathname === subItem.href
                                      ? "bg-white text-black font-bold"
                                      : "hover:text-red-400"
                                  }`}
                                  role="menuitem"
                                >
                                  {subItem.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-4 py-2 rounded-lg transition-colors block ${
                        pathname === link.href
                          ? "font-bold"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Botón Menú Móvil */}
            <button
              className="md:hidden text-white text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-white rounded z-50 uppercase"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menú Móvil */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-gray-900 text-white overflow-y-auto uppercase z-40"
              >
                <ul className="flex flex-col gap-1 py-4 px-4 h-[90dvh]">
                  <div className="border-t border-gray-700 my-2" />
                  {links.map((link) => (
                    <motion.li key={link.name}>
                      {link.submenu ? (
                        <div className="mb-2">
                          <button
                            onClick={() => toggleSubmenu(link.name)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg ${
                              pathname === link.href || isSubmenuActive(link.submenu)
                                ? "bg-white text-black font-bold"
                                : "hover:bg-gray-800"
                            }`}
                          >
                            {link.name}
                            {openSubmenu === link.name ? (
                              <FaChevronUp size={14} />
                            ) : (
                              <FaChevronDown size={14} />
                            )}
                          </button>

                          <AnimatePresence>
                            {openSubmenu === link.name && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 mt-1 space-y-1"
                              >
                                {link.submenu.map((subItem) => (
                                  <motion.li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className={`block px-4 py-2 rounded-lg ${
                                        pathname === subItem.href
                                          ? "bg-white text-black font-bold"
                                          : "hover:bg-gray-800"
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 rounded-lg ${
                            pathname === link.href
                              ? "bg-white text-black font-bold"
                              : "hover:bg-gray-800"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </Container>
    </header>
  );
}

