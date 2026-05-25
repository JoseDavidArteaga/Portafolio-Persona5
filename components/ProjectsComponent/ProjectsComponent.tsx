import React from 'react';
import styles from './ProjectsComponent.module.css';

const ProjectsComponent: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Aplicación de Tareas (To-Do List)",
            description: "Una aplicación simple para gestionar tareas diarias. Permite añadir, eliminar y marcar tareas como completadas.",
            technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
            link: "https://josedavidarteaga.github.io/ToDoList",
            img: "/project-1.png",
        },
        {
            id: 2,
            title: "Calculadora Básica",
            description: "Una calculadora funcional con un diseño moderno. Realiza operaciones básicas y demuestra la lógica de JavaScript.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://josedavidarteaga.github.io/CalculadoraBasica",
            img: "/project-2.png",
        },
        {
            id: 3,
            title: "Buscador de Recetas",
            description: "Una herramienta que usa una API externa para buscar y mostrar recetas, demostrando el consumo de datos dinámicos.",
            technologies: ["HTML", "CSS", "JavaScript", "API"],
            link: "https://josedavidarteaga.github.io/BuscadorDeRecetas",
            img: "/project-3.png",
        },
        {
            id: 4,
            title: "Generador de Paleta de Colores",
            description: "Una aplicación creativa que genera paletas de colores aleatorias, ideal para diseñadores y desarrolladores.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://josedavidarteaga.github.io/GeneradorDePaletaDeColores",
            img: "/project-4.png",
        },
        {
            id: 5,
            title: "Juego de Piedra, Papel, Tijera, Lagarto, Spock",
            description: "Una versión digital expandida del clásico juego. Implementa la lógica completa de las 5 opciones, donde el usuario compite contra la computadora.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://josedavidarteaga.github.io/PiedraPapelTijeraLagartoSpock",
            img: "/project-5.png",
        },
        {
            id: 6,
            title: "Buscador de Pokemon",
            description: "Una aplicación que usa la PokeAPI para buscar Pokémon por nombre o ID y mostrar sus datos en tiempo real.",
            technologies: ["HTML", "CSS", "JavaScript", "PokeAPI"],
            link: "https://josedavidarteaga.github.io/BuscadorPokemon",
            img: "/project-6.png",
        },
    ];

    return (
        <div className={styles.gridContainer}>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={styles.projectCard}
                    onClick={(e) => e.stopPropagation()}
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className={styles.imageContainer}>
                            <img
                                src={project.img}
                                alt={project.title}
                                className={styles.projectImage}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.projectTitle}>{project.title}</span>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <ul className={styles.technologiesList}>
                                    {project.technologies.map((tech, index) => (
                                        <li key={index} className={styles.technology}>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProjectsComponent;
