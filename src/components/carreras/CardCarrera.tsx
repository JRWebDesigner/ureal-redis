"use client"
<<<<<<< HEAD
=======
import Link from 'next/link'
>>>>>>> fa6828f (carreras)
import { motion } from "framer-motion";

interface CardCarreraProps {
  id: string;
  carrera: string;
  imagen: string;
  descripcion: string;
}

export default function CardCarrera({ id, carrera, imagen, descripcion }: CardCarreraProps) {
  return(
<<<<<<< HEAD
=======
    <Link href={`/carreras/${imagen}`}>
>>>>>>> fa6828f (carreras)
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl shadow-2xl w-[340px] h-[610px] grid"
    >
      <div className="rounded-t-3xl relative bg-cover w-full h-[340px]"
        style={{ backgroundImage: `url(/Images/${imagen}.jpg)` }}>
        <span className="absolute bg-blue-600 px-5 py-3 rounded-2xl top-4 -left-4 text-white text-xl font-bold">{carrera}</span>
        <span className="absolute bottom-3 left-3 text-7xl text-white font-bold">{id}</span>
      </div>
      <div className="p-5 text-center text-gray-700 text-[1rem]">
<<<<<<< HEAD
        <p>
=======
        <p className='font-semibold'>
>>>>>>> fa6828f (carreras)
          {carrera} 
          <br/>
          {descripcion}
        </p>
      </div>
    </motion.div>
<<<<<<< HEAD
=======
    </Link>
>>>>>>> fa6828f (carreras)
  )
}

