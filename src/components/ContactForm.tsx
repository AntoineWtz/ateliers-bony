import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/img/bony-logo.png';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mx-auto py-12">
            <motion.h2
                className="text-4xl font-bold font-serif tracking-wider m-8 text-primary text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Contactez-nous
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
                <form onSubmit={handleSubmit} className="md:w-1/2 bg-white shadow-lg rounded-3xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </motion.div>
                        <motion.div
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </motion.div>
                        <motion.div
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </motion.div>
                        <motion.div
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md resize-none"
                        ></textarea>
                    </motion.div>
                    <motion.button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Envoyer
                    </motion.button>
                </form>
                <div className="md:w-1/2 flex flex-col items-center">
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="w-32 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="text-gray-700 mb-4 text-center md:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p className="font-semibold">Coordonnées</p>
                        <p>11 Rue Jean Nicot</p>
                        <p>77170 Brie-Comte-Robert</p>
                        <p>01 64 05 54 31</p>
                    </motion.div>
                    <motion.div
                        className="text-gray-700 text-center md:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p><span className="font-semibold">Lundi - Samedi :</span> 09:00–20:00</p>
                        <p><span className="font-semibold">Dimanche :</span> Fermé</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
