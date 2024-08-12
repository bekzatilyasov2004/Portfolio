import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import AllProject from "./components/AllProject"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="hero" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        <Route path="all-project" element={<AllProject />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
