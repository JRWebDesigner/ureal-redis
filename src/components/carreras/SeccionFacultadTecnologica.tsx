import CardCarrera from './CardCarrera'

export default function SeccionFacultadTecnologica(){
  return(
    <section className="container mt-16 mx-auto grid gap-7 mb-22">
      <h2 className="text-center font-bold text-primary text-5xl">Carreras de la Faculta de Ciencias <br/>  Exactas y Tecnologías</h2>
      <h3 className="text-4xl text-center text-primary">Explora tu futuro en la Facultad de Ciencias Exactas y Tecnología</h3>
      <p className="text-center text-gray-600 text-xl">Nuestras carreras combinan una sólida base teórica con un enfoque práctico, preparando a los estudiantes para enfrentar los desafíos del mundo moderno con creatividad, precisión y visión de futuro.
      </p>
      <div className="flex flex-wrap justify-around items-center gap-10">
        <CardCarrera 
          id="10"
          carrera="Ingeniería de Sistemas de Computación Administrativa"
          imagen="sistemas"
          descripcion="Formar ingenieros capaces de diseñar, implementar y gestionar soluciones tecnológicas innovadoras, que optimicen los procesos organizacionales y potencien la transformación digital del sector empresarial y productivo de Bolivia."
        />

      </div>
    </section>
  )
}
