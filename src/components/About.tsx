import { motion } from 'framer-motion'
import "../styles/styleAbout.css"

const About = () => {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-content">
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            <span className="sobre">Sobre</span>
            <br />
            <span className="mim">mim!</span>
          </h2>

          <p>
            Sou apaixonada por tecnologia, criatividade e boas experiências digitais. Meu foco está no <span className="destaque">Front-End</span> — adoro transformar ideias em interfaces acessíveis, funcionais e bonitas. Trabalho com React, React Native, JavaScript e CSS, sempre buscando evoluir no código e no design. 
            <br />
            <br />
            Mesmo ainda sendo estudante de Engenharia Informática, já explorei o Back-End com Node.js e Express, e estou aprendendo SQL. Curiosa e determinada, estou no caminho para me tornar Full Stack — porque entender o todo me desafia e motiva.
            <br />
            <br /> 
            Acredito que a tecnologia deve conectar pessoas de forma útil e significativa. É isso que me move a criar e aprender todos os dias.

          </p>
        </motion.div>

        <motion.div
          className="image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/src/images/eu.jpg" alt="Julia Disconzi" />
        </motion.div>
      </div>


    </section>
  )
}

export default About
