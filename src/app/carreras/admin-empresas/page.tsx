"use client"
import Hero2 from '@/components/carreras/Hero2'
import Link from 'next/link'

export default function PageAdmEmpresas(){
  return(
    <>
      <Hero2 titulo="Sé el cambio en el mundo empresarial. Ingeniería Comercial con visión nacional e internacional"/>
      <section className="grid grid-cols-2 bg-dark p-10 mb-16">
         <div className='relative flex justify-center items-center'>
            <img src='/carreras/admin-empresas/img1.png' className='relative z-20 rounded-3xl h-[500px] md:max-w-1/2' />
            <img src='/carreras/admin-empresas/img2.png' className='-ml-22 rounded-3xl h-[570px] md:max-w-1/2' />
         </div>
         <div className='max-w-6xl flex flex-col gap-7 text-white'>
          <h2 className='text-5xl'>ADMINISTRACIÓN DE EMPRESAS</h2>
          <div className="pl-4 border-l-2 border-white flex flex-col gap-7">
            <p className="opacity-70">
              En un mundo empresarial cada vez más dinámico y globalizado, la carrera de Administración de Empresas se posiciona como una de las opciones más estratégicas para quienes buscan liderar organizaciones con visión de futuro.
              <br /><br />
              La Universidad Real de la Cámara Nacional de Comercio ofrece una formación integral que prepara a los estudiantes para enfrentar los desafíos del entorno empresarial actual y contribuir al desarrollo económico y social de la región.
            </p>
            <h3 className="text-3xl text-semibold">Misión y Visión</h3>
            <p className="opacity-70">
              🔹 Misión:<br />
               La carrera de Administración de Empresas en la UReal tiene como misión formar profesionales emprendedores, altamente competitivos y solidarios, capaces de analizar, comprender y transformar la realidad de sus entornos. A través de la investigación continua, la ciencia y la tecnología, los estudiantes adquieren conocimientos y desarrollan capacidades y valores que les permiten enfrentar con disciplina, creatividad y eficiencia los desafíos del siglo XXI .<br />
              🔹 Visión:<br />
               Ser reconocidos como la carrera líder en formación de profesionales en Administración de Empresas en Bolivia, destacándonos por nuestra excelencia académica, innovación pedagógica y compromiso con la responsabilidad social. Aspiramos a que nuestros egresados sean agentes de cambio en el ámbito empresarial, contribuyendo al desarrollo sostenible y al fortalecimiento del tejido empresarial nacional e internacional.
            </p>
            <Link href="/" className='mx-auto bg-white px-10 py-3 text-black font-semibold rounded-3xl hover:scale-110 duration-300'>
              Inscribete
            </Link>
          </div>
         </div>        
      </section>
      <section className='relative text-center px-16 my-16'>
        <h2 className='text-4xl text-primary font-bold'>OBJETIVO GENERAL DE LA CARRERA</h2>
        <p className='max-w-6xl mx-auto'>
          Formar profesionales en Administración de Empresas que apliquen sus conocimientos para analizar e interpretar fenómenos económicos y sociales, permitiéndoles contribuir al desarrollo y competitividad de las organizaciones en un entorno globalizado.
        </p> 
        <div className='flex gap-10 justify-center items-center flex-wrap my-7'>
          <div className='relative rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'>
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Desarrollar habilidades emprendedoras</h3>
            <p className='relative z-10 opacity-80'>Fomentar la capacidad de identificar oportunidades de negocio, gestionar recursos y liderar equipos.
            </p>
          </div>
           <div className='relative rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'>
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Promover la investigación aplicada</h3>
            <p className='relative z-10 opacity-80'>Impulsar la realización de estudios que permitan conocer y comprender las realidades socioeconómicas
            </p>
          </div>
          <div className='relative rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'>
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Fortalecer la toma de decisiones</h3>
            <p className='relative z-10 opacity-80'>Capacitar a los estudiantes en el uso de herramientas y técnicas para la planificación, ejecución y evaluación de proyectos.
            </p>
          </div>        
        </div>     
      </section>
      <section className='text-center my-16'>
        <h2 className='text-4xl font-bold'> Perfil  del Profesional en Administración de Empresas</h2>
        <p className='max-w-6xl mx-auto opacity-80'>
          El profesional en Administración de Empresas está capacitado para gestionar eficientemente los recursos humanos, financieros y materiales de una organización, aplicando principios éticos y estratégicos para alcanzar los objetivos empresariales en un entorno competitivo y globalizado.
        </p> 
        
      </section>
    </>
  )
}
