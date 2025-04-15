'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <>
    <section 
      className="relative h-[100vh] flex items-center justify-center flex-col bg-dark text-white"
      style={{
        backgroundImage: "url(/Images/hero.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-dark/50"></div>
      
      <div className="container flex items-center justify-beetwen mx-auto px-4 relative z-10 py-32">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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
                  <div className="absolute right-1 flex flex-col space-x-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-all"
              >
                {/* Icono de red social */}
              </Link>
            ))}
          </div>
             </div> 
 <motion.div 
          className="absolute z-30 py-3 bottom-0 bg-white/10 backdrop-blur-md w-full hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Aprendizaje Basado en Experiencias
            </h3>
            <p className="text-sm text-gray-300">
              Los estudiantes participan activamente en proyectos, simulaciones, pasantías o casos reales.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Experiencia Práctica
            </h3>
            <p className="text-sm text-gray-300">
              Desarrolla habilidades prácticas con proyectos reales en más de 100 empresas asociadas a la Cámara Nacional de Comercio.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Crecimiento Personal
            </h3>
            <p className="text-sm text-gray-300">
              Accede a amplias oportunidades laborales en empresas afiliadas a la Cámara Nacional de Comercio al finalizar tu carrera.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-full aspect-video"
        >
          <div className="w-full h-full">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/OVT1aIUet28"
              title="Video institucional"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>    
        </motion.div>   

      </section>

    </>
  )
}
