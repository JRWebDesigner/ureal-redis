'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const ContactInfo = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div id='#servicios' className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-12"
        >
          <motion.h1 variants={item} className="text-5xl font-bold text-gray-900 mb-2">
            Pongámonos en contacto
          </motion.h1>
          <motion.div variants={item} className="w-20 h-1 bg-blue-600 mx-auto"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacto */}
          <motion.div variants={item} className="bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-primary">Contactos</h2>
            </div>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2 text-blue-500" />
                <a href="mailto:info@ureal.edu.bo" className="hover:text-blue-600 transition-colors">
                  info@ureal.edu.bo
                </a>
              </p>
              <p className="flex items-center text-gray-600">
                <FaPhoneAlt className="mr-2 text-blue-500" />
                <a href="tel:+58411224060" className="hover:text-blue-600 transition-colors">
                  +58411224060
                </a>
              </p>
            </div>
          </motion.div>

          {/* Dirección */}
          <motion.div variants={item} className="bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-primary">Dirección</h2>
            </div>
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2 text-blue-500 flex-shrink-0" />
              <p>
                Calle Capitan Ravelo N° 2329<br />
                La Paz, Bolivia
              </p>
            </div>
          </motion.div>

          {/* Horario */}
          <motion.div variants={item} className="bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaClock className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-primary">Horario de Atención</h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <FaClock className="mr-2 text-blue-500" />
                09:00 - 13:00
              </p>
              <p className="flex items-center">
                <FaClock className="mr-2 text-blue-500" />
                15:00 - 19:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
