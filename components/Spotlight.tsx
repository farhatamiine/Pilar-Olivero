import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SPOTLIGHT_PROJECTS } from '../const';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Spotlight: React.FC = () => {
    const { language } = useLanguage();
    const ui = translations.ui[language];
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Parallax transforms - disabled on mobile for performance
    const y1 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200]);

    return (
        <section ref={containerRef} className="relative bg-[#FAF9F6] overflow-hidden py-16 md:py-32">
            {/* Section Header */}
            <div className="px-4 md:px-12 mb-8 md:mb-16">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex items-center gap-3 mb-4 md:mb-8">
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-neutral-400 font-bold">
                            {ui.spotlight}
                        </span>
                        <div className="h-[1px] w-12 md:w-16 bg-neutral-900" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter">
                        <span className="block">Récents</span>
                        <span className="block italic text-neutral-400">Travaux</span>
                    </h2>
                </div>
            </div>

            {/* Spotlight Projects - Mobile: Vertical Stack, Desktop: Grid */}
            <div className="px-4 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex flex-col gap-12 md:grid md:grid-cols-12 md:gap-16">
                        {/* First Project - Full width on mobile */}
                        {SPOTLIGHT_PROJECTS[0] && (
                            <motion.div className="col-span-12 md:col-span-8 relative group" style={{ y: y1 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[0].id}`} className="block">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[0].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[0].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="mt-4 md:mt-6 flex justify-between items-start">
                                        <div>
                                            <h3 className="font-serif text-2xl md:text-5xl tracking-tight group-hover:italic transition-all">
                                                {SPOTLIGHT_PROJECTS[0].title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-neutral-500 mt-1 md:mt-2">{SPOTLIGHT_PROJECTS[0].category}</p>
                                        </div>
                                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                                            {SPOTLIGHT_PROJECTS[0].year}
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Second Project */}
                        {SPOTLIGHT_PROJECTS[1] && (
                            <motion.div className="col-span-12 md:col-span-4 relative group" style={{ y: y2 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[1].id}`} className="block">
                                    <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-neutral-100">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[1].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[1].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-3 md:mt-4 flex justify-between items-center md:block">
                                        <h3 className="font-serif text-xl md:text-3xl tracking-tight group-hover:italic transition-all">
                                            {SPOTLIGHT_PROJECTS[1].title}
                                        </h3>
                                        <p className="text-xs text-neutral-500 md:mt-1">{SPOTLIGHT_PROJECTS[1].year}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Third Project */}
                        {SPOTLIGHT_PROJECTS[2] && (
                            <motion.div className="col-span-12 md:col-span-6 md:col-start-4 relative group" style={{ y: y3 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[2].id}`} className="block">
                                    <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-neutral-100">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[2].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[2].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-3 md:mt-4 flex items-center justify-between">
                                        <h3 className="font-serif text-xl md:text-4xl tracking-tight group-hover:italic transition-all">
                                            {SPOTLIGHT_PROJECTS[2].title}
                                        </h3>
                                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 opacity-40 md:opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Fourth Project (Murs Fragiles) */}
                        {SPOTLIGHT_PROJECTS[3] && (
                            <motion.div className="col-span-12 md:col-span-8 md:col-start-3 relative group" style={{ y: y1 }}>
                                <Link to={`/project/${SPOTLIGHT_PROJECTS[3].id}`} className="block">
                                    <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-neutral-100 border border-neutral-200">
                                        <img
                                            src={SPOTLIGHT_PROJECTS[3].imageUrl}
                                            alt={SPOTLIGHT_PROJECTS[3].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <p className="font-serif italic text-white text-center text-base md:text-2xl max-w-xl px-6 leading-relaxed">
                                                "Yaya, sigo las huellas que dejan tus pisadas..."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-6 flex justify-between items-end">
                                        <div>
                                            <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-neutral-400 font-bold block mb-1 md:mb-2">
                                                Projet en étapes
                                            </span>
                                            <h3 className="font-serif text-xl md:text-5xl tracking-tight group-hover:italic transition-all">
                                                {SPOTLIGHT_PROJECTS[3].title}
                                            </h3>
                                        </div>
                                        <span className="text-xs md:text-sm text-neutral-500">{SPOTLIGHT_PROJECTS[3].year}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Transition to Archive */}
            <div className="mt-16 md:mt-32 text-center">
                <div className="inline-flex items-center gap-3 md:gap-4">
                    <div className="h-[1px] w-8 md:w-12 bg-neutral-300" />
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-neutral-400 font-bold">{ui.archive}</span>
                    <div className="h-[1px] w-8 md:w-12 bg-neutral-300" />
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
