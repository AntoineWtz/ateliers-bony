import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import historyPic1 from '../assets/img/history/history1.png';
import historyPic2 from '../assets/img/history/history2.png';
import historyPic3 from '../assets/img/history/history3.png';

export const HistorySection: React.FC = () => {
    // Configuration du slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto py-12 text-center">
            {/* Titre */}
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider m-12 text-primary text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Notre Histoire
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-center items-center px-2">
                {/* Carousel */}
                <div className="w-full md:w-1/2">
                    <Slider {...settings}>
                        <div>
                            <motion.img
                                src={historyPic1}
                                alt="Notre Histoire 1"
                                className="w-full h-96 object-cover rounded-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div>
                            <motion.img
                                src={historyPic2}
                                alt="Notre Histoire 2"
                                className="w-full h-96 object-cover rounded-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div>
                            <motion.img
                                src={historyPic3}
                                alt="Notre Histoire 3"
                                className="w-full h-96 object-cover rounded-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </Slider>
                </div>

                {/* Texte descriptif */}
                <motion.div
                    className="w-full md:w-1/2 p-4 mt-8 md:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-lg tracking-wide text-justify">
                        Ateliers Bony est né d’une passion pour le bois et d’une quête d’excellence dans l’artisanat.
                        Depuis 1963, nous créons des œuvres qui allient design moderne et savoir-faire traditionnel. Chaque
                        pièce est le fruit d’un travail minutieux, respectant les matériaux et les techniques artisanales
                        transmises de génération en génération. Nous fabriquons nos produits dans nos ateliers franciliens
                        et transformons de multiples matériaux bois et dérivés.
                        <br /><br />
                        Nous assurons un service clef en main de prestations simples à sophistiquées, dans des domaines
                        d'activités variés : aménagements de sièges sociaux, particuliers, hôtellerie, hospitalier, crèches
                        et EHPAD, mobiliers techniques, promoteurs et gestionnaires de patrimoine. Notre propre équipe
                        s'intègre dans des groupements de toutes tailles selon les projets. Notre entreprise participe à la
                        formation des jeunes stagiaires et apprentis en partageant notre expertise.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
