"use client"
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiDollarSign, FiAward, FiUserCheck, FiBookOpen } from 'react-icons/fi'

export default function PageMarketingDigital() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Diplomado en Marketing Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Especialización en estrategias digitales y análisis de mercado online
          </motion.p>
        </div>
      </section>

      {/* Basic Info */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiCalendar className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inscripción hasta</p>
                  <p className="font-bold text-black">2022-04-25</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiClock className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Duración</p>
                  <p className="font-bold text-black">7 Semanas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiAward className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Modalidad</p>
                  <p className="font-bold text-black">VIRTUAL</p>
                  <p className="text-xs text-gray-500">DIPLOMADO</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiDollarSign className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inversión</p>
                  <p className="font-bold text-black">3 Cuotas de Bs. 800</p>
                  <p className="text-xs text-gray-500">Contado: Bs. 2100</p>
                  <p className="text-xs text-gray-500">Descuentos Corporativos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Descripción del Programa</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Programa especializado que brinda herramientas prácticas para el desarrollo de estrategias de marketing digital, análisis de consumidores online y gestión de comunidades digitales.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Objetivo del Programa</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-800">
              <p className="text-gray-700">
                Proporcionar las herramientas y los conocimientos para desempeñarse en un nivel operativo en el área de marketing virtual, así como desarrollar en el analista de marketing un profesional contratado para cuidar y desarrollar el análisis de las estrategias y de los resultados de marketing dentro de una empresa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Criterios de Admisión</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Fotocopia simple de la Cédula de Identidad",
                "Fotocopia simple del Certificado de Nacimiento",
                "Fotocopia simple del Diploma Académico o Título en Provisión Nacional de Licenciatura en cualquier área",
                "Dos fotografías 4X4, Fondo rojo",
                "Una copia de su Hoja de Vida (CV)"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-blue-50 p-4 rounded-lg"
                >
                  <FiUserCheck className="text-black mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Estructura Curricular</h2>
            
            <div className="space-y-4">
              {[
                {
                  modulo: "Módulo 1",
                  titulo: "Marketing Digital",
                  temas: [
                    "Concepto de Marketing",
                    "Concepto de Negocios",
                    "Historia y evolución del marketing digital",
                    "Ventajas y desventajas del marketing digital"
                  ]
                },
                {
                  modulo: "Módulo 2",
                  titulo: "Análisis del Comportamiento del consumidor on-line",
                  temas: [
                    "Neuromarketing",
                    "El nuevo consumidor",
                    "Factores que influyen en el comportamiento del consumidor on-line/virtual",
                    "Comportamiento de compra y venta",
                    "Proceso de decisión de compra",
                    "Los consumidores y sus entornos sociales y culturales"
                  ]
                },
                {
                  modulo: "Módulo 3",
                  titulo: "Herramientas de Marketing Digital",
                  temas: [
                    "Maneras de recopilar información en la red",
                    "Canales de Feeds",
                    "Facebook - Creación de páginas (Negocio, organización, marca, artista, entretenimiento, comunidad)",
                    "Twitter - Acortadores de URL's (Goog.gl, Bit.ly, Ow.ly)",
                    "Trending",
                    "Clientes para Twitter y Facebook",
                    "Google Alerts",
                    "Google Insights",
                    "Google Trends"
                  ]
                },
                {
                  modulo: "Módulo 4",
                  titulo: "Community Manager",
                  temas: [
                    "Creación y gestión de contenidos",
                    "Análisis y monitoreo de los parámetros estratégicos",
                    "Comunicación",
                    "Planificación de Acciones"
                  ]
                },
                {
                  modulo: "Módulo 5",
                  titulo: "Plan de Marketing Digital",
                  temas: [
                    "Concepto del Plan",
                    "Análisis de la situación",
                    "Presencia online",
                    "Investigación online"
                  ]
                },
                {
                  modulo: "Módulo 6",
                  titulo: "Coaching Digital",
                  temas: [
                    "Funciones",
                    "Empresario Digital",
                    "Manejo de tecnología y innovación digital",
                    "Motivación al trabajo y cliente digital",
                    "Manejo de ecosistemas digitales"
                  ]
                },
                {
                  modulo: "Módulo 7",
                  titulo: "Técnicas de Ventas y Atención al consumidor online",
                  temas: [
                    "Evolución del ventas",
                    "Estrategias y motivación en las ventas",
                    "El nuevo vendedor para el consumidor online/virtual",
                    "Manejo de objeciones",
                    "Manejo de competencias",
                    "Calidad de atención al consumidor online/virtual",
                    "Manejo de quejas y reclamos"
                  ]
                }
              ].map((modulo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-black text-white px-6 py-3">
                    <h3 className="font-bold">{modulo.modulo}: {modulo.titulo}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="grid md:grid-cols-2 gap-2">
                      {modulo.temas.map((tema, i) => (
                        <li key={i} className="flex items-start">
                          <FiBookOpen className="text-black mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{tema}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para dominar el marketing digital?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Inscríbete ahora y conviértete en un experto en estrategias digitales y análisis de mercado
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              ¡Inscríbete Ahora!
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
