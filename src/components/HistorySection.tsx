import React from 'react';
import { motion } from 'framer-motion';
import historyPic from '../assets/img/history.png'

export const HistorySection: React.FC = () => {
    return (
        <div className="container mx-auto py-12 text-justify">
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider m-12 text-primary text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Notre Histoire
            </motion.h2>
            <motion.p
                className="text-lg max-w-3xl mx-auto tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Ateliers Bony est né d’une passion pour le bois et d’une quête d’excellence dans l’artisanat. Depuis 1963, nous créons des œuvres qui allient design moderne et savoir-faire traditionnel. Chaque pièce est le fruit d’un travail minutieux, respectant les matériaux et les techniques artisanales transmises de génération en génération. Nous fabriquons nos produits dans nos ateliers franciliens et transformons de multiples matériaux bois et dérivés.
                Nous assurons un service clef en main de prestations simples à sophistiquées, dans des domaines d'activités variés : aménagements de sièges sociaux, particuliers, hôtellerie, hospitalier, crèches et EHPAD, mobiliers techniques, promoteurs et gestionnaires de patrimoine.
                Notre propre équipe s'intègre dans des groupements de toutes tailles selon les projets. Notre entreprise participe à la formation des jeunes stagiaires et apprentis en partageant notre expertise.
            </motion.p>
        </div>
    );
};
