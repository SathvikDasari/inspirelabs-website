import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Partners from './pages/Partners'
import GetInvolved from './pages/GetInvolved'
import OurWork from './pages/OurWork'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/our-work" element={<OurWork />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

