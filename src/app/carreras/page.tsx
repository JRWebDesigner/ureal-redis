import Hero from '@/components/carreras/Hero' 
import SeccionFacultadEconomica from '@/components/carreras/SeccionFacultadEconomica'
import SeccionFacultadSociales from '@/components/carreras/SeccionFacultadSociales'
import SeccionFacultadTecnologica from '@/components/carreras/SeccionFacultadTecnologica'

export default function CarrerasPage(){
  return(
    <>
    <Hero />
    <SeccionFacultadEconomica />
    <SeccionFacultadSociales />
    <SeccionFacultadTecnologica />
    </>
  )
}
