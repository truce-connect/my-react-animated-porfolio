
import './App.css'
import MYNavbar from "./component/MYNavbar"
import Banner from './component/Banner'
import Skill from './component/Skill'
import Project from './component/Project'
import Contact from './component/Contact'
import { Footer } from './component/footer'

function App() {
 
  return (
    <>
     <MYNavbar/>
      <Banner /> 
      <Skill />
      <Project />
       <Contact/>
      <Footer/>
    </>
  )
}

export default App
