import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../const';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollSectionRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const cameraLightRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (scrollSectionRef.current && horizontalRef.current) {
                // 1. Hero Text Reveal
                const tl = gsap.timeline();
                tl.fromTo('.hero-text-line', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.1 });

                // 2. Horizontal Scroll (Film Reel)
                const reel = horizontalRef.current;
                const getScrollAmount = () => -(reel.scrollWidth - window.innerWidth);

                gsap.to(reel, {
                    x: getScrollAmount,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: scrollSectionRef.current,
                        start: 'top top',
                        end: () => `+=${Math.max(reel.scrollWidth, window.innerHeight * 3)}`, // Scroll duration proportional to width
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            // "Working Light" Effect: Brightness reacts to scroll velocity
                            if (cameraLightRef.current) {
                                const velocity = Math.abs(self.getVelocity());
                                // Map velocity (roughly 0-4000) to opacity (0.2 - 1.0)
                                const opacity = Math.min(Math.max(velocity / 2000, 0.2), 1);
                                gsap.set(cameraLightRef.current, { opacity: opacity });
                            }
                        },
                    },
                });
            }
        },
        { scope: containerRef }
    );

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* HERO SECTION */}
            <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-12 border-b border-neutral-100 overflow-hidden">
                <div className="absolute flex flex-col gap-2 top-24 md:top-32 left-6 md:left-12">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold hero-text-line">Archive v.04</span>
                    <div className="h-[1px] w-12 md:w-24 bg-neutral-900 hero-text-line" />
                </div>
                <div className="max-w-[1400px] mx-auto w-full">
                    <h1 className="font-serif text-[clamp(2.5rem,14vw,12rem)] leading-[0.9] md:leading-[0.8] tracking-tighter">
                        <div className="overflow-hidden">
                            <span className="block hero-text-line">Fragmented</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="block italic hero-text-line text-neutral-400">Realities.</span>
                        </div>
                    </h1>
                </div>
                <div className="absolute -translate-x-1/2 bottom-8 md:bottom-12 left-1/2 animate-bounce opacity-20">
                    <ArrowDown size={32} strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8" />
                </div>
            </section>

            {/* FILM REEL HORIZONTAL SECTION - GSAP Powered */}
            <section ref={scrollSectionRef} className="relative bg-[#0a0a0a] overflow-hidden">
                <div className="flex items-center w-full h-screen">
                    {/* THE CAMERA BODY (Overlay on top of the moving strip) */}
                    <div className="absolute left-0 h-[60vh] md:h-[80vh] w-[18vw] md:w-[22vw] z-30 bg-[#121212] flex items-center justify-center border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.8)] pointer-events-none">
                        <div className="relative flex items-center w-24 h-48 pr-2 overflow-hidden bg-black border-r md:w-48 md:h-80 rounded-r-2xl md:rounded-r-3xl border-y border-white/10 md:pr-4">
                            <div className="w-full h-[90%] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-md" />
                            <div className="absolute flex flex-col justify-around h-full py-2 right-1 md:right-2 md:py-4 opacity-10 md:opacity-20">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-2 h-3 bg-white rounded-full md:w-3 md:h-6" />
                                ))}
                            </div>
                            {/* The Dynamic Status Light */}
                            <div
                                ref={cameraLightRef}
                                className="absolute top-4 right-4 md:top-6 md:right-6 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] opacity-20 transition-opacity duration-100"
                            />
                        </div>
                        <div className="absolute top-8 left-2 md:top-12 md:left-6 -rotate-90 origin-left text-[8px] md:text-[10px] font-mono text-white/20 tracking-[1em] uppercase whitespace-nowrap">
                            P_O_OPTICS_V4
                        </div>
                    </div>

                    {/* THE FILM REEL STRIP */}
                    <div ref={horizontalRef} className="flex items-center gap-0 pl-[12vw] md:pl-[15vw] will-change-transform h-full w-max">
                        <div className="flex-shrink-0 w-24 md:w-64 h-[35vh] md:h-[35vh] bg-gradient-to-r from-neutral-900 to-[#1a1a1a] relative border-y-[1.5vh] border-black">
                            <div className="absolute top-[-1.5vh] w-full h-[1.5vh] flex items-center justify-around">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-1.5 md:w-3 md:h-2 bg-[#0a0a0a] rounded-sm" />
                                ))}
                            </div>
                            <div className="absolute bottom-[-1.5vh] w-full h-[1.5vh] flex items-center justify-around">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-1.5 md:w-3 md:h-2 bg-[#0a0a0a] rounded-sm" />
                                ))}
                            </div>
                        </div>

                        {PROJECTS.map((project, index) => (
                            <div key={project.id} className="flex items-center flex-shrink-0">
                                <div className="relative w-[75vw] md:w-[55vw] lg:w-[45vw] h-[45vh] md:h-[55vh] flex flex-col justify-center bg-[#1a1a1a] border-y-[1.5vh] border-black px-6 md:px-12 pb-6 md:pb-0">
                                    <div className="absolute top-[-1.5vh] left-0 w-full h-[1.5vh] flex items-center justify-around px-4">
                                        {[...Array(12)].map((_, i) => (
                                            <div key={i} className="w-2 h-1.5 md:w-3 md:h-2 bg-[#0a0a0a] rounded-sm" />
                                        ))}
                                    </div>
                                    <ProjectCard project={project} index={index} onClick={(p) => navigate(`/project/${p.id}`)} />
                                    <div className="absolute bottom-[-1.5vh] left-0 w-full h-[1.5vh] flex items-center justify-around px-4">
                                        {[...Array(12)].map((_, i) => (
                                            <div key={i} className="w-2 h-1.5 md:w-3 md:h-2 bg-[#0a0a0a] rounded-sm" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex-shrink-0 w-[60vw] h-[35vh] md:h-[35vh] bg-neutral-900 border-y-[1.5vh] border-black flex items-center justify-center pr-[12vw] md:pr-[20vw]">
                            <span className="font-serif text-2xl italic md:text-5xl text-white/10 -rotate-12">End of Roll.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white md:py-64">
                <div className="max-w-5xl px-6 mx-auto">
                    <div className="flex flex-col gap-12 md:gap-16">
                        <div className="space-y-3 text-center md:space-y-4">
                            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-neutral-400 font-bold">Catalogue Index</span>
                        </div>
                        <div className="flex flex-col w-full">
                            {PROJECTS.map((p, i) => (
                                <button
                                    key={p.id}
                                    onClick={() => navigate(`/project/${p.id}`)}
                                    className="flex items-center justify-between py-8 text-left transition-all duration-500 border-b group md:py-12 border-neutral-100 hover:px-4 md:hover:px-8"
                                >
                                    <div className="flex items-baseline gap-4 md:gap-8">
                                        <span className="font-mono text-[8px] md:text-[10px] text-neutral-300">[{String(i + 1).padStart(2, '0')}]</span>
                                        <h3 className="pr-4 font-serif text-xl tracking-tighter truncate transition-all md:text-5xl group-hover:italic">
                                            {p.title}
                                        </h3>
                                    </div>
                                    <span className="text-[8px] md:text-[10px] uppercase font-bold text-neutral-400 whitespace-nowrap">{p.year}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </motion.div>
    );
};

export default Home;
