import React from 'react';
import handSaw from '../assets/icon/hand-saw.png';
import sawMachine from '../assets/icon/saw-machine.png';
import window from '../assets/icon/window.png';
import woodCarving from '../assets/icon/wood-carving.png';
import { motion } from 'framer-motion';

export const ServiceList: React.FC = () => {
    return (
        <div className="container mx-auto text-center py-12">
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider mb-6 text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Nos Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service 1 - Conception sur mesure */}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={handSaw} alt="Conception sur mesure" className="h-12 w-12 mr-4" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-primary">Conception sur mesure</h3>
                        <p>Des designs uniques, pensés selon vos besoins.</p>
                    </div>
                </motion.div>

                {/* Service 2 - Réalisation de meubles */}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <img src={sawMachine} alt="Réalisation de meubles" className="h-12 w-12 mr-4" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-primary">Réalisation de meubles</h3>
                        <p>Création de meubles d’exception alliant modernité et tradition.</p>
                    </div>
                </motion.div>

                {/* Service 3 - Rénovation et restauration */}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src={window} alt="Rénovation et restauration" className="h-12 w-12 mr-4" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-primary">Rénovation et restauration</h3>
                        <p>Un savoir-faire dédié à la remise en état d'œuvres anciennes.</p>
                    </div>
                </motion.div>

                {/* Service 4 - Scénographie */}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <img src={woodCarving} alt="Scénographie" className="h-12 w-12 mr-4" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-primary">Scénographie</h3>
                        <p>Réalisation de vos idées les plus folles.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
