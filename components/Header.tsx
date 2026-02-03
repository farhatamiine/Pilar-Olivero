import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    const currentView = location.pathname === '/' ? 'home' : location.pathname === '/profile' ? 'about' : location.pathname === '/contact' ? 'contact' : '';

    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 md:py-10 flex justify-between items-center text-white">
            <Link to="/" className="font-serif text-xl md:text-2xl tracking-tight cursor-pointer outline-none">
                Pilar Olivero
            </Link>
            <nav className="flex gap-4 md:gap-12 text-[10px] md:text-sm uppercase tracking-widest font-medium">
                <Link to="/" className={`hover:opacity-100 transition-opacity ${currentView === 'home' ? 'opacity-100' : 'opacity-40'}`}>
                    Archive
                </Link>
                <Link to="/profile" className={`hover:opacity-100 transition-opacity ${currentView === 'about' ? 'opacity-100' : 'opacity-40'}`}>
                    Profile
                </Link>
                <Link
                    to="/contact"
                    className={`hover:opacity-100 transition-opacity hidden sm:block ${currentView === 'contact' ? 'opacity-100' : 'opacity-40'}`}
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
