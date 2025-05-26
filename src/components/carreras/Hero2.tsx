interface Hero2Props{
  titulo:string;
}

export default function Hero2({titulo}:Hero2Props){
  return(
    <section className="relative bg-[url(/Images/heroCarreras.jpg)] bg-center h-[60dvh] flex justify-center items-center gap-10 px-10">
      <div className='z-0 absolute w-full h-full bg-black/50' />
      <h1 className="relative z-20 text-6xl text-secondary font-bold my-4 text-center">{titulo}</h1>
    </section>
  )
}
