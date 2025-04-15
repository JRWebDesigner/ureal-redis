'use client'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown'

export default function DiscountSection() {
  const targetDate = new Date('2025-05-30T00:00:00')

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Oferta terminada!</span>
    } else {
      return (
        <div className="flex justify-center space-x-4">
          <div className="text-center">
            <div className="text-5xl font-bold text-white">{days}</div>
            <div className="text-white uppercase text-sm">días</div>
          </div>
          <div className="text-4xl text-white flex items-center">:</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white">{hours}</div>
            <div className="text-white uppercase text-sm">horas</div>
          </div>
          <div className="text-4xl text-white flex items-center">:</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white">{minutes}</div>
            <div className="text-white uppercase text-sm">minutos</div>
          </div>
          <div className="text-4xl text-white flex items-center">:</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white">{seconds}</div>
            <div className="text-white uppercase text-sm">segundos</div>
          </div>
        </div>
      )
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Regístrate ahora y obtén un 30% de descuento!</h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            No esperes más para mejorar tus habilidades y avanzar en tu carrera! Inscríbete en nuestros cursos de marketing hasta el 30 de mayo y obtén un 30% de descuento.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Countdown 
            date={targetDate}
            renderer={renderer}
          />
        </motion.div>

        <div className="text-center mt-12">
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-light transition-all">
            Aprovecha la Oferta
          </button>
        </div>
      </div>
    </section>
  )
}
