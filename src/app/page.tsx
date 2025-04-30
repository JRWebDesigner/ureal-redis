import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import CarrouselPlanCont from '../components/CarrouselPlanCont'
import SuccessSection from '../components/SuccessSection'
import WhyChooseUs from '../components/WhyChooseUs'
import CoursesSection from '../components/CoursesSection'
import PlatformsSection from '../components/PlatformsSection'
import AuthoritiesSection from '../components/AuthoritiesSection'
import DiscountSection from '../components/DiscountSection'
import ContactForm from '../components/ContactForm'
import NoticiasCarrusel from '../components/NoticiasCarrusel'
import Testimonials from '../components/Testimonials'
import ContactInfo from '../components/ContactInfo'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <CarrouselPlanCont />
        <SuccessSection />
        <WhyChooseUs />
        <CoursesSection />
        <PlatformsSection />
        <AuthoritiesSection />
        <DiscountSection />
        <NoticiasCarrusel />
        <Testimonials />
        <ContactForm />
        
        <ContactInfo />
      </main>
    </div>
  )
}
