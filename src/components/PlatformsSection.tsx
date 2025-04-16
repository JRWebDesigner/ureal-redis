'use client'
import { motion } from 'framer-motion'

const platforms = [
  {
    name: "SISTEMA UREAL",

    icon: "/icons/system.svg",
    link: "http://sistema.ureal.edu.bo/"
  },
  {
    name: "CAMPUS VIRTUAL",
   
    icon: "/icons/virtual.svg",
    link: "http://builder.renderforestsites.com/"
  },
  {
    name: "MICROSOFT 365",
  icon: "/icons/office.svg",
    link: "http://builder.renderforestsites.com/"
  },
  {
    name: "BIBLIOTECA",
    icon: "/icons/library.svg",
    link: "http://builder.renderforestsites.com/"
  }
]

export default function PlatformsSection() {
  return (
    <section className="relative py-20 bg-black text-primary"
    >
    <img src='/Images/fondo2.png' className='w-full h-full absolute z-10 object-cover opacity-45 -my-20' />
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl font-bold mb-4">Accede a nuestras plataformas académicas</h2>
        </motion.div>

        <div className="relative z-30 flex justify-around items-center gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative flex justify-center items-center flex-col w-[330px] h-[140px] bg-white rounded-xl p-4 text-center hover:bg-primary hover:text-white transition-all z-20"
            >
              <div className="absolute top-[-50px] left-[20px] bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <img src={platform.icon} alt={platform.name} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{platform.name}</h3>

              <a 
                href={platform.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
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
