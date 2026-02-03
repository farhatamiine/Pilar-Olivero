import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="px-6 py-20 text-white md:px-12 md:py-32 bg-neutral-900">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-right">
                <div className="space-y-6 text-center md:space-y-8 md:text-left">
                    <h3 className="font-serif text-4xl italic underline md:text-7xl opacity-80 decoration-white/10 underline-offset-8">Auteur.</h3>
                    <a href="mailto:hello@pilarolivero.com" className="block text-xl font-light transition-opacity md:text-2xl hover:opacity-50">
                        hello@pilarolivero.com
                    </a>
                </div>
                <div>
                    <div className="font-serif text-xl md:text-2xl">Pilar Olivero</div>
                    <div className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/30">BUENOS AIRES — 2024</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
