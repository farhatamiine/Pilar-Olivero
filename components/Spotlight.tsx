import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SPOTLIGHT_PROJECTS } from '../const';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Spotlight: React.FC = () => {
    const { language } = useLanguage();
    const ui = translations.ui[language];
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Parallax transforms for different elements
    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[200vh] bg-[#FAF9F6] overflow-hidden py-24 md:py-48">
            {/* Section Header */}
            <motion.div className="sticky top-0 px-6 md:px-12 pt-24 md:pt-32 z-10" style={{ opacity }}>
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold">{ui.spotlight}</span>
                        <div className="h-[1px] w-16 bg-neutral-900" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter">
                        <span className="block">Récents</span>
                        <span className="block italic text-neutral-400">Travaux</span>
                    </h2>
                </div>
            </motion.div>

            {/* Spotlight Projects Grid */}
            <div className="relative mt-24 md:mt-48 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                        {/* First Project - Large */}
                        {SPOTLIGHT_PROJECTS[0] && (
                            <motion.div className="md:col-span-8 relative group" style={{ y: y1 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[0].id}`} className="block">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[0].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[0].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="mt-6 flex justify-between items-start">
                                        <div>
                                            <h3 className="font-serif text-3xl md:text-5xl tracking-tight group-hover:italic transition-all">
                                                {SPOTLIGHT_PROJECTS[0].title}
                                            </h3>
                                            <p className="text-sm text-neutral-500 mt-2">{SPOTLIGHT_PROJECTS[0].category}</p>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">{SPOTLIGHT_PROJECTS[0].year}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Second Project - Offset */}
                        {SPOTLIGHT_PROJECTS[1] && (
                            <motion.div className="md:col-span-4 md:mt-32 relative group" style={{ y: y2 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[1].id}`} className="block">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[1].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[1].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-serif text-2xl md:text-3xl tracking-tight group-hover:italic transition-all">
                                            {SPOTLIGHT_PROJECTS[1].title}
                                        </h3>
                                        <p className="text-xs text-neutral-500 mt-1">{SPOTLIGHT_PROJECTS[1].year}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Third Project - Full Width */}
                        {SPOTLIGHT_PROJECTS[2] && (
                            <motion.div className="md:col-span-6 md:col-start-4 relative group" style={{ y: y3 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[2].id}`} className="block">
                                    <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[2].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[2].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <h3 className="font-serif text-2xl md:text-4xl tracking-tight group-hover:italic transition-all">
                                            {SPOTLIGHT_PROJECTS[2].title}
                                        </h3>
                                        <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Fourth Project (Murs Fragiles) - Special Treatment */}
                        {SPOTLIGHT_PROJECTS[3] && (
                            <motion.div className="md:col-span-8 md:col-start-3 relative group mt-16" style={{ y: y1 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[3].id}`} className="block">
                                    <div className="relative aspect-[21/9] overflow-hidden bg-neutral-100 border border-neutral-200">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[3].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[3].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        {/* Overlay with poem excerpt */}
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <p className="font-serif italic text-white text-center text-lg md:text-2xl max-w-xl px-8 leading-relaxed">
                                                "Yaya, sigo las huellas que dejan tus pisadas..."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-between items-end">
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold block mb-2">
                                                Projet en étapes
                                            </span>
                                            <h3 className="font-serif text-3xl md:text-5xl tracking-tight group-hover:italic transition-all">
                                                {SPOTLIGHT_PROJECTS[3].title}
                                            </h3>
                                        </div>
                                        <span className="text-sm text-neutral-500">{SPOTLIGHT_PROJECTS[3].year}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Transition to Archive */}
            <div className="mt-48 md:mt-64 text-center">
                <div className="inline-flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-neutral-300" />
                    <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold">{ui.archive}</span>
                    <div className="h-[1px] w-12 bg-neutral-300" />
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
