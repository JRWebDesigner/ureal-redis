import Link from 'next/link'

export default function Hero(){
  return(
    <section className="relative bg-[url(/Images/heroCarreras.jpg)] bg-center h-[46dvh] flex justify-center items-end gap-10 text-white text-sm ">
      <div className='z-0 absolute w-full h-full bg-black/50' />
      <Link href='/' className='relative z-10 rounded-full px-8 py-3 bg-primary mb-16 hover:bg-blue-600 duration-300'>Mas información</Link>
      <Link href='/' className='relative z-10 rounded-full px-8 py-3 bg-white text-gray-500 mb-16 hover:bg-gray-500 hover:text-white duration-300'>Inscríbete !!!</Link>
    </section>
  )
}
