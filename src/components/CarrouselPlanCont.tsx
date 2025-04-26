"use client"
import Link from "next/link"
import { MdCampaign } from "react-icons/md"
import { motion } from "framer-motion"
import { useRef } from "react"

const message = "Inscríbete al programa de PRODUCCIÓN MUSICAL y MUSIC BUSINESS "

export default function PromoMarquee() {
  const containerRef = useRef(null)
  const items = Array(20).fill(message)

  return (
    <>
    <div id='#formacion'  
      ref={containerRef}
      className="w-full bg-white text-black py-3 overflow-hidden border-y border-gray-200"
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: ['0%', '-100%']
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-2 text-xl font-semibold px-4 shrink-0">
            <MdCampaign className="w-6 h-6 text-primary fill-primary" />
            {text}
          </div>
        ))}
      </motion.div>
    </div>
    <div className='relative flex justify-center items-center w-full py-22 bg-[url(/Images/hero.jpg)] bg-cover bg-start'>
    <div className='absolute w-full h-full bg-black opacity-30' />
      <Link href='/' className='relative z-20 bg-white text-sm text-gray-500 rounded-3xl shadow-xl py-4 px-9 hover:text-white hover:bg-gray-400 duration-200'>tu Universidad</Link>
      
    </div>
    </>
  )
}
