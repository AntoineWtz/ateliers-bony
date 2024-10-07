import React from 'react';
import { motion } from 'framer-motion';

export const ProjectList: React.FC = () => {
    return (
        <div className="container mx-auto text-center py-12">
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider m-12 text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Nos Réalisations
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {['Projet 1', 'Projet 2', 'Projet 3'].map((project, index) => (
                    <motion.div
                        key={project}
                        className="bg-white shadow-lg rounded-lg p-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-primary">{project}</h3>
                        <p>Description du {project.toLowerCase()}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
