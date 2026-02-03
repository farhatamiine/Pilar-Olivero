import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
        },
    };

    return (
        <motion.div
            className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={containerVariants}
        >
            <div className="flex-grow relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[60vh]">
                        {/* Left Column */}
                        <motion.div className="lg:col-span-7 relative z-20" variants={itemVariants}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">Contact</span>
                                <div className="h-[1px] w-12 bg-neutral-900" />
                            </div>
                            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-8">
                                Let's stay <br />
                                <motion.span className="italic text-neutral-400 inline-flex items-center gap-6" variants={itemVariants}>
                                    in touch
                                    <ArrowRight strokeWidth={1} className="w-16 h-16 md:w-24 md:h-24" />
                                </motion.span>
                            </h1>

                            <motion.p className="max-w-md text-base md:text-lg text-neutral-600 font-light leading-relaxed mb-12" variants={itemVariants}>
                                Currently open for new collaborations, commissions, and exhibitions. Based in Paris, available worldwide.
                            </motion.p>

                            <motion.div className="flex flex-wrap gap-8 items-center" variants={itemVariants}>
                                <a
                                    href="mailto:hello@pilarolivero.com"
                                    className="font-serif text-2xl md:text-4xl italic border-b-2 border-neutral-200 pb-1 hover:border-neutral-900 transition-colors"
                                >
                                    hello@pilarolivero.com
                                </a>
                            </motion.div>

                            <motion.div className="flex gap-8 mt-16 font-serif italic text-lg text-neutral-500" variants={itemVariants}>
                                <a href="#" className="hover:text-neutral-900 transition-colors">
                                    Instagram
                                </a>
                                <a href="#" className="hover:text-neutral-900 transition-colors">
                                    LinkedIn
                                </a>
                                <a href="#" className="hover:text-neutral-900 transition-colors">
                                    Behance
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div
                            className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45vw]"
                            variants={imageVariants}
                        >
                            <div className="w-full h-full overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2500&auto=format&fit=crop"
                                    alt="Contact Visual"
                                    className="w-full h-full object-cover grayscale brightness-105 contrast-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Circle */}
                <motion.div
                    className="absolute top-[10%] right-[5%] z-30 hidden lg:block"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="w-32 h-32 border border-neutral-300 rounded-full flex items-center justify-center">
                        <span className="text-[8px] uppercase tracking-widest text-center leading-relaxed">
                            For Press <br /> Inquiries
                        </span>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Contact;
