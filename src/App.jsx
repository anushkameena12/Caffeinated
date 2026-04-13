import { BrowserRouter, Route, Routes } from "react-router-dom"

import Shop from "./pages/Shop"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./Navbar"
import Blog from "./pages/Blog"
import Location from "./pages/Location"
import Order from "./pages/Order"



function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/order" element={<Order />} />
    </Routes> 
    </BrowserRouter>
    
  )
}


export default App
