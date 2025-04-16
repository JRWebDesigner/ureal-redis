'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section 
      className="relative h-auto  md:h-[110vh] flex md:items-center justify-center bg-dark flex-col text-white"
      style={{
        backgroundImage: "url(/Images/hero.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-dark/50"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Universidad Real de la Cámara Nacional de Comercio
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-medium">
            <strong>Formando líderes empresariales</strong>
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link 
              href="#inscripcion" 
              className="bg-gradient-to-b from-secondary to-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary transition-all"
            >
              Inscríbete !!!
            </Link>
            <Link 
              href="#carreras" 
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all"
            >
              Carreras
            </Link>
          </div>
        </motion.div>

        {/* Redes Sociales */}
        <div className="flex md:flex-col gap-5 md:absolute right-4 top-1/2 transform -translate-y-1/2">
          {[
            { icon: <FaFacebook size={20} />, color: 'text-white' },
            { icon: <FaInstagram size={20} />, color: 'text-white' },
            { icon: <FaTwitter size={20} />, color: 'text-white' },
            { icon: <FaYoutube size={20} />, color: 'text-white' },
            { icon: <FaTiktok size={20} />, color: 'text-white' }
          ].map((social, index) => (
            <Link 
              key={index} 
              href="#" 
              className={`w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-all ${social.color}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      {/* Sección de beneficios en el pie */}
      <motion.div 
  className="w-full bg-black/40 backdrop-blur-md relative md:absolute md:bottom-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  <div className="container mx-auto py-8 px-4">
    <div className="flex flex-wrap md:grid md:grid-cols-4 gap-6 items-start text-white">
      <div className="flex w-full md:col-span-3 justify-between gap-4">
        {[
          {
            title: "Aprendizaje Basado en Experiencias",
            content: "Los estudiantes participan activamente en proyectos, simulaciones, pasantías o casos reales."
          },
          {
            title: "Experiencia Práctica",
            content: "Desarrolla habilidades prácticas con proyectos reales en más de 100 empresas asociadas a la Cámara Nacional de Comercio."
          },
          {
            title: "Crecimiento Personal",
            content: "Accede a amplias oportunidades laborales en empresas afiliadas a la Cámara Nacional de Comercio al finalizar tu carrera."
          }
        ].map((item, index) => (
          <div key={index} className="flex-1 min-w-[200px]">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm">{item.content}</p>
          </div>
        ))}
      </div>

      {/* YouTube video */}
      <div className="w-full md:w-auto">
          <div className="aspect-w-4 h-[270px] md:h-auto md:aspect-h-3 w-full">
            <iframe 
              src="https://www.youtube.com/embed/OVT1aIUet28"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
    </div>
  </div>
</motion.div>
    </section>
  )
}
