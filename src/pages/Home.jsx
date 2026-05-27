import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main className="bg-[#0a0a0a]">
      <Hero />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  )
}

export default Home