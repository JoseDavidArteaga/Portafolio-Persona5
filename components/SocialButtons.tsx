import type React from "react"
import { Linkedin, Github, AtSign } from "lucide-react"
import styles from "./SocialButtons.module.css"

const SocialButtons: React.FC = () => {
  return (
    <div className={`${styles.socialButtonsContainer} bounce-hover`}>
      <div className={styles.socialButtons}>
        {/* TODO: Replace with your LinkedIn URL */}
        <a
          href="https://www.linkedin.com/in/davartfernandez/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Linkedin size={32} fill="currentColor" />
        </a>
        {/* TODO: Replace with your GitHub URL */}
        <a
          href="https://github.com/JoseDavidArteaga"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Github size={32} fill="currentColor" />
        </a>
        {/* TODO: Replace with your email */}
        <a href="mailto:josedavidart@unicauca.edu.co" className={`${styles.socialIcon} bounce-hover`}>
          <AtSign size={32} />
        </a>
      </div>
    </div>
  )
}

export default SocialButtons

