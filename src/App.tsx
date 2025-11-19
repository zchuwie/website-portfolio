import Header from "./components/header"
import Footer from "./components/footer"
import About from "./pages/about"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Experience from "./pages/experience"


function App() {
  return(
    <>
      <Header />  
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      <Footer />
    </>
  )
}

export default App
