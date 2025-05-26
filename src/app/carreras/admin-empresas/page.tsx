"use client"
import Hero2 from '@/components/carreras/Hero2'
import Link from 'next/link'
import Image from 'next/image'

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
      <section className='my-16'>
        <h2 className='text-4xl font-bold text-center'> Perfil  del Profesional en Administración de Empresas</h2>
        <p className='max-w-6xl mx-auto opacity-80 text-center'>
          El profesional en Administración de Empresas está capacitado para gestionar eficientemente los recursos humanos, financieros y materiales de una organización, aplicando principios éticos y estratégicos para alcanzar los objetivos empresariales en un entorno competitivo y globalizado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 text-[#1d1d1b]">
      <div className="p-8">
        <div className="border-l-2 border-primary pl-4">
          <h3 className="font-bold text-lg">Planificación y Dirección Estratégica</h3>
          <p className="text-sm mt-2">
            Diseña y ejecuta planes estratégicos que alinean los objetivos organizacionales
            con las oportunidades del mercado, asegurando el crecimiento y sostenibilidad de la empresa.
          </p>
        </div>
      </div>
      <div className="p-8 border-t md:border-t-0 md:border-l border-[#e0e0e0] bg-[#fffaf7]">
        <div className="border-l-2 border-primary pl-4">
          <h3 className="font-bold text-lg">Gestión Financiera y Administrativa</h3>
          <p className="text-sm mt-2">
            Administra los recursos financieros mediante la elaboración de presupuestos,
            análisis de costos y evaluación de inversiones, optimizando la rentabilidad y eficiencia operativa.
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="border-l-2 border-primary pl-4">
          <h3 className="font-bold text-lg">Liderazgo y Gestión del Talento Humano</h3>
          <p className="text-sm mt-2">
            Desarrolla habilidades de liderazgo para motivar equipos, gestionar el talento humano
            y fomentar un ambiente laboral productivo y ético.
          </p>
        </div>
      </div>
      <div className="p-8 border-t md:border-l border-[#e0e0e0] bg-[#fffaf7]">
        <div className="border-l-2 border-primary pl-4">
          <h3 className="font-bold text-lg">Innovación y Adaptabilidad Organizacional</h3>
          <p className="text-sm mt-2">
            Implementa procesos innovadores y se adapta a los cambios del entorno empresarial,
            promoviendo la mejora continua y la competitividad de la organización.
          </p>
        </div>
      </div>
    </div>
      </section>
          <div className="bg-dark text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <img src="/ruta/icono3.png" alt="Ícono prácticas" className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-lg font-bold mb-2">Prácticas y Experiencia Laboral</h3>
          <p className="text-sm mb-4">
            La inclusión de la Práctica Empresarial en el plan curricular posibilita que los estudiantes
            se inserten en entornos reales de comercio internacional, aplicando lo aprendido en situaciones concretas
          </p>
          <a href="#" className="text-blue-400 hover:underline inline-flex items-center gap-1">
            Learn more <span className="text-sm">➔</span>
          </a>
        </div>
        <div>
          {/* Cambia esta ruta al PNG correspondiente */}
          <img src="/ruta/icono2.png" alt="Ícono plan" className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-lg font-bold mb-2">Plan de estudios y Menciones</h3>
          <p className="text-sm mb-4">
            Animated videos may be one of the keys to the success of your business. Our top-ranked cartoonist
            will deliver high-quality services at an affordable price. We also offer animation solutions like 2D
            animation and 3D modeling.
          </p>
          <a href="#" className="text-blue-400 hover:underline inline-flex items-center gap-1">
            Learn more <span className="text-sm">➔</span>
          </a>
        </div>
        <div>
          {/* Cambia esta ruta al PNG correspondiente */}
          <img src="/ruta/icono3.png" alt="Ícono malla" className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-lg font-bold mb-2">Malla Curricular</h3>
          <p className="text-sm mb-4">
            Professional photography services for your website and marketing use. Our creative artists will
            produce incredible authentic images so you can present your business in the best light. The service
            includes photo editing.
          </p>
          <a href="#" className="text-blue-400 hover:underline inline-flex items-center gap-1">
            Learn more <span className="text-sm">➔</span>
          </a>
        </div>
      </div>
    </div>
    <section className='my-16'>
      <h2 className='text-4xl font-bold text-center'>Internacionalízate: Actividades para Conectar y Crecer</h2>
      <div className='flex justify-center items-center gap-10'>
        <img src='/carreras/admin-empresas/img3.jpg' className='rounded-3xl max-w-[300px]' />
        <img src='/carreras/admin-empresas/img4.jpg' className='rounded-3xl max-w-[300px]' />
        <img src='/carreras/admin-empresas/img5.jpg' className='rounded-3xl max-w-[300px]' />
        <img src='/carreras/admin-empresas/img6.jpg' className='rounded-3xl max-w-[300px]' />
      </div>
    </section>
    </>
  )
}
