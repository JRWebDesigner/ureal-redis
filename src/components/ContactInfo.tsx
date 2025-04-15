'use client'

import { motion } from 'framer-motion'

const contactInfo = [
  {
    title: "Contactos",
    icon: "/icons/contact.svg",
    items: [
      { text: "info@ureal.edu.bo", link: "mailto:info@ureal.edu.bo" },
      { text: "+58411224060", link: "tel:+58411224060" }
    ]
  },
  {
    title: "Dirección",
    icon: "/icons/location.svg",
    items: [
      { text: "Calle Capitan Ravelo Nº 2329" },
      { text: "La Paz, Bolivia" }
    ]
  },
  {
    title: "Horario de Atención",
    icon: "/icons/clock.svg",
    items: [
      { text: "09:00 - 13:00" },
      { text: "15:00 - 19:00" }
    ]
  }
]

export default function ContactInfo() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Pongámonos en contacto</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={info.icon} alt={info.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-6">{info.title}</h3>
              <div className="space-y-2">
                {info.items.map((item, i) => (
                  <div key={i}>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray hover:text-primary transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-gray">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
