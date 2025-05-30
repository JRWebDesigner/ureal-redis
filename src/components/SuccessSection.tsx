"use client"
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Actualización constante del plan de estudios',
    description: 'Nuestra oferta académica evoluciona junto a los cambios del entorno laboral y tecnológico, asegurando una formación siempre pertinente y competitiva.',
   
  },
  {
    title: 'Formación con visión de futuro',
    description: 'Preparamos a nuestros estudiantes para los desafíos del mañana, integrando innovaciónPreparamos a nuestros estudiantes para los desafíos del mañana, integrando innovación..',

  },
  {
    title: 'Vinculación con el sector empresarial',
    description: 'La universidad mantiene una conexión activa con el sector empresarial.La universidad mantiene una conexión activa con el sector empresarial.',
    
  },
  {
    title: 'Compromiso con la excelencia académica',
    description: 'Fomentamos el desarrollo integral del estudiante con valores éticos.Fomentamos el desarrollo integral del estudiante con valores éticos.',

  },
];

export default function SuccessSection() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
            
      <div className="grid md:grid-cols-2 gap-10">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {/* Top left image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="col-span-2 md:col-span-2"
      >
        <img
          src="/exito1.jpg"
          alt="No te detengas"
          className="rounded-xl w-full h-auto"
        />
      </motion.div>

      {/* Top right image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/exito2.jpg"
          alt="Graduation"
          className="rounded-xl w-full h-auto"
        />
      </motion.div>

      {/* Bottom left image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/exito3.jpg"
          alt="Bienvenid@ a tu historia universitaria"
          className="rounded-xl w-full h-auto"
        />
      </motion.div>

      {/* Bottom right image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/exito4.jpg"
          alt="Paga tus cuotas en segundos"
          className="rounded-xl w-full h-auto"
        />
      </motion.div>
    </div>

        {/* Características */}
        <div className="grid md:grid-cols-1 gap-8">
<motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Construye tu éxito profesional con nosotros
      </motion.h2>
      <p>
           Nuestra propuesta académica de Pregrado está en permanente actualización, alineada a las exigencias del mercado laboral y los avances tecnológicos. Estudia con una formación innovadora, orientada a los desafíos del presente y las oportunidades del futuro
      </p>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2'>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-4 p-4"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>    
    </section>
  );
}

