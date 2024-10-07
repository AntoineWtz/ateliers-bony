import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import projectPic1 from '../assets/img/projects/project-1.png';
import projectPic2 from '../assets/img/projects/project-2.png';
import projectPic3 from '../assets/img/projects/project-3.png';
import projectPic4 from '../assets/img/projects/project-4.png';
import projectPic5 from '../assets/img/projects/project-5.png';
import projectPic6 from '../assets/img/projects/project-6.png';
import projectPic7 from '../assets/img/projects/project-7.png';

const projects = [
    {
        title: "Création d'un meuble TV",
        description: "Conception et réalisation d'un meuble TV en chêne massif, alliant fonctionnalité et esthétique.",
        image: projectPic1,
    },
    {
        title: "Rénovation d'une bibliothèque",
        description: "Rénovation complète d'une bibliothèque en bois de rose, incluant des étagères sur mesure.",
        image: projectPic2,
    },
    {
        title: "Fabrication d'une table de salle à manger",
        description: "Fabrication d'une table de salle à manger en teck, avec un design moderne et épuré.",
        image: projectPic3,
    },
    {
        title: "Création d'une tête de lit sur mesure",
        description: "Conception d'une tête de lit en pin, intégrant des espaces de rangement.",
        image: projectPic4,
    },
    {
        title: "Réalisation d'une bibliothèque suspendue",
        description: "Création d'une bibliothèque suspendue en MDF, parfaite pour les petits espaces.",
        image: projectPic5,
    },
    {
        title: "Aménagement d'un dressing sur mesure",
        description: "Aménagement complet d'un dressing en chêne avec miroir intégré.",
        image: projectPic6,
    },
    {
        title: "Fabrication d'une chaise design",
        description: "Création d'une chaise design en contreplaqué, alliant confort et style.",
        image: projectPic7,
    },
];

interface ProjectListProps {
    limit?: number;
}

export const ProjectList: React.FC<ProjectListProps> = ({ limit = projects.length }) => {
    return (
        <div className="container mx-auto text-center py-12">
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider m-8 text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Nos Réalisations
            </motion.h2>
            <div className="flex flex-wrap justify-evenly align-center gap-8 m-4">
                {projects.slice(0, limit).map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="relative w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
                            <p className="mb-4 text-justify">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {limit && limit < projects.length && (
                <Link to="/projects">
                    <motion.button
                        className="mt-6 px-4 py-2 text-white bg-primary rounded hover:bg-secondary transition-colors"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Voir plus
                    </motion.button>
                </Link>
            )}
        </div>
    );
};
