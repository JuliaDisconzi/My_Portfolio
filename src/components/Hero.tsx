import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import '../styles/styleHero.css'

const Hero = () => {
  return (
    <section id="home">
      <motion.h1
        className='nome-lateral'
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="julia">Julia</span> <span className="disconzi">Disconzi</span>
      </motion.h1>

      <motion.h2 className="subtitulo">
        <Typewriter
          words={[
            '💜Não escrevo só códigos, escrevo futuros clicáveis.💜',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={3000}
        />
      </motion.h2>
    </section>
  )
}

export default Hero
