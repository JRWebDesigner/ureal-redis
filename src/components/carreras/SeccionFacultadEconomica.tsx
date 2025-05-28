import CardCarrera from './CardCarrera'

export default function SeccionFacultadEconomica(){
  return(
    <section className="container mt-16 mx-auto grid gap-7">
      <h2 className="text-center font-bold text-primary text-5xl">Carreras de la Facultad de <br/>
Ciencias Económicas</h2>
      <h3 className="text-4xl text-center text-primary">Formando líderes con visión estratégica y compromiso empresarial</h3>
      <p className="text-center text-gray-600 text-xl">La Facultad de Ciencias Económicas forma líderes con visión emprendedora, preparados para innovar, gestionar con eficacia y transformar el entorno económico y empresarial del país.</p>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <CardCarrera 
          id="01"
          carrera="Administración de Empresas"
          imagen="admin-empresas"
          descripcion="
Formar administradores con competencias en planificación, gestión y liderazgo organizacional, capaces de responder a los desafíos del entorno empresarial global, y contribuir al fortalecimiento institucional de empresas y organizaciones públicas y privadas en Bolivia."
        />
        <CardCarrera 
          id="02"
          carrera="Administración Financiera"
          imagen="admin-financiera"
          descripcion="
Preparar profesionales con sólidos conocimientos en análisis financiero, inversión, planificación y control económico, orientados a la toma de decisiones estratégicas que impulsen la sostenibilidad financiera del sector empresarial boliviano."
        />
        <CardCarrera 
          id="03"
          carrera="Comercio Internacional"
          imagen="comercio"
          descripcion="
Formar profesionales con visión global y estratégica, capacitados para gestionar operaciones de comercio exterior, logística internacional, zonas francas y tratados comerciales, impulsando la competitividad de empresas bolivianas en los mercados regionales y mundiales."
        />
        
        <CardCarrera 
          id="04"
          carrera="Ingeniería Comercial"
          imagen="ing-comercial"
          descripcion="
Desarrollar líderes con capacidad analítica, tecnológica y estratégica para integrar la ingeniería y la gestión empresarial, promoviendo soluciones innovadoras en procesos comerciales, finanzas y marketing que contribuyan al desarrollo del sector empresarial del país."
        />
        <CardCarrera 
          id="05"
          carrera="Contaduría Publica"
          imagen="contaduria"
          descripcion="
Capacitar contadores públicos expertos en auditoría, tributación, gestión contable y normas financieras, con habilidades tecnológicas y éticas para transparentar la gestión económica de empresas y fortalecer la confianza en el sistema empresarial boliviano."
        />
        <CardCarrera 
          id="06"
          carrera="Mercadotecnia"
          imagen="mercadotecnia"
          descripcion="
Capacitar especialistas en marketing capaces de diseñar, ejecutar y evaluar estrategias comerciales innovadoras, aplicando herramientas digitales y analíticas para posicionar productos y servicios bolivianos en mercados locales e internacionales."
        />
      </div>
    </section>
  )
}
