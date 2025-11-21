import Header from "./components/header"
import Footer from "./components/footer"
import About from "./pages/about"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Experience from "./pages/experience"


function App() {
  return(
    <div className="overflow-x-hidden w-full max-w-full">
      <Header />  
        <div id="home" className="overflow-x-hidden"><Home /></div>
        <div id="about" className="overflow-x-hidden"><About /></div>
        <div id="experience" className="overflow-x-hidden"><Experience /></div>
        <div id="projects" className="overflow-x-hidden"><Projects /></div>
        <div id="contact" className="overflow-x-hidden"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
