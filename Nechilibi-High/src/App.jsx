import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Academics from './Components/Academics'
import Admissions from './Components/Admissions'
import PortalStatus from './Components/PortalStatus'
import NewsEvents from './Components/NewsEvents'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Academics />
        <Admissions />
        <PortalStatus />
        <NewsEvents />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
