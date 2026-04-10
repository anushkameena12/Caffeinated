import { BrowserRouter, Route, Routes } from "react-router-dom"

import Shop from "./pages/Shop"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./Navbar"



function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> 
    </BrowserRouter>
    
  )
}

export default App
