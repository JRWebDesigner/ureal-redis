'use client'


import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center mb-6">
              <img 
                src="https://hosting.renderforestsites.com/13061325/1421633/media/f97144b5c79c5a1f73d1d42e8dd8a744.png"
                alt="Logo Universidad Real"
                className="h-12"
              />
            </Link>
            <p className="text-white/80 mb-6">
              Formando líderes empresariales con educación de calidad y enfoque práctico.
            </p>
           <div className="flex space-x-4">
                    {[
            { icon: <FaFacebook size={20} />, color: 'text-white', link:'https://www.facebook.com/univreal' },
            { icon: <FaInstagram size={20} />, color: 'text-white', link:'https://instagram.com/univreal?utm_medium=copy_link' },
            { icon: <FaTwitter size={20} />, color: 'text-white', link:'https://twitter.com/UnivReal?s=08' },
            { icon: <FaYoutube size={20} />, color: 'text-white', link:'https://www.youtube.com/c/universidadreal/videos' },
            { icon: <FaTiktok size={20} />, color: 'text-white', link:'https://www.tiktok.com/@univreal' }
          ].map((social, index) => (
            <Link 
              key={index} 
              href={social.link}
              target='blank' 
              className={`w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-all ${social.color}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
          </motion.div>

          {[
            {
              title: "Carreras",
              links: [
                { name: "Comercio Internacional", url: "#" },
                { name: "Ingeniería de Sistemas", url: "#" },
                { name: "Comunicación Audiovisual", url: "#" },
                { name: "Mercadotecnia", url: "#" }
              ]
            },
            {
              title: "Enlaces útiles",
              links: [
                { name: "Admisiones", url: "#" },
                { name: "Becas", url: "#" },
                { name: "Eventos", url: "#" },
                { name: "Noticias", url: "#" }
              ]
            },
            {
              title: "Legal",
              links: [
                { name: "Términos y condiciones", url: "#" },
                { name: "Política de privacidad", url: "#" },
                { name: "Aviso legal", url: "#" }
              ]
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.url} 
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-10 border-t border-white/10 text-center text-white/60 text-sm"
        >
          <p>© {new Date().getFullYear()} Universidad Real de la Cámara Nacional de Comercio. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
