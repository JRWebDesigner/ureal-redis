'use client'

import { motion } from 'framer-motion'

const platforms = [
  {
    name: "SISTEMA UREAL",
    description: "Accede al sistema académico de la universidad",
    icon: "/icons/system.svg",
    link: "http://sistema.ureal.edu.bo"
  },
  {
    name: "CAMPUS VIRTUAL",
    description: "Plataforma de aprendizaje en línea",
    icon: "/icons/virtual.svg",
    link: "#"
  },
  {
    name: "MICROSOFT 365",
    description: "Herramientas de productividad para estudiantes",
    icon: "/icons/office.svg",
    link: "#"
  },
  {
    name: "BIBLIOTECA",
    description: "Recursos bibliográficos digitales",
    icon: "/icons/library.svg",
    link: "#"
  }
]

export default function PlatformsSection() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Accede a nuestras plataformas académicas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <img src={platform.icon} alt={platform.name} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
              <p className="text-white/80 mb-6">{platform.description}</p>
              <a 
                href={platform.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Ingresa aquí
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
