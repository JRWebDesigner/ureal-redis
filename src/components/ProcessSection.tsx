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
                   <div className="flex justify-center items-center gap-8 flex-wrap">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`w-[300px] p-5 ${index === 1 ? 'border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2 border-black': ''}`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-gray">{step.description}</p>
                </div> 
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
