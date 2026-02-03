import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

// Different "realities" - diverse life scenes
const REALITY_IMAGES = [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800', // Friends gathering
    'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=800', // Person meditating
    'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800', // Street scene
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800', // Portrait
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', // Working at desk
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800', // Dancing
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', // Classroom
];

// Irregular glass shards with unique clip-paths
interface ShardConfig {
    clipPath: string;
    imageIndex: number;
    translateFactor: { x: number; y: number };
    rotateFactor: number;
    scale: number;
    zIndex: number;
}

const GLASS_SHARDS: ShardConfig[] = [
    // Large center shard
    {
        clipPath: 'polygon(15% 0%, 45% 0%, 55% 35%, 40% 100%, 5% 85%)',
        imageIndex: 0,
        translateFactor: { x: 0.8, y: 0.6 },
        rotateFactor: 1.2,
        scale: 1,
        zIndex: 10,
    },
    // Top right shard
    {
        clipPath: 'polygon(45% 0%, 75% 0%, 95% 25%, 70% 45%, 50% 30%)',
        imageIndex: 1,
        translateFactor: { x: -0.6, y: 0.9 },
        rotateFactor: -0.8,
        scale: 1,
        zIndex: 9,
    },
    // Right side shard
    {
        clipPath: 'polygon(70% 40%, 100% 20%, 100% 70%, 85% 80%, 55% 55%)',
        imageIndex: 2,
        translateFactor: { x: -1.0, y: -0.5 },
        rotateFactor: 0.6,
        scale: 1,
        zIndex: 8,
    },
    // Bottom right shard
    {
        clipPath: 'polygon(60% 50%, 95% 65%, 100% 100%, 70% 100%, 50% 70%)',
        imageIndex: 3,
        translateFactor: { x: -0.7, y: -0.8 },
        rotateFactor: -1.0,
        scale: 1,
        zIndex: 7,
    },
    // Bottom left shard
    {
        clipPath: 'polygon(0% 60%, 20% 50%, 45% 65%, 35% 100%, 0% 100%)',
        imageIndex: 4,
        translateFactor: { x: 0.9, y: -0.7 },
        rotateFactor: 0.9,
        scale: 1,
        zIndex: 6,
    },
    // Left side shard
    {
        clipPath: 'polygon(0% 20%, 15% 10%, 25% 55%, 10% 65%, 0% 58%)',
        imageIndex: 5,
        translateFactor: { x: 1.1, y: 0.4 },
        rotateFactor: -0.7,
        scale: 1,
        zIndex: 5,
    },
    // Top left shard
    {
        clipPath: 'polygon(0% 0%, 20% 0%, 18% 25%, 5% 30%, 0% 18%)',
        imageIndex: 6,
        translateFactor: { x: 0.5, y: 1.0 },
        rotateFactor: 0.5,
        scale: 1,
        zIndex: 4,
    },
];

interface FragmentedRealitiesHeroProps {
    className?: string;
}

const FragmentedRealitiesHero: React.FC<FragmentedRealitiesHeroProps> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set((e.clientX - centerX) / (rect.width / 2));
        mouseY.set((e.clientY - centerY) / (rect.height / 2));
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            className={`relative w-full h-screen overflow-hidden bg-neutral-950 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isMobile && setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glass shards with different reality images */}
            <div className="absolute inset-0">
                {GLASS_SHARDS.map((shard, index) => {
                    const translateX = useTransform(smoothX, [-1, 1], [-shard.translateFactor.x * 15, shard.translateFactor.x * 15]);
                    const translateY = useTransform(smoothY, [-1, 1], [-shard.translateFactor.y * 12, shard.translateFactor.y * 12]);
                    const rotate = useTransform(smoothX, [-1, 1], [-shard.rotateFactor * 3, shard.rotateFactor * 3]);

                    return (
                        <motion.div
                            key={`shard-${index}`}
                            className="absolute inset-0"
                            style={{
                                clipPath: shard.clipPath,
                                x: isHovering && !isMobile ? translateX : 0,
                                y: isHovering && !isMobile ? translateY : 0,
                                rotate: isHovering && !isMobile ? rotate : 0,
                                zIndex: shard.zIndex,
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {/* Reality image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale"
                                style={{
                                    backgroundImage: `url(${REALITY_IMAGES[shard.imageIndex]})`,
                                }}
                            />

                            {/* Glass texture overlay */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: `linear-gradient(
                                        ${45 + index * 20}deg,
                                        transparent 0%,
                                        rgba(255,255,255,0.1) 50%,
                                        transparent 100%
                                    )`,
                                }}
                            />

                            {/* Edge highlight for glass effect */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
                                }}
                            />
                        </motion.div>
                    );
                })}

                {/* Crack lines SVG overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Crack lines */}
                    <path d="M 15,0 L 20,35 L 5,85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.15" fill="none" filter="url(#glow)" />
                    <path d="M 45,0 L 55,35 L 40,100" stroke="rgba(255,255,255,0.25)" strokeWidth="0.12" fill="none" filter="url(#glow)" />
                    <path d="M 75,0 L 70,45 L 95,70" stroke="rgba(255,255,255,0.2)" strokeWidth="0.1" fill="none" filter="url(#glow)" />
                    <path d="M 50,30 L 70,45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.08" fill="none" filter="url(#glow)" />
                    <path d="M 20,50 L 45,65" stroke="rgba(255,255,255,0.15)" strokeWidth="0.08" fill="none" filter="url(#glow)" />
                    <path d="M 55,55 L 50,70 L 35,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.1" fill="none" filter="url(#glow)" />
                    <path d="M 0,60 L 20,50 L 25,55" stroke="rgba(255,255,255,0.15)" strokeWidth="0.08" fill="none" filter="url(#glow)" />
                    <path d="M 85,80 L 100,100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.08" fill="none" filter="url(#glow)" />
                </svg>

                {/* Film grain overlay */}
                <div
                    className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Title overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-40 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold block mb-4">Archive v.04</span>
                    <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter text-white">
                        <span className="block">Fragmented</span>
                        <span className="block italic text-white/50">Realities.</span>
                    </h1>
                    <p className="mt-6 md:mt-8 text-sm md:text-base text-white/40 max-w-md mx-auto font-light">
                        Each of us lives a different life—separate worlds, connected by moments.
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 2 }}
            >
                <div className="w-6 h-10 rounded-full border border-white/30 flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-white/50 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default FragmentedRealitiesHero;
