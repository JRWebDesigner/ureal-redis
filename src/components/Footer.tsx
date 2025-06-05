'use client'


import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 flex justify-center items-center flex-col">
      <section className=' flex justify-center items-center bg-dark text-white flex-col'>
          <h2 className='text-3xl font-bold mb-6'>Recibe noticias y actualizaciones</h2>
          <form className='flex justify-center items-center'>
              <input type='email' className='bg-white rounded-full w-[80%] max-w-[1000px] text-black h-[80px] pr-10 pl-16' placeholder='Ingreas tu email' />
              <button type='submit' className="bg-primary px-8 h-[85px] rounded-full font-bold -ml-14">Suscribete</button>
          </form>
        </section>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-wrap gap-12 mx-auto mt-7 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
           <div className="flex space-x-4">
                    {[
            { icon: <FaFacebook size={20} />, color: 'text-white', link:'https://www.facebook.com/univreal' },
            { icon: <FaInstagram size={20} />, color: 'text-white', link:'https://instagram.com/univreal?utm_medium=copy_link' },
            { icon: <FaTwitter size={20} />, color: 'text-white', link:'https://twitter.com/UnivReal?s=08' },
            { icon: <FaYoutube size={20} />, color: 'text-white', link:'https://www.youtube.com/c/universidadreal/videos' },
            { icon: <FaTiktok size={20} />, color: 'text-white', link:'https://www.tiktok.com/@univreal' }
          ].map((social, index) => (
            <Link 
              key={index} 
              href={social.link}
              target='blank' 
              className={`w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-all ${social.color}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
          </motion.div>
  </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-10 border-t border-white/10 text-center text-white/60 text-sm"
        >
          <p>© {new Date().getFullYear()} Universidad Real de la Cámara Nacional de Comercio. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
