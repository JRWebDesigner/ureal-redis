'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section 
      className="relative h-[110vh] flex items-center justify-center bg-dark text-white"
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
          
          <div className="flex space-x-4">
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
        </motion.div>
        
        <motion.div 
          className="absolute right-20 bottom-20 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-30 py-3 bottom-0 bg-black/90 md:bg-white/10 backdrop-blur-md w-full block"
        >
          <div className="flex flex-col space-y-8">
            {[
              "Aprendizaje Basado en Experiencias",
              "Experiencia Práctica",
              "Crecimiento Personal"
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-lg max-w-xs border border-white/20">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
