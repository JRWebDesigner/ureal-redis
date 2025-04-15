'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: "Registro",
    description: "Comienza enviando tu solicitud para el curso de marketing de tu elección. Una vez que recibamos tu solicitud, nuestro equipo la revisará cuidadosamente y se comunicará contigo."
  },
  {
    title: "Inscripción",
    description: "Si eres preseleccionado, te notificaremos de inmediato. Luego te invitaremos a una entrevista para discutir tus objetivos y cómo el curso se alinea con ellos."
  },
  {
    title: "Confirmación",
    description: "Después de la entrevista, si ambas partes consideran que el curso es adecuado, confirmaremos tu inscripción. Recibirás todos los detalles necesarios, incluida la fecha de inicio del curso."
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Proceso de Inscripción</h2>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12`}
              >
                {/* Punto en la línea de tiempo */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-gray">{step.description}</p>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} mt-6 lg:mt-0`}>
                  <div className="inline-block bg-light p-6 rounded-lg shadow-sm">
                    <div className="text-5xl font-bold text-primary mb-2">0{index + 1}</div>
                    <div className="w-16 h-1 bg-primary mx-auto lg:mx-0"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
