/*
import Botones from '../components/Botones'
import PregradoSeccion from '../components/PregradoSeccion'
import PostgradoSeccion from '../components/PostgradoSeccion'
import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
import Bienvenida from '../components/Bienvenida'
import PregradoCarrusel from '../components/Pregrado/PregradoCarrusel'
import Elegirnos from '../components/Elegirnos'
import Oportunidad from '../components/Oportunidad'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Bienvenida />
        <PregradoSeccion />
        <PregradoCarrusel />
      </Container>
      <Oportunidad />
      <Container>
        <Botones />
        <Elegirnos /> 
        <CTA />
        <PostgradoSeccion />
      </Container>
    </>
  );
}
*/
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import CarrouselPlanCont from '../components/CarrouselPlanCont'
import WhyChooseUs from '../components/WhyChooseUs'
import CoursesSection from '../components/CoursesSection'
import AuthoritiesSection from '../components/AuthoritiesSection'
import PlatformsSection from '../components/PlatformsSection'
import ProcessSection from '../components/ProcessSection'
import DiscountSection from '../components/DiscountSection'
import Testimonials from '../components/Testimonials'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <CarrouselPlanCont />
        <WhyChooseUs />
        <CoursesSection />
        <AuthoritiesSection />
        <PlatformsSection />
        <ProcessSection />
        <DiscountSection />

        <Testimonials />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
