import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language, translations } from '../translations';

const Header: React.FC = () => {
    const location = useLocation();
    const { language, setLanguage } = useLanguage();
    const ui = translations.ui[language];

    const currentView = location.pathname === '/' ? 'home' : location.pathname === '/profile' ? 'about' : location.pathname === '/contact' ? 'contact' : '';

    const languages: Language[] = ['es', 'fr', 'en'];

    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 md:py-10 flex justify-between items-center text-white">
            <Link to="/" className="font-serif text-xl md:text-2xl tracking-tight cursor-pointer outline-none">
                Pilar Olivero
            </Link>

            <div className="flex items-center gap-6 md:gap-12">
                {/* Navigation */}
                <nav className="flex gap-4 md:gap-8 text-[10px] md:text-sm uppercase tracking-widest font-medium">
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

                {/* Language Switcher */}
                <div className="flex gap-2 text-[10px] uppercase tracking-widest font-medium opacity-60">
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
        </header>
    );
};

export default Header;
