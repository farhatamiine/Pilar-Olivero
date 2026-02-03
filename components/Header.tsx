import { motion, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language, translations } from '../translations';

const Header: React.FC = () => {
    const location = useLocation();
    const { language, setLanguage } = useLanguage();
    const ui = translations.ui[language];
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const { scrollY } = useScroll();

    // Track scroll for blur effect
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentView = location.pathname === '/' ? 'home' : location.pathname === '/profile' ? 'about' : location.pathname === '/contact' ? 'contact' : '';

    const languages: Language[] = ['es', 'fr', 'en'];

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-12 md:py-10 flex justify-between items-center transition-all duration-500 ${
                hasScrolled ? 'text-neutral-900' : 'text-white mix-blend-difference'
            }`}
        >
            {/* Blur + Grain Background (appears on scroll) */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`} style={{ pointerEvents: 'none' }}>
                {/* Blur layer */}
                <div className="absolute inset-0 backdrop-blur-md bg-[#FAF9F6]/70" />

                {/* Grain texture overlay */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-200" />
            </div>

            {/* Content */}
            <Link to="/" className="relative font-serif text-lg md:text-2xl tracking-tight cursor-pointer outline-none z-10">
                Pilar Olivero
            </Link>

            <div className="relative flex items-center gap-4 md:gap-12 z-10">
                {/* Navigation */}
                <nav className="flex gap-3 md:gap-8 text-[9px] md:text-sm uppercase tracking-wider md:tracking-widest font-medium">
                    <Link to="/" className={`hover:opacity-100 transition-opacity ${currentView === 'home' ? 'opacity-100' : 'opacity-40'}`}>
                        {ui.archive}
                    </Link>
                    <Link to="/profile" className={`hover:opacity-100 transition-opacity ${currentView === 'about' ? 'opacity-100' : 'opacity-40'}`}>
                        {ui.profile}
                    </Link>
                    <Link
                        to="/contact"
                        className={`hover:opacity-100 transition-opacity hidden sm:block ${currentView === 'contact' ? 'opacity-100' : 'opacity-40'}`}
                    >
                        {ui.contact}
                    </Link>
                </nav>

                {/* Language Switcher - Compact on mobile */}
                <div className="relative">
                    {/* Mobile: Dropdown */}
                    <button
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className="md:hidden flex items-center gap-1 text-[9px] uppercase tracking-wider font-medium opacity-60 hover:opacity-100 transition-opacity"
                    >
                        {language.toUpperCase()}
                        <ChevronDown size={12} className={`transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {langMenuOpen && (
                        <div
                            className={`md:hidden absolute right-0 top-6 rounded-lg py-2 px-3 flex flex-col gap-2 ${
                                hasScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white/10 backdrop-blur-md'
                            }`}
                        >
                            {languages
                                .filter((l) => l !== language)
                                .map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setLanguage(lang);
                                            setLangMenuOpen(false);
                                        }}
                                        className="text-[10px] uppercase tracking-wider hover:opacity-100 opacity-60 transition-opacity"
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                        </div>
                    )}

                    {/* Desktop: Inline */}
                    <div className="hidden md:flex gap-2 text-[10px] uppercase tracking-widest font-medium opacity-60">
                        {languages.map((lang, index) => (
                            <React.Fragment key={lang}>
                                <button
                                    onClick={() => setLanguage(lang)}
                                    className={`hover:opacity-100 transition-opacity cursor-pointer ${language === lang ? 'opacity-100' : 'opacity-40'}`}
                                >
                                    {lang.toUpperCase()}
                                </button>
                                {index < languages.length - 1 && <span className="opacity-30">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
