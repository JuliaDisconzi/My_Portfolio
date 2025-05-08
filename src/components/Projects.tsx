import { motion } from 'framer-motion'
import "../styles/styleProject.css"

const projects = [
  {
    title: 'Projeto 1',
    description: 'Este é o meu projeto de portfólio usando React e TypeScript.',
    imageUrl: 'https://via.placeholder.com/400',
    liveLink: 'https://exemplo.com',
    repoLink: 'https://github.com/JuliaDisconzi/projeto1',
  },
  {
    title: 'Projeto 2',
    description: 'Este projeto é uma aplicação de gerenciamento de tarefas.',
    imageUrl: 'https://via.placeholder.com/400',
    liveLink: 'https://exemplo.com',
    repoLink: 'https://github.com/JuliaDisconzi/projeto2',
  },
  // Adicione mais projetos conforme necessário
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
      >
        Meus Projetos
      </motion.h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
            className="project-card"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Ver ao vivo
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  Repositório
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
