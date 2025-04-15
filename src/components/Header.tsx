'use client'
import { useState, useEffect } from "react";
import Container from './Container';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const links = [
    { name: "Tu Universidad", href: "#tuuni" },
    { 
      name: "Foramcion", 
      href: "#formacion",
    },
    { 
      name: "Extension", 
      href: "#extencion",
    },
    { 
      name: "Servicios", 
      href: "#servicios",
     },
    { name: "Enlaces", href: "#enlaces" },
  ];

 const isSubmenuActive = (submenuItems: Array<{ href: string }>) => {
  return submenuItems.some(item => pathname === item.href);
};
  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const renderSocialIcon = (Icon: IconComponent, href: string, label: string) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white hover:text-red-500 transition-colors duration-300 p-2 uppercase"
    >
      <Icon className="w-5 h-5" />
    </a>
  );

  const additionalLinks = [
    { name: "CONÓCENOS", href: "/conocenos" },
    { name: "SOY UREAL", href: "http://sistema.ureal.edu.bo/" },
    { name: "CAMPUS VIRTUAL", href: "https://virtual.ureal.edu.bo/login/index.php" },
    { name: "MICROSOFT LEARN", href: "https://teams.microsoft.com/v2/" },
    { name: "BIBLIOTECA", href: "https://ureal.edu.bo/landingbiblio.html" }
  ];

  return (
    <header>
      <Container>      
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full z-50 bg-gray-900"
          aria-label="Navegación principal"
        >
         
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="z-50"
            >
              <Link href="/" aria-label="Ir al inicio">
                <img 
                  width={180} 
                  height={80}
                  src="/Images/logo.png" 
                  alt="Logo Universidad Real de Cámara de Comercio" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* Menú Desktop */}
            <ul className="hidden md:flex gap-4 text-white items-center uppercase">
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
                        {openSubmenu === link.name ? 
                          <FaChevronUp size={12} /> : 
                          <FaChevronDown size={12} />}
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
                              <motion.li
                                key={subItem.href}
                                whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                              >
                                <Link
                                  href={subItem.href}
                                  className={`block px-4 py-2 transition-colors ${
                                    pathname === subItem.href ? "bg-white text-black font-bold" : "hover:text-red-400"
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
                          ? "font-bold bg-white text-black" 
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
      className="md:hidden bg-gray-900 text-white overflow-y-auto uppercase fixed top-[130px] bottom-0 left-0 right-0 z-40"
    >
      <ul className="flex flex-col gap-1 py-4 px-4">
        {/* Mostrar enlaces adicionales en móvil */}
        {additionalLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <Link
              href={link.href}
              className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-white"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}

        {/* Separador */}
        <div className="border-t border-gray-700 my-2"></div>

        {/* Menú principal */}
        {links.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: (index + additionalLinks.length) * 0.05 }}
          >
            {link.submenu ? (
              <div className="mb-2">
                <button
                  onClick={() => toggleSubmenu(link.name)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg ${
                    pathname === link.href || isSubmenuActive(link.submenu)
                      ? "bg-white text-black font-bold" 
                      : "hover:bg-gray-800"
                  }`}
                  aria-expanded={openSubmenu === link.name}
                >
                  {link.name}
                  {openSubmenu === link.name ? 
                    <FaChevronUp size={14} /> : 
                    <FaChevronDown size={14} />}
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
                        <motion.li
                          key={subItem.href}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
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
