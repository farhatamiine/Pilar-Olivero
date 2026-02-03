import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface ShardConfig {
    text: string;
    clipPath: string;
    originX: number;
    originY: number;
    sensitivity: number;
}

// Irregular polygon shards for "frozen cinema" aesthetic
const SHARD_CONFIGS: ShardConfig[] = [
    {
        text: 'Frag',
        clipPath: 'polygon(0% 0%, 85% 0%, 100% 45%, 70% 100%, 0% 100%)',
        originX: 0.2,
        originY: 0.5,
        sensitivity: 1.2,
    },
    {
        text: 'men',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 60%, 80% 100%, 0% 85%)',
        originX: 0.5,
        originY: 0.3,
        sensitivity: 0.8,
    },
    {
        text: 'ted',
        clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)',
        originX: 0.8,
        originY: 0.6,
        sensitivity: 1.0,
    },
];

const SHARD_CONFIGS_LINE2: ShardConfig[] = [
    {
        text: 'Rea',
        clipPath: 'polygon(0% 0%, 100% 15%, 90% 100%, 0% 100%)',
        originX: 0.3,
        originY: 0.4,
        sensitivity: 0.9,
    },
    {
        text: 'li',
        clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 80%)',
        originX: 0.5,
        originY: 0.7,
        sensitivity: 1.3,
    },
    {
        text: 'ties',
        clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 5% 100%)',
        originX: 0.7,
        originY: 0.5,
        sensitivity: 1.1,
    },
    {
        text: '.',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        originX: 0.9,
        originY: 0.5,
        sensitivity: 0.6,
    },
];

interface FragmentedTextProps {
    className?: string;
}

const FragmentedText: React.FC<FragmentedTextProps> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Smooth spring physics for organic movement
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

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

    // Desktop: Interactive shards. Mobile: Simple static text
    const renderShard = (config: ShardConfig, index: number, isItalic: boolean = false) => {
        const rotateX = useTransform(smoothY, [-1, 1], [config.sensitivity * 3, -config.sensitivity * 3]);
        const rotateY = useTransform(smoothX, [-1, 1], [-config.sensitivity * 4, config.sensitivity * 4]);
        const translateX = useTransform(smoothX, [-1, 1], [-config.sensitivity * 8, config.sensitivity * 8]);
        const translateY = useTransform(smoothY, [-1, 1], [-config.sensitivity * 6, config.sensitivity * 6]);

        // Mobile: No transforms, just plain text
        if (isMobile) {
            return (
                <span key={`shard-${index}`} className={`${isItalic ? 'italic text-neutral-400' : ''}`}>
                    {config.text}
                </span>
            );
        }

        return (
            <motion.span
                key={`shard-${index}`}
                className={`inline-block relative ${isItalic ? 'italic text-neutral-400' : ''}`}
                style={{
                    clipPath: isHovering ? config.clipPath : 'none',
                    rotateX: isHovering ? rotateX : 0,
                    rotateY: isHovering ? rotateY : 0,
                    x: isHovering ? translateX : 0,
                    y: isHovering ? translateY : 0,
                    transformOrigin: `${config.originX * 100}% ${config.originY * 100}%`,
                    transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
            >
                <span
                    className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
                {config.text}
            </motion.span>
        );
    };

    return (
        <h1
            ref={containerRef}
            className={`${className} cursor-default select-none`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isMobile && setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: isMobile ? 'none' : '1000px' }}
        >
            {/* Line 1: Fragmented */}
            <div className="overflow-hidden">
                <motion.span
                    className="block"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {SHARD_CONFIGS.map((config, i) => renderShard(config, i, false))}
                </motion.span>
            </div>

            {/* Line 2: Realities. (italic, muted) */}
            <div className="overflow-hidden">
                <motion.span
                    className="block"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    {SHARD_CONFIGS_LINE2.map((config, i) => renderShard(config, i + 3, true))}
                </motion.span>
            </div>

            {/* Subtle crack lines on hover - desktop only */}
            {!isMobile && isHovering && (
                <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} exit={{ opacity: 0 }}>
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 20,0 L 35,50 L 15,100" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-neutral-900" />
                        <path d="M 60,0 L 55,40 L 75,70 L 50,100" stroke="currentColor" strokeWidth="0.15" fill="none" className="text-neutral-900" />
                        <path d="M 85,0 L 90,60 L 80,100" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-neutral-900" />
                    </svg>
                </motion.div>
            )}
        </h1>
    );
};

export default FragmentedText;
