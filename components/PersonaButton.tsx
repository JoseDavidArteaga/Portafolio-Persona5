import type React from "react"
import styles from "./PersonaButton.module.css"

interface PersonaButtonProps {
  text: string
  onClick?: () => void
  href?: string
}

const PersonaButton: React.FC<PersonaButtonProps> = ({ text, onClick, href }) => {
  const content = (
    <div className={styles.personaButton}>
      <span className={styles.personaButtonText}>{text}</span>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.personaButtonContainer} bounce-hover mt-20`}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={`${styles.personaButtonContainer} bounce-hover mt-20`} onClick={onClick}>
      {content}
    </div>
  )
}

export default PersonaButton

