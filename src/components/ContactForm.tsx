'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    carrera: '',
    comentarios: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev}
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    const newErrors: Record<string, string> = {}
    if (!formData.nombre.trim()) newErrors.nombre = 'Este campo no puede estar vacío'
    if (!formData.email.trim()) newErrors.email = 'Este campo no puede estar vacío'
    if (!formData.carrera.trim()) newErrors.carrera = 'Este campo no puede estar vacío'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Submit logic here (e.g., API call)
    console.log('Form submitted:', formData)
    alert('Formulario enviado con éxito!')
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
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
    <motion.div 
      className="mx-auto p-6 bg-white rounded-lg shadow-xl w-[90%] max-w-[1000px] flex justify-center items-center flex-col my-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Déjanos tus datos de contacto</h1>
      
      <form onSubmit={handleSubmit} className='max-w-[700px] w-[90%]'>
        <motion.div variants={itemVariants} className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre completo"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.nombre ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <label htmlFor="celular" className="block text-gray-700 mb-1">Celular</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            placeholder="Escribe tu número de celular"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={formData.celular}
            onChange={handleChange}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escribe tu correo electrónico"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <label htmlFor="carrera" className="block text-gray-700 mb-1">Carrera</label>
          <input
            type="text"
            id="carrera"
            name="carrera"
            placeholder="¿De qué carrera necesitas la información?"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.carrera ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            value={formData.carrera}
            onChange={handleChange}
          />
          {errors.carrera && <p className="text-red-500 text-sm mt-1">{errors.carrera}</p>}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="comentarios" className="block text-gray-700 mb-1">Comentarios</label>
          <textarea
            id="comentarios"
            name="comentarios"
            placeholder="Escribe tus comentarios"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 min-h-[100px]"
            value={formData.comentarios}
            onChange={handleChange}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default ContactForm
