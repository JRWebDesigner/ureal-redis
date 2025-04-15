'use client'

import { motion } from 'framer-motion'

const authorities = [
  {
    name: "Lic. Eduardo Olivo Gamarra",
    position: "PRESIDENTE DE LA UNIVERSIDAD",
    description: "Especialista en el rubro de seguros, Eduardo Olivo cuenta con una amplia trayectoria profesional. Actualmente tiene un importante rol en directorios y cámaras y una visión de compromiso con Bolivia y el futuro de las nuevas generaciones.",
    image: "/images/autoridad1.jpg",
    socialLinks: [
      { name: "LinkedIn", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "Facebook", url: "#" }
    ]
  },
  {
    name: "Carlos Andia Alarcón Phd.",
    position: "RECTOR DE LA UNIVERSIDAD",
    description: "El Dr. Carlos Andia es un destacado académico de la Facultad de Ciencias Económicas y Empresariales. Economista con una Maestría en Administración de Empresas y Finanzas y un Doctorado en Estrategias del Desarrollo.",
    image: "/images/autoridad2.jpg",
    socialLinks: [
      { name: "LinkedIn", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "Facebook", url: "#" }
    ]
  }
]

export default function AuthoritiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Nuestras Autoridades</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {authorities.map((authority, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img 
                  src={authority.image} 
                  alt={authority.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-1">{authority.name}</h3>
                <p className="text-primary font-medium mb-4">{authority.position}</p>
                <p className="text-gray mb-6">{authority.description}</p>
                
                <div className="flex space-x-4">
                  {authority.socialLinks.map((social, i) => (
                    <a 
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full hover:bg-primary/20 transition-all"
                    >
                      {/* Icono de red social */}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
