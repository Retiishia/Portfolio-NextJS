import Hero from '@/components/Hero'
import About from '@/components/About'
import VerticalTimeline  from '@/components/Experience'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import HireMeCard from '@/components/HireMe'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <VerticalTimeline/>
      <Project/>
      <Contact/>
      <HireMeCard/>
      <Footer/>
    </>
  )
}