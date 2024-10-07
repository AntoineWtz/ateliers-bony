import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importer les icônes
import logo from '../assets/img/bony-logo.png';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-primary text-accent py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-12">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Ateliers Bony Logo" className="h-24 w-auto" />
                </Link>
                <div className="hidden md:flex space-x-24">
                    <Link to="/services" className="text-xl hover:text-secondary">Services</Link>
                    <Link to="/projects" className="text-xl hover:text-secondary">Projets</Link>
                    <Link to="/history" className="text-xl hover:text-secondary">Notre Histoire</Link>
                    <Link to="/contact" className="text-xl hover:text-secondary">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu Hamburger */}
            <motion.div
                className={`absolute top-30 left-0 w-full bg-primary shadow-lg md:hidden z-50 ${isOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <nav className="flex flex-col items-center space-y-6 py-4">
                    <Link to="/services" className="hover:text-secondary" onClick={toggleMenu}>Services</Link>
                    <Link to="/projects" className="hover:text-secondary" onClick={toggleMenu}>Projets</Link>
                    <Link to="/history" className="hover:text-secondary" onClick={toggleMenu}>Notre Histoire</Link>
                    <Link to="/contact" className="hover:text-secondary" onClick={toggleMenu}>Contact</Link>
                </nav>
            </motion.div>
        </header>
    );
};
