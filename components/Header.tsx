import React from 'react';

interface HeaderProps {
    onNavigate: (v: 'home' | 'about') => void;
    currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 md:py-10 flex justify-between items-center text-white">
        <button onClick={() => onNavigate('home')} className="font-serif text-xl md:text-2xl tracking-tight cursor-pointer outline-none">
            Pilar Olivero
        </button>
        <nav className="flex gap-4 md:gap-12 text-[10px] md:text-sm uppercase tracking-widest font-medium">
            <button
                onClick={() => onNavigate('home')}
                className={`hover:opacity-100 transition-opacity ${currentView === 'home' ? 'opacity-100' : 'opacity-40'}`}
            >
                Archive
            </button>
            <button
                onClick={() => onNavigate('about')}
                className={`hover:opacity-100 transition-opacity ${currentView === 'about' ? 'opacity-100' : 'opacity-40'}`}
            >
                Profile
            </button>
            <a href="mailto:hello@pilarolivero.com" className="hover:opacity-100 transition-opacity opacity-40 hidden sm:block">
                Contact
            </a>
        </nav>
    </header>
);

export default Header;
