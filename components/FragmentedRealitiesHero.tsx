import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useMemo, useRef, useState } from 'react';

// Different "realities" - diverse life scenes (optimized image sizes)
const REALITY_IMAGES = [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=60&w=1200', // Friends gathering
    'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=60&w=1200', // Person meditating
    'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=60&w=1200', // Street scene
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=1200', // Portrait
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=60&w=1200', // Working at desk
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=60&w=1200', // Dancing
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=60&w=1200', // Classroom
];

// Expanded glass shards that cover 100% of viewport - NO GAPS
interface ShardConfig {
    clipPath: string;
    imageIndex: number;
    translateFactor: { x: number; y: number };
    rotateFactor: number;
    zIndex: number;
}

const GLASS_SHARDS: ShardConfig[] = [
    // Large left shard (covers left portion)
    {
        clipPath: 'polygon(0% 0%, 35% 0%, 45% 50%, 30% 100%, 0% 100%)',
        imageIndex: 0,
        translateFactor: { x: 0.5, y: 0.3 },
        rotateFactor: 0.8,
        zIndex: 10,
    },
    // Top center shard
    {
        clipPath: 'polygon(30% 0%, 65% 0%, 55% 45%, 40% 55%)',
        imageIndex: 1,
        translateFactor: { x: -0.4, y: 0.6 },
        rotateFactor: -0.5,
        zIndex: 9,
    },
    // Top right shard
    {
        clipPath: 'polygon(60% 0%, 100% 0%, 100% 35%, 70% 50%, 50% 40%)',
        imageIndex: 2,
        translateFactor: { x: -0.6, y: 0.5 },
        rotateFactor: 0.4,
        zIndex: 8,
    },
    // Right side shard
    {
        clipPath: 'polygon(65% 45%, 100% 30%, 100% 75%, 75% 70%)',
        imageIndex: 3,
        translateFactor: { x: -0.5, y: -0.4 },
        rotateFactor: -0.6,
        zIndex: 7,
    },
    // Bottom right shard
    {
        clipPath: 'polygon(55% 60%, 80% 65%, 100% 70%, 100% 100%, 50% 100%)',
        imageIndex: 4,
        translateFactor: { x: -0.4, y: -0.5 },
        rotateFactor: 0.5,
        zIndex: 6,
    },
    // Bottom left shard
    {
        clipPath: 'polygon(0% 100%, 55% 100%, 50% 55%, 35% 50%, 0% 65%)',
        imageIndex: 5,
        translateFactor: { x: 0.6, y: -0.4 },
        rotateFactor: -0.4,
        zIndex: 5,
    },
    // Center connector shard (fills any remaining gaps)
    {
        clipPath: 'polygon(35% 45%, 55% 40%, 60% 60%, 45% 65%)',
        imageIndex: 6,
        translateFactor: { x: 0.3, y: 0.3 },
        rotateFactor: 0.3,
        zIndex: 11,
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

    // Optimized spring config for smoother, less CPU-intensive animations
    const springConfig = useMemo(() => ({ stiffness: 30, damping: 30, mass: 1 }), []);
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
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

    // Memoize transforms for each shard
    const shardTransforms = useMemo(
        () =>
            GLASS_SHARDS.map((shard) => ({
                translateX: [-shard.translateFactor.x * 12, shard.translateFactor.x * 12],
                translateY: [-shard.translateFactor.y * 10, shard.translateFactor.y * 10],
                rotate: [-shard.rotateFactor * 2, shard.rotateFactor * 2],
            })),
        []
    );

    return (
        <section
            ref={containerRef}
            className={`relative w-full h-screen overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isMobile && setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Base background layer - ensures no black shows */}
            <div
                className="absolute inset-0 bg-cover bg-center grayscale"
                style={{
                    backgroundImage: `url(${REALITY_IMAGES[0]})`,
                    transform: 'scale(1.05)', // Slight overscale to prevent edge gaps
                }}
            />

            {/* Glass shards with different reality images */}
            <div className="absolute inset-0">
                {GLASS_SHARDS.map((shard, index) => {
                    const transforms = shardTransforms[index];
                    const translateX = useTransform(smoothX, [-1, 1], transforms.translateX);
                    const translateY = useTransform(smoothY, [-1, 1], transforms.translateY);
                    const rotate = useTransform(smoothX, [-1, 1], transforms.rotate);

                    return (
                        <motion.div
                            key={`shard-${index}`}
                            className="absolute inset-0 will-change-transform"
                            style={{
                                clipPath: shard.clipPath,
                                x: isHovering && !isMobile ? translateX : 0,
                                y: isHovering && !isMobile ? translateY : 0,
                                rotate: isHovering && !isMobile ? rotate : 0,
                                zIndex: shard.zIndex,
                                transform: 'translateZ(0)', // Force GPU acceleration
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: index * 0.08,
                                ease: 'easeOut',
                            }}
                        >
                            {/* Reality image - full coverage */}
                            <div
                                className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center grayscale"
                                style={{
                                    backgroundImage: `url(${REALITY_IMAGES[shard.imageIndex]})`,
                                }}
                            />

                            {/* Subtle glass reflection */}
                            <div
                                className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{
                                    background: `linear-gradient(${120 + index * 30}deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)`,
                                }}
                            />
                        </motion.div>
                    );
                })}

                {/* Crack lines SVG overlay - simplified for performance */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-20"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{ transform: 'translateZ(0)' }}
                >
                    <path d="M 35,0 L 40,50 L 30,100" stroke="rgba(255,255,255,0.25)" strokeWidth="0.1" fill="none" />
                    <path d="M 55,0 L 50,45 L 55,55 L 50,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.08" fill="none" />
                    <path d="M 100,35 L 65,50 L 55,60" stroke="rgba(255,255,255,0.15)" strokeWidth="0.08" fill="none" />
                    <path d="M 0,65 L 35,50" stroke="rgba(255,255,255,0.12)" strokeWidth="0.06" fill="none" />
                    <path d="M 75,70 L 100,75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.05" fill="none" />
                </svg>

                {/* Film grain - optimized */}
                <div
                    className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none z-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        transform: 'translateZ(0)',
                    }}
                />
            </div>

            {/* Title overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-40 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white/50 font-bold block mb-4">Archive v.04</span>
                    <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
                        <span className="block">Fragmented</span>
                        <span className="block italic text-white/60">Realities.</span>
                    </h1>
                    <p className="mt-6 md:mt-8 text-sm md:text-base text-white/50 max-w-md mx-auto font-light">
                        Each of us lives a different life—separate worlds, connected by moments.
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.5 }}
            >
                <div className="w-6 h-10 rounded-full border border-white/40 flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-white/60 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default FragmentedRealitiesHero;
