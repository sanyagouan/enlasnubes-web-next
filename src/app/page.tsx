import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CloudDivider from '@/components/CloudDivider'
import About from '@/components/About'
import Specialties from '@/components/Specialties'
import MenuDelDia from '@/components/MenuDelDia'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CloudDivider variant="dark-to-light" />
        <About />
        <CloudDivider variant="light-to-dark" />
        <Specialties />
        <MenuDelDia />
        <CloudDivider variant="dark-to-light" />
        <Menu />
        <CloudDivider variant="light-to-dark" />
        <Gallery />
        <CloudDivider variant="dark-to-light" />
        <Reviews />
        <CloudDivider variant="dark-to-dark" />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
