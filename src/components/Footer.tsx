import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-accent py-4">
            <div className="container mx-auto text-center">
                <motion.p
                    className="text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    &copy; {new Date().getFullYear()} Ateliers Bony. Tous droits réservés.
                </motion.p>
            </div>
        </footer>
    );
};
