import type React from "react"
import { Linkedin, Github, Mail } from "lucide-react"
import { toast } from "sonner"
import styles from "./SocialButtons.module.css"

const SocialButtons: React.FC = () => {
  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const email = "josedavidart@unicauca.edu.co"
    try {
      await navigator.clipboard.writeText(email)
      toast.success("¡Correo copiado al portapapeles!")
    } catch {
      // Si el clipboard no está disponible, solo dejamos que el mailto funcione
    }
  }

  return (
    <div className={`${styles.socialButtonsContainer} bounce-hover`}>
      <div className={styles.socialButtons}>
        <a
          href="https://www.linkedin.com/in/davartfernandez/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Linkedin size={32} fill="currentColor" />
        </a>
        <a
          href="https://github.com/JoseDavidArteaga"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Github size={32} fill="currentColor" />
        </a>
        <a
          href="mailto:josedavidart@unicauca.edu.co"
          onClick={handleEmailClick}
          className={`${styles.socialIcon} bounce-hover`}
          title="Copiar correo"
        >
          <Mail size={32} />
        </a>
      </div>
    </div>
  )
}

export default SocialButtons
