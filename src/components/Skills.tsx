import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import "../styles/styleSkills.css";

const skills = [
  { icon: <FaReact className="icon" />, name: 'React', level: 80 },
  { icon: <FaJs className="icon" />, name: 'JavaScript', level: 75 },
  { icon: <FaHtml5 className="icon" />, name: 'HTML5', level: 95 },
  { icon: <FaCss3Alt className="icon" />, name: 'CSS3', level: 90 },
  { icon: <FaNodeJs className="icon" />, name: 'Node.js', level: 60 },
  { icon: <SiExpress className="icon" />, name: 'Express.js', level: 55 },
  { icon: <SiMysql className="icon" />, name: 'MySQL', level: 50 },
  { icon: <FaPython className="icon" />, name: 'Python', level: 40 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <motion.h2 className="skills-title">
        Minhas Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="skill-card"
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
            <div className="circle">
              <div className="circle-inner">
                {skill.level}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="skills-description">
        Estou sempre aprendendo e buscando novas tecnologias. Meu foco está no Front-End, mas já venho explorando o Back-End com Node.js, Express e SQL, além de estudar Python para projetos de automação e IA. Ser Full Stack é uma meta em construção — e é esse caminho que me motiva todos os dias.
      </p>
    </section>
  );
};

export default Skills;
