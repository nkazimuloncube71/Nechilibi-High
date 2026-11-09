import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Academics from './Pages/Academics'
import Admissions from './Pages/Admissions'
import Staff from './Pages/Staff'
import News from './Pages/News'
import Gallery from './Pages/Gallery'
import StudentPortal from './Pages/StudentPortal'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
