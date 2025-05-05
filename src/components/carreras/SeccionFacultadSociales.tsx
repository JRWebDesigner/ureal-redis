import CardCarrera from './CardCarrera'

export default function SeccionFacultadSociales(){
  return(
    <section className="container mt-16 mx-auto grid gap-7">
      <h2 className="text-center font-bold text-primary text-5xl">Carreras de la Facultad de <br/> Ciencias Sociales, Jurídicas y Humanidades</h2>
      <h3 className="text-4xl text-center text-primary"> Comprometidos con la justicia, el pensamiento crítico y el desarrollo humano</h3>
      <p className="text-center text-gray-600 text-xl">La Facultad de Ciencias Sociales, Jurídicas y Humanidades forma profesionales éticos y comprometidos, con pensamiento crítico y vocación para transformar la sociedad desde lo jurídico, social y humanístico.</p>
      <div className="flex flex-wrap justify-around items-center gap-10">
        <CardCarrera 
          id="07"
          carrera="Derecho"
          imagen="derecho"
          descripcion="Formar abogados íntegros, con enfoque empresarial y dominio del marco jurídico nacional e internacional, preparados para asesorar legalmente a empresas, instituciones y emprendedores, promoviendo la legalidad, la ética y la justicia en el ámbito comercial y civil."
        />
        <CardCarrera 
          id="08"
          carrera="Comunicación Audiovisual"
          imagen="comunicacion"
          descripcion="
Formar comunicadores visuales con enfoque creativo y técnico, capaces de producir contenidos multimedia de alto impacto, que fortalezcan la identidad corporativa, el marketing digital y la comunicación estratégica de empresas e instituciones."
        />
        <CardCarrera 
          id="09"
          carrera="Administración Turística y Hotelería"
          imagen="turistica"
          descripcion="Desarrollar profesionales competentes para gestionar empresas turísticas y hoteleras con visión sostenible e innovadora, promoviendo el turismo como motor económico y cultural, en línea con las demandas del mercado nacional e internacional.
"
        />
      </div>
    </section>
  )
}
