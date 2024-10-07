import React from 'react';
import { motion } from 'framer-motion';

export const HistorySection: React.FC = () => {
    return (
        <div className="container mx-auto py-12 text-center">
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider mb-6 text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Notre Histoire
            </motion.h2>
            <motion.p
                className="text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Ateliers Bony est né d’une passion pour le bois et d’une quête d’excellence dans l’artisanat. Depuis plus de 30 ans, nous créons des œuvres qui allient design moderne et savoir-faire traditionnel. Chaque pièce est le fruit d’un travail minutieux, respectant les matériaux et les techniques artisanales transmises de génération en génération.
            </motion.p>
        </div>
    );
};
