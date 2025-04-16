"use client"

import { MdCampaign } from "react-icons/md"
import { motion } from "framer-motion"
import { useRef } from "react"

const message = "Accede al plan Contado!"

export default function PromoMarquee() {
  const containerRef = useRef(null)
  const items = Array(20).fill(message)

  return (
    <div 
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
  )
}
