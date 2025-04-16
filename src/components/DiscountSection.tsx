'use client'

import { motion } from 'framer-motion'
import Countdown, { CountdownRenderProps } from 'react-countdown'

export default function DiscountSection() {
  const targetDate = new Date('2025-05-30T00:00:00')

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <span>Oferta terminada!</span>
    } else {
      return (
        <div className="flex justify-center space-x-4 text-4xl md:text-7xl">
          <div className="text-center">
            <div className="font-bold">{days}</div>
            <div className=" uppercase text-sm">días</div>
          </div>
          <div className="text-4xl md:text-7xl  flex items-center">:</div>
          <div className="text-center">
            <div className="font-bold">{hours}</div>
            <div className=" uppercase text-sm">horas</div>
          </div>
          <div className="text-4xl md:text-7xl  flex items-center">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-7xl font-bold">{minutes}</div>
            <div className=" uppercase text-sm">minutos</div>
          </div>
          <div className="text-4xl md:text-7xl  flex items-center">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-7xl font-bold">{seconds}</div>
            <div className=" uppercase text-sm">segundos</div>
          </div>
        </div>
      )
    }
  }

  return (
    <section className="relative py-20 bg-[url('/Images/contador.jpg')] bg-cover">
      <div className='bg-white w-full h-full absolute opacity-60 -my-20' />
      <div className="relative z-20 text-black container mx-auto px-4 flex gap-10 flex-wrap items-center justify-around">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Regístrate ahora y obtén un <br /> 30% de descuento!</h2>
          <p className="max-w-3xl mx-auto">
            No esperes más para mejorar tus habilidades y avanzar en tu carrera! Inscríbete en nuestros cursos de marketing hasta el 30 de mayo y obtén un 30% de descuento.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center text-6xl"
        >
          <Countdown 
            date={targetDate}
            renderer={renderer}
          />
        </motion.div>
      </div>
    </section>
  )
}
