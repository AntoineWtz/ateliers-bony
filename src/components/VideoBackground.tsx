import React from 'react';
import { motion } from 'framer-motion';

export const VideoBackground: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src={`${process.env.PUBLIC_URL}/assets/video/bony-teaser.mp4`} type="video/mp4" />
                <source src={`${process.env.PUBLIC_URL}/assets/video/bony-teaser.webm`} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-35"></div>

            {/* Bloc contenant les deux titres */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                <motion.h1
                    className="text-white text-6xl font-serif"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Ateliers Bony
                </motion.h1>
                <motion.h2
                    className="text-secondary text-2xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Menuiserie - Ébénisterie
                </motion.h2>
            </div>
        </div>
    );
};
