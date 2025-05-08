import { Link } from "react-scroll"
import "../styles/styleHeader.css"



const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Julia Disconzi</h1>
        <ul className="flex space-x-6 font-medium text-gray-800">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-purple-600">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-600">Sobre Mim</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-purple-600">Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-purple-600">Projetos</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-600">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
