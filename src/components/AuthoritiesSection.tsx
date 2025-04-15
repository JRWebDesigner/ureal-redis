'use client'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion'

const authorities = [
  {
    name: "Lic. Eduardo Olivo Gamarra",
    position: "PRESIDENTE DE LA UNIVERSIDAD",
    description: "Especialista en el rubro de seguros, Eduardo Olivo cuenta con una amplia trayectoria profesional. Actualmente tiene un importante rol en directorios y cámaras y una visión de compromiso con Bolivia y el futuro de las nuevas generaciones. Habla de fortalecer el sistema empresarial, de la búsqueda de la unidad de los empresarios, del liderazgo de Sudamericana en el mercado y cómo, gracias a alianzas con empresas de la talla de Willis Towers Watson, han logrado representar a los corredores de seguros más importantes del mundo.",
    image: "/Images/presidente.jpg",
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
    description: "El Dr. Carlos Andia es un destacado académico de la Facultad de Ciencias Económicas y Empresariales.  Economista con una Maestría en Administración de Empresas y Finanzas y un Doctorado en Estrategias del Desarrollo, se destaca por su experiencia y liderazgo. Apasionado por la enseñanza y el aprendizaje, promueve la formación de profesionales íntegros y responsables. Además, es un líder tanto dentro como fuera del aula, combinando su amor por el deporte (ciclismo, maratón, natación, triatlón) con su trayectoria académica. ",
    image: "/Images/rector.jpg",
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

        <div className="flex flex-col flex-row justify-center items-center gap-5">
          {authorities.map((authority, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden w-[80%] md:w-[30%] p-5"
            > 
              <div className="relative">
                <img 
                  src={authority.image} 
                  alt={authority.name}
                  className="w-[100px] rounded-full h-[100px] object-cover"
                />
              </div>
              <div className="p-8 flex text-center justify-center items-center flex-col">
                <h3 className="text-lg md:text-2xl font-bold text-dark mb-1">{authority.name}</h3>
                <p className="text-sm font-medium mb-4">{authority.position}</p>
                <p className="text-sm text-gray mb-6">{authority.description}</p>
                
                <div className="flex space-x-4">
                  {authority.socialLinks.map((social, i) => (
                    <a 
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:bg-primary/50 transition-all"
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
