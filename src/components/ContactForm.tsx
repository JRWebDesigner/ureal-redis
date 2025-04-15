'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string;
  email: string;
  phone: string;
  career: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Lógica para enviar el formulario
  }

  return (
    <section id="inscripcion" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-primary p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Déjanos tus datos de contacto</h2>
              <p className="mb-8">
                Completa el formulario y nos pondremos en contacto contigo para brindarte más información.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    {/* Icono */}
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>info@ureal.edu.bo</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    {/* Icono */}
                  </div>
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p>+58411224060</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nombre completo</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Este campo es obligatorio" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Este campo es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$i,
                        message: "Email inválido"
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Celular</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: "Este campo es obligatorio" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="career" className="block text-gray-700 mb-2">Carrera de interés</label>
                  <input
                    id="career"
                    type="text"
                    {...register("career", { required: "Este campo es obligatorio" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.career && <p className="text-red-500 text-sm mt-1">{errors.career.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Comentarios</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-b from-secondary to-primary text-white py-3 rounded-lg font-bold hover:bg-primary transition-all"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
