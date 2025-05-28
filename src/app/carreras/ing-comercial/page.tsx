
 "use client"
import Hero2 from '@/components/carreras/Hero2'
import Link from 'next/link'
import styles from '../textofondo.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
}

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
}

export default function PageCarrera(){
  const [showModal, setShowModal] = useState(false)
  const [semestreSeleccionado, setSemestreSeleccionado] = useState(0)
  const semestres = [
  {
    nombre: "Primer Semestre",
    materias: [
      { codigo: "ADM100-1", nombre: "Administración" },
      { codigo: "MET100-1", nombre: "Métodos y Técnicas de Estudio" },
      { codigo: "MAT100-1", nombre: "Matemáticas" },
      { codigo: "CON100-1", nombre: "Contabilidad Básica" },
      { codigo: "ECO100-1", nombre: "Principios de Microeconomía" },
      { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
      { codigo: "ENG100-1", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Segundo Semestre",
    materias: [
      { codigo: "ADM101-2", nombre: "Administración II" },
      { codigo: "DER101-2", nombre: "Derecho Comercial y Administrativo" },
      { codigo: "MAT101-2", nombre: "Matemáticas II" },
      { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
      { codigo: "ECO101-2", nombre: "Principios de Macroeconomía" },
      { codigo: "PSI101-2", nombre: "Psicología Organizacional" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "COM101-3", nombre: "Computación para la Administración" },
      { codigo: "CDA101-3", nombre: "Estadística Administrativa" },
      { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
      { codigo: "MER101-3", nombre: "Mercadotecnia I" },
      { codigo: "DRE101-3", nombre: "Desarrollo de Emprendedores" },
      { codigo: "MFI102-3", nombre: "Matemática Financiera" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "RHH101-4", nombre: "Recursos Humanos" },
      { codigo: "AIF104-4", nombre: "Análisis e Interpretación de Estados Financieros" },
      { codigo: "MER102-4", nombre: "Mercadotecnia II" },
      { codigo: "ADV101-4", nombre: "Administración de Ventas" },
      { codigo: "IDM104-4", nombre: "Investigación de Mercados I" },
      { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "DPM101-5", nombre: "Desarrollo de productos" },
      { codigo: "CDA103-5", nombre: "Análisis de Decisiones I" },
      { codigo: "ADC106-5", nombre: "Análisis del Consumidor" },
      { codigo: "MDS105-5", nombre: "Mercadotecnia de Servicios" },
      { codigo: "ADF105-5", nombre: "Administración Financiera" },
      { codigo: "CDA104-5", nombre: "Administración de Operaciones" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "PDV102-6", nombre: "Proceso de Ventas" },
      { codigo: "DPM102-6", nombre: "Sistemas de Investigación de Mercados" },
      { codigo: "CEL102-6", nombre: "Comercio Electronico e-commerce" },
      { codigo: "IDM105-6", nombre: "Investigación de Mercados II" },
      { codigo: "PUB107-6", nombre: "Publicidad I" },
      { codigo: "MER103-6", nombre: "Mercadotecnia III" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "IDM106-7", nombre: "Seminario de Investigación de Mercados" },
      { codigo: "FEP104-7", nombre: "Formulación y Evaluación de Proyectos" },
      { codigo: "PUB108-7", nombre: "Publicidad II" },
      { codigo: "PDV104-7", nombre: "Seminario de Promoción" },
      { codigo: "MDI107-7", nombre: "Marketing Digital" },
      { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
      { codigo: "SDG107-7", nombre: "Seminario de Grado I" }
    ]
  },
  {
    nombre: "Octavo Semestre",
    materias: [
      { codigo: "SDG108-8", nombre: "Seminario de Grado II" },
      { codigo: "PRE108-8", nombre: "Práctica Empresarial" }
    ]
  },
  {
    nombre: "Materias Complementarias",
    materias: [
      { codigo: "INA100", nombre: "Idioma Nativo (Aymara o Quechua)" },
      { codigo: "MER104-7", nombre: "Seminario Avanzado de Mercadotecnia" },
      { codigo: "ECO106", nombre: "Economía Internacional" }
    ]
  }
];
  return(
    <>
      <Hero2 titulo="Sé el cambio en el mundo empresarial. Ingeniería Comercial con visión nacional e internacional."/>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid md:grid-cols-2 bg-dark p-10 mb-16"
      >
         <motion.div 
           variants={slideInFromLeft}
           className='relative flex justify-center items-center mb-5'
         >
            <motion.img 
              src='/carreras/comercio/img1.png' 
              className='relative z-20 rounded-3xl h-[400px] md:h-[500px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
            <motion.img 
              src='/carreras/comercio/img2.png' 
              className='-ml-22 rounded-3xl h-[470px] md:h-[570px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
         </motion.div>
         <motion.div 
           variants={slideInFromRight}
           className='max-w-6xl flex flex-col gap-7 text-white'
         >
          <motion.h2 
            className='text-4xl md:text-5xl'
            variants={itemVariants}
          >
            INGENIERÍA COMERCIAL
          </motion.h2>
          <motion.div 
            className="pl-4 border-l-2 border-white flex flex-col gap-7"
            variants={containerVariants}
          >
            <motion.p 
              className="opacity-70"
              variants={itemVariants}
            >
              Una  buena opción  para estudiar Ingeniería Comercial es que te prepara para convertir ideas en negocios reales, combinando visión estratégica, liderazgo y habilidades financieras. Esta carrera te da las herramientas para crear, dirigir y transformar empresas, tanto a nivel nacional como internacional.
<br /><br />
Y si estudias en la Universidad Real con el respaldo de la Cámara Nacional de Comercio, tiene contacto directo con el sector empresarial desde el primer día, lo que aumenta tus oportunidades laborales y tu impacto profesional.
            </motion.p>
            <motion.h3 
              className="text-3xl text-semibold"
              variants={itemVariants}
            >
              Misión y Visión
            </motion.h3>
            <motion.p 
              className="opacity-70"
              variants={itemVariants}
            >
              🔹 Misión:<br />
               Formar profesionales en Ingeniería Comercial con visión estratégica, liderazgo y habilidades financieras, capaces de crear, dirigir y transformar empresas en entornos nacionales e internacionales. Nuestra formación se basa en la práctica real del mundo empresarial, gracias a la vinculación directa con la Cámara Nacional de Comercio y el sector productivo.<br />
              🔹 Visión:<br />
               Ser una carrera líder a nivel nacional en la formación de ingenieros comerciales innovadores, reconocidos por su impacto en la transformación empresarial, su compromiso con el desarrollo económico sostenible y su conexión permanente con el ecosistema empresarial boliviano e internaciona.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="https://wa.link/51zpya" className='mx-auto bg-white px-10 py-3 text-black font-semibold rounded-3xl hover:scale-110 duration-300'>
                Inscribete
              </Link>
            </motion.div>
          </motion.div>
         </motion.div>        
      </motion.section>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='relative text-center px-16 my-16'
      >
        <motion.h2 
          className='text-4xl text-primary font-bold'
          variants={itemVariants}
        >
          OBJETIVO GENERAL DE LA CARRERA
        </motion.h2>
        <motion.p 
          className='max-w-6xl mx-auto'
          variants={itemVariants}
        >
         Formamos profesionales con visión global, listos para conquistar mercados internacionales. Aprenderás a negociar, gestionar exportaciones, dominar leyes y tecnología, ¡todo con actitud emprendedora y compromiso con el desarrollo del país!
        </motion.p> 
        <motion.div 
          className='flex gap-10 justify-center items-center flex-wrap my-7'
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/comercio/img4.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Conocimiento del Mercado Global</h3>
            <p className='relative z-10 opacity-80'>Comprende las tendencias y necesidades del mercado comercial externo, lo que le permite identificar oportunidades y desafíos en el ámbito internacional.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/comercio/img5.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Dominio de Trámites y Logística</h3>
            <p className='relative z-10 opacity-80'>Domina aduanas, transporte global y tesorería para que el comercio entre países fluya sin fronteras.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/comercio/img7.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Gestión del Comercio Electrónico</h3>
            <p className='relative z-10 opacity-80'>Impulsa el e-commerce global con estrategias innovadoras que llevan productos al mundo
            </p>
          </motion.div>        
        </motion.div>     
      </motion.section>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='my-16 px-7'
      >
        <motion.h2 
          className='text-4xl font-bold text-center'
          variants={itemVariants}
        >
          Perfil del Profesional en Comercio Internacional
        </motion.h2>
        <motion.p 
          className='max-w-6xl mx-auto opacity-80 text-center'
          variants={itemVariants}
        >
          El egresado de Comercio Internacional de la universidad  está preparado para gestionar estrategias comerciales globales, dirigir empresas y promover el desarrollo sostenible con un enfoque ético y proactivo.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 text-[#1d1d1b]"
          variants={containerVariants}
        >
          <motion.div 
            className="p-8"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Visión Global y Conocimiento Estratégico</h3>
              <p className="text-sm mt-2">
                El egresado comprende a fondo la realidad social, económica y jurídica del entorno internacional, lo que le permite analizar fenómenos globales y diseñar estrategias de comercio exterior competitivas y sostenibles. Domina las teorías del comercio y relaciones internacionales, aplicándolas de manera efectiva en escenarios complejos y cambiantes.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-t-0 md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Promotor de la Internacionalización Empresarial
</h3>
              <p className="text-sm mt-2">
                Actúa como asesor clave en procesos de exportación e importación, identificando oportunidades en mercados diversos. Evalúa y formula proyectos de internacionalización con enfoque innovador, adaptándose a los diferentes entornos comerciales y culturales.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Habilidades Directivas y de Gestión Empresarial</h3>
              <p className="text-sm mt-2">
                Está capacitado para liderar, gestionar y controlar empresas y proyectos vinculados al comercio internacional. Posee competencias en dirección estratégica, planificación operativa y toma de decisiones que potencian la eficiencia de las operaciones internacionales
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Ética Profesional y Sensibilidad Intercultural</h3>
              <p className="text-sm mt-2">
                Demuestra un fuerte compromiso ético y social, con una actitud proactiva frente a los desafíos del comercio global. Su sensibilidad intercultural le permite establecer relaciones comerciales sólidas y exitosas, reconociendo y respetando las particularidades culturales y económicas de los distintos bloques internacionales.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-dark text-white py-12 px-4 md:px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <motion.div variants={itemVariants}>
            <motion.img 
              src="/carreras/comercio/icono1.png" 
              alt="Ícono prácticas" 
              className="mx-auto mb-4 w-12 h-12"
              whileHover={{ rotate: 10 }}
            />
            <h3 className="text-lg font-bold mb-2">Prácticas y Experiencia Laboral</h3>
            <p className="text-sm mb-4">
              La inclusión de la Práctica Empresarial en el plan curricular posibilita que los estudiantes se inserten en entornos reales de comercio internacional, aplicando lo aprendido en situaciones concretas
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowModal(true)} 
            className="cursor-pointer"
          >
            <motion.img 
              src="/carreras/comercio/icono2.png" 
              alt="Ícono plan" 
              className="mx-auto mb-4 w-12 h-12"
              whileHover={{ rotate: 10 }}
            />
            <h3 className="text-lg font-bold mb-2">Plan de estudios y Menciones</h3>
            <p className="text-sm mb-4">
              Animated videos may be one of the keys to the success of your business. Our top-ranked cartoonist
              will deliver high-quality services at an affordable price. We also offer animation solutions like 2D
              animation and 3D modeling.
            </p>
          </motion.div>
          {/* Modal de Plan de estudios */}
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[80dvh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-primary"
                >
                  Plan de estudios
                </motion.h2>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Selector de Semestres */}
                <motion.div 
                  className="flex overflow-x-auto px-4 py-2 bg-blue-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {semestres.map((semestre, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSemestreSeleccionado(index)}
                      className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap transition-colors ${
                        semestreSeleccionado === index
                          ? 'bg-blue-600 text-white font-medium'
                          : 'bg-white text-black hover:bg-blue-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {semestre.nombre.split(' ')[0]} {semestre.nombre.split(' ')[1]}
                    </motion.button>
                  ))}
                </motion.div>
                
                {/* Contenido del Semestre Seleccionado */}
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-blue-800 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {semestres[semestreSeleccionado].nombre}
                  </motion.h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {semestres[semestreSeleccionado].materias.map((materia, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-blue-50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="font-mono text-sm text-primary">{materia.codigo}</span>
                        <p className="text-black font-medium">{materia.nombre}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
          <motion.div 
            variants={itemVariants}
            
          >
            <motion.img 
              src="/carreras/comercio/icono3.png" 
              alt="Ícono malla" 
              className="mx-auto mb-4 w-12 h-12"
              whileHover={{ rotate: 10 }}
            />
            <h3 className="text-lg font-bold mb-2">Malla Curricular</h3>
            <p className="text-sm mb-4">
              Professional photography services for your website and marketing use. Our creative artists will
              produce incredible authentic images so you can present your business in the best light. The service
              includes photo editing.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='my-16 px-7'
      >
        <motion.h2 
          className='text-4xl font-bold text-center mb-8'
          variants={itemVariants}
        >
          Domina tu futuro con Finanzas
        </motion.h2>
        <motion.div 
          className='flex justify-center items-center flex-wrap gap-10 px-16'
          variants={containerVariants}
        >
          <motion.img 
            src='/carreras/comercio/img3.jpg' 
            className='rounded-3xl w-[80%] h-[330px] md:w-[670px] md:h-[670px] object-cover'
            variants={slideInFromLeft}
            whileHover={{ scale: 1.02 }}
          />
          <motion.div 
            className='flex justify-around md:grid grid-cols-2 grid-rows-2 items-center gap-10 flex-wrap'
            variants={containerVariants}
          >
            {['/carreras/comercio/img4.jpg', '/carreras/comercio/img5.jpg', '/carreras/comercio/img6.jpg', '/carreras/comercio/img7.jpg'].map((img, index) => (
              <motion.img 
                key={index}
                src={img}
                className='rounded-3xl min-w-[90%] max-w-[300px] h-[300px] object-cover'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
      
      <motion.section
        initial="hidden"
        className='px-10 max-w-6xl mx-auto mb-7'
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2 
          className={`${styles.textoConImagen} text-5xl md:text-8xl text-center`}
          variants={itemVariants}
        >
          VISITAS
        </motion.h2>
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-10"
          variants={containerVariants}
        >
          <motion.div 
            className="text-primary font-bold text-2xl leading-tight w-full md:w-1/3"
            variants={slideInFromLeft}
          >
            Explora el Comercio Internacional en Terreno Real
          </motion.div>
          <motion.div 
            className="text-[#555] w-full md:w-2/3 space-y-2 border-t-4 md:border-t-0 md:border-l-4 border-primary pl-4"
            variants={slideInFromRight}
          >
            <p>
              ¡En la carrera de Comercio Internacional de la Universidad Real de la Cámara Nacional de Comercio, no solo estudias el mundo... lo vives!
            </p>
            <br />
            <p>
              Nuestros estudiantes cruzan fronteras y se embarcan en viajes académicos internacionales a países como Chile y Perú, donde visitan puertos estratégicos como el de Arica, zonas francas, centros logísticos y aduanas. Ahí, todo lo aprendido en clases cobra vida.
            </p>
            <br />
            <p>
              Suben a buques de carga, analizan procesos reales de exportación e importación, interactúan con operadores logísticos y entienden cómo se mueve la economía global desde el terreno.
            </p>
            <br />
            <p>
              Pero no es solo teoría: estos viajes son una aventura profesional y cultural, donde cada paso fortalece su perfil internacional y los conecta con el ritmo dinámico del comercio exterior.
            </p>
            <br />
            <p>
              Vive la experiencia. Aprende con acción. Conviértete en un verdadero profesional del comercio internacional.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <section className='h-[40dvh] flex justify-center items-center bg-dark text-white flex-col'>
        <h2 className='text-3xl font-bold mb-6'>Recibe noticias y actualizaciones</h2>
        <form className='flex justify-center items-center'>
            <input type='email' className='bg-white rounded-full w-[80%] max-w-[1000px] text-black h-[80px] pr-10 pl-16' placeholder='Ingreas tu email' />
            <button type='submit' className="bg-primary px-8 h-[85px] rounded-full font-bold -ml-14">Suscribete</button>
        </form>
      </section>
    </>
  )
}
