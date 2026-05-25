"use client";
import type React from "react";
import Image from "next/image";
import { Heart, Spade } from "lucide-react";
import Header from "../components/Header";
import PersonaButton from "../components/PersonaButton";
import SocialButtons from "../components/SocialButtons";
import Persona3DContainer from "../components/Persona3DContainer";
import styles from "../styles/RotatedLetter.module.css";
import p5Styles from "../styles/Persona5Text.module.css";
import { useEffect, useState } from "react";
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import ExperienceComponent from "@/components/ExperienceComponent/ExperienceComponent";

const RotatedLetter: React.FC<{
  letter: string;
  rotation: number;
  isRed?: boolean;
  isH?: boolean;
  isMiddle?: boolean;
  isSpace?: boolean;
  isTor?: boolean;
}> = ({ letter, rotation, isRed, isH, isMiddle, isSpace, isTor }) => (
  <div
    className={styles.letterContainer}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <div className={styles.letterInner}>
      <div
        className={`${styles.letterFront} ${isTor ? styles.torFront : ""}`}
        style={{
          backgroundColor: "black",
          color: isRed || isTor ? "#e60012" : "white",
        }}
      >
        {isH ? (
          <div className={styles.hContainer}>
            <span className={styles.letter}>{letter}</span>
          </div>
        ) : isSpace ? (
          <Spade size={24} fill="white" className={styles.icon} />
        ) : (
          <>
            <span className={styles.letter}>{letter}</span>
            {isMiddle && (
              <Heart
                className={`${styles.heartIcon} ${styles.icon}`}
                size={16}
                fill="#e60012"
                stroke="#e60012"
              />
            )}
          </>
        )}
      </div>
      <div
        className={`${styles.letterBack} ${isTor ? styles.torBack : ""}`}
        style={{
          color: isTor ? "white" : "black",
        }}
      >
        {isSpace ? (
          <Spade
            size={24}
            fill={isTor ? "white" : "black"}
            className={styles.icon}
          />
        ) : (
          <>
            <span className={styles.letter}>{letter}</span>
            {isMiddle && (
              <Heart
                className={`${styles.heartIcon} ${styles.icon}`}
                size={16}
                fill={isTor ? "white" : "black"}
                stroke={isTor ? "white" : "black"}
              />
            )}
          </>
        )}
      </div>
    </div>
  </div>
);

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar si estamos en el cliente antes de acceder a window
    if (typeof window !== "undefined") {
      const handleScroll = () => setOffsetY(window.scrollY);
      window.addEventListener("scroll", handleScroll);

      // Verificar si es móvil
      setIsMobile(window.innerWidth < 768);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggleExpand = (id: number | null) => {
    setExpandedId(expandedId === id ? null : id); // Alterna entre expandir y colapsar
  };

  return (
    <div className="min-h-screen text-white">
      <div
        className="relative bg-cover bg-center w-full fixed top-0 left-0 z-0"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundSize: "125%", // Escala la imagen para que parezca más alejada
          backgroundPosition: "center", // Centra la imagen
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
          backgroundPositionY: `${offsetY * 0.5}px`, // Parallax effect
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ zIndex: -1 }}
        ></div>
        <Header onMenuClick={handleToggleExpand} />
        <div
          className="absolute top-6 right-6 z-50 transition-opacity duration-300"
          style={{
            opacity: offsetY < 50 ? 1 : 0,
            pointerEvents: offsetY < 50 ? "auto" : "none",
          }}
        >
          <SocialButtons />
        </div>
        <div className="w-full h-[10vh] relative overflow-hidden">
          <Image
            src="/header-bg.png"
            alt="Imagen de encabezado"
            layout="fill"
          />
        </div>
        <div className="relative h-[72vh] overflow-visible">
          <div className="relative z-10 flex flex-row items-center justify-between h-full px-4 w-full max-w-7xl mx-auto">
            {/* Lado izquierdo: Ilustración del personaje */}
            <div className="relative w-[45%] h-full flex items-end justify-center pointer-events-none">
              <img
                src="/ilustration.webp"
                alt="Character Illustration"
                className="absolute bottom-[-12%] left-[5%] w-auto h-[115%] object-contain object-bottom z-20"
                style={{ maxHeight: "none" }}
              />
            </div>

            {/* Lado derecho: Nombre + botón + redes */}
              <div 
                className="flex flex-col items-center justify-center text-center w-[50%]"
                style={{ transform: "translateX(-40px)" }}
              >
              {!isMobile ? (
                <div className="flex flex-col items-center">
                  <h1
                    className="mb-2 tracking-widest persona5-text"
                    style={{ fontWeight: "1000" }}
                  >
                    {"DAVID DEV".split("").map((letter, index) => (
                      <RotatedLetter
                        key={`top-${index}`}
                        letter={letter}
                        rotation={index % 2 === 0 ? 5 : -5}
                        isRed={(index === 4 || index === 5 || index === 8) }
                        isH={index === 0 || index === 6}
                        isMiddle={false}
                        isSpace={letter === " "}
                        isTor={false}
                      />
                    ))}
                  </h1>
                  <h1
                    className="mb-2 tracking-widest persona5-text"
                    style={{ fontWeight: "1000" }}
                  >
                    {"FERNANDEZ".split("").map((letter, index) => (
                      <RotatedLetter
                        key={`bottom-${index}`}
                        letter={letter}
                        rotation={index % 2 === 0 ? 5 : -5}
                        isRed={(index === 3 || index === 8)}
                        isH={index === 0}
                        isMiddle={false}
                        isSpace={false}
                        isTor={false}
                      />
                    ))}
                  </h1>
                </div>
              ) : (
                <h1
                  className="mb-2 tracking-widest persona5-text"
                  style={{ fontWeight: "1000" }}
                >
                  {"DAVID".split("").map((letter, index) => (
                    <RotatedLetter
                      key={index}
                      letter={letter}
                      rotation={index % 2 === 0 ? 5 : -5}
                      isRed={false}
                      isH={index === 0}
                      isMiddle={false}
                      isSpace={false}
                      isTor={false}
                    />
                  ))}
                </h1>
              )}

                  <div style={{ transform: "translateX(-120px) translateY(-60px)" }}>
                    <PersonaButton
                      text="SCHEDULE"
                      href="https://calendly.com/josedavidart-unicauca/30min"
                    />
                  </div>

            </div>
          </div>
        </div>
        <div
          className={p5Styles.persona5Text}
          style={{ fontFamily: "p5hatty" }}
        >
          <div>
            {"FullStack".split("").map((letter, index) => (
              <span
                key={index}
                className={[
                  index === 0 || index === 4
                    ? p5Styles.redText
                    : p5Styles.whiteText,
                ].join(" ")}
              >
                {letter}
              </span>
            ))}
          </div>
          <div>
            {"AI Systems".split("").map((letter, index) => (
              <span
                key={index}
                className={[
                  index === 0 || index === 3
                    ? p5Styles.redText
                    : p5Styles.whiteText,
                ].join(" ")}
                style={letter === " " ? { whiteSpace: "pre" } : undefined}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        <main className="w-full h-screen relative z-30">
          <img
            src="/projects-bg.png"
            alt="Background"
            className="absolute left-0 w-full h-full"
            style={{ top: "-2%" }}
          />
          <div
            className="relative flex flex-col justify-center h-full"
            style={{ top: "-10%" }}
          >
            <Persona3DContainer
              id={1}
              title="My Projects"
              description="I have worked on a variety of projects. Here are some of my most recent projects."
              isExpanded={expandedId === 1}
              onToggleExpand={() => handleToggleExpand(1)}
            >
              <ProjectsComponent />
            </Persona3DContainer>
            <Persona3DContainer
              id={2}
              title="Experience"
              description=""
              isExpanded={expandedId === 2}
              onToggleExpand={() => handleToggleExpand(2)}
            >
              <ExperienceComponent />
            </Persona3DContainer>
            <Persona3DContainer
              id={3}
              title="About Me"
              description="I am a passionate developer with experience in building modern web applications. I specialize in creating dynamic and responsive user interfaces. Update this bio with your own background and skills."
              isExpanded={expandedId === 3}
              onToggleExpand={() => handleToggleExpand(3)}
            ></Persona3DContainer>
          </div>
        </main>
      </div>
      <footer>
        <div className="bg-black text-white text-center py-4">
          <p>&copy; 2025 Jose David Arteaga Fernández</p>
        </div>
      </footer>
    </div>
  );
}
