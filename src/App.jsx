import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Design from './pages/Design'
import Code from './pages/Code'
import Navbar from './components/Navbar'
import CvButton from './components/CvButton'
import FloatingNav from './components/FloatingNav'
import GridBackground from './components/GridBackground'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <GridBackground />
      <Navbar />
      <FloatingNav />
      <CvButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App