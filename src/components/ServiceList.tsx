import React from 'react';
import { motion } from 'framer-motion';
import handSaw from '../assets/icon/hand-saw.png';
import sawMachine from '../assets/icon/saw-machine.png';
import window from '../assets/icon/window.png';
import woodCarving from '../assets/icon/wood-carving.png';

import service1 from '../assets/img/services/service1.png';
import service2 from '../assets/img/services/service2.png';
import service3 from '../assets/img/services/service3.png';
import service4 from '../assets/img/services/service4.png';

export const ServiceList: React.FC = () => {
    // Variants for animation with bounce effect
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 50, damping: 10 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 50, damping: 10 },
        },
    };

    return (
        <div className="container mx-auto py-12">
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider m-12 text-primary text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Nos Services
            </motion.h2>

            <div className="space-y-12">
                {/* Service 1 - Conception sur mesure */}
                <div className="flex flex-col md:flex-row items-center mx-4">
                    <motion.img
                        src={service1}
                        alt="Conception sur mesure"
                        className="w-full md:w-1/2 object-cover rounded-3xl opacity-90"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    />
                    <motion.div
                        className="relative md:-ml-12 p-4 bg-accent shadow-lg rounded-lg flex items-center z-10 opacity-90 mx-4 my-4 md:my-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                    >
                        <img src={handSaw} alt="Conception sur mesure" className="h-10 w-10 mr-4" />
                        <div>
                            <h3 className="text-xl text-center md:text-2xl font-semibold text-primary">Conception sur mesure</h3>
                            <p className="text-base md:text-lg">Des designs uniques, pensés selon vos besoins.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Service 2 - Réalisation de meubles */}
                <div className="flex flex-col md:flex-row-reverse items-center mx-4">
                    <motion.img
                        src={service2}
                        alt="Réalisation de meubles"
                        className="w-full md:w-1/2 object-cover rounded-3xl opacity-90"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    />
                    <motion.div
                        className="relative md:-mr-12 p-4 bg-accent shadow-lg rounded-lg flex items-center z-10 opacity-90 mx-4 my-4 md:my-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                    >
                        <img src={sawMachine} alt="Réalisation de meubles" className="h-10 w-10 mr-4" />
                        <div>
                            <h3 className="text-xl text-center md:text-2xl font-semibold text-primary">Réalisation de meubles</h3>
                            <p className="text-base md:text-lg">Création de meubles d’exception alliant modernité et tradition.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Service 3 - Rénovation et restauration */}
                <div className="flex flex-col md:flex-row items-center mx-4">
                    <motion.img
                        src={service3}
                        alt="Rénovation et restauration"
                        className="w-full md:w-1/2 object-cover rounded-3xl opacity-90"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    />
                    <motion.div
                        className="relative md:-ml-12 p-4 bg-accent shadow-lg rounded-lg flex items-center z-10 opacity-90 mx-4 my-4 md:my-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                    >
                        <img src={window} alt="Rénovation et restauration" className="h-10 w-10 mr-4" />
                        <div>
                            <h3 className="text-xl text-center md:text-2xl font-semibold text-primary">Rénovation et restauration</h3>
                            <p className="text-base md:text-lg">Un savoir-faire dédié à la remise en état d'œuvres anciennes.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Service 4 - Scénographie */}
                <div className="flex flex-col md:flex-row-reverse items-center mx-4">
                    <motion.img
                        src={service4}
                        alt="Scénographie"
                        className="w-full md:w-1/2 object-cover rounded-3xl opacity-90"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    />
                    <motion.div
                        className="relative md:-mr-12 p-4 bg-accent shadow-lg rounded-lg flex items-center z-10 opacity-90 mx-4 my-4 md:my-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                    >
                        <img src={woodCarving} alt="Scénographie" className="h-10 w-10 mr-4" />
                        <div>
                            <h3 className="text-xl text-center md:text-2xl font-semibold text-primary">Scénographie</h3>
                            <p className="text-base md:text-lg">Réalisation de vos idées les plus extravagantes.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
