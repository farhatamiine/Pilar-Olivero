import { motion } from 'framer-motion';
import { BookOpen, Mic2 } from 'lucide-react';
import React from 'react';
import Footer from '../components/Footer';

const Profile: React.FC = () => {
    return (
        <motion.div
            className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* 1. Artist Hero */}
            <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left pointer-events-none opacity-[0.03] select-none">
                    <h1 className="text-[30vw] md:text-[25vw] font-serif leading-none whitespace-nowrap uppercase tracking-tighter">THE OBSERVER</h1>
                </div>

                <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end lg:pr-12 mb-12 lg:mb-0">
                    <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden shadow-2xl border border-black/5 p-2 bg-white">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200"
                            className="w-full h-full object-cover grayscale contrast-110"
                            alt="Pilar Olivero"
                        />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-[8px] md:text-[10px] text-white mix-blend-difference font-mono uppercase tracking-[0.2em]">
                            Bio_ID: PO-8872 / ARG
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 relative z-10 text-center lg:text-left">
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">Profile No. 01</span>
                        <div className="h-[1px] w-8 md:w-12 bg-neutral-900" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-8xl leading-[0.9] tracking-tighter">
                        Pilar <br /> <span className="italic text-neutral-400">Olivero.</span>
                    </h2>
                    <div className="space-y-4 md:space-y-6 max-w-md mx-auto lg:mx-0">
                        <p className="text-base md:text-xl text-neutral-800 font-light leading-relaxed">
                            Artista multidisciplinaria argentina, especializada en fotografía, procesos alternativos y bordado. Actualmente trabaja en
                            fotografía híbrida, arte textil e instalaciones.
                        </p>
                        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                            Recibió becas del Fondo Nacional de las Artes (2014-2016). Fue seleccionada por la galería Rivoli 59 en París para formar parte de
                            su residencia en 2022. Actualmente reside en París, finaliza su formación en Arte Terapia y cursa l’ecole Lesage.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy & Manifesto */}
            <section className="bg-neutral-900 text-white py-24 md:py-64 flex flex-col items-center justify-center text-center px-6">
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8 md:mb-12">Filosofía</span>
                <h3 className="font-serif text-3xl md:text-6xl italic opacity-50 mb-8 md:mb-12 max-w-4xl leading-tight">
                    "Considero a la fotografía como cine congelado."
                </h3>
                <p className="max-w-2xl text-base md:text-lg text-neutral-400 font-light leading-relaxed">
                    Coordinó talleres ‘’Crear con luz’’ y espacios de arteterapia. Miembro de Artivistas, galería de arte de América Latina en París, Francia.
                    Sus procesos exploran el origen de las imágenes y la fragilidad del espacio doméstico.
                </p>
            </section>

            {/* 3. Exhibition History & Bibliography */}
            <section className="py-20 md:py-32 px-4 md:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-400 font-bold">Exposiciones individuales</span>
                                <div className="h-[1px] w-8 md:w-12 bg-neutral-900" />
                            </div>
                            <div className="space-y-6 md:space-y-8">
                                {[
                                    { year: '2022', title: 'VOLVER AL GESTO', loc: 'Galería Rivoli 59, París, Francia' },
                                    { year: '2017', title: 'EL TORSO NO MIENTE', loc: 'MUBA, Chaco' },
                                    { year: '2016', title: 'DILUCIDAR', loc: 'Museo de Medios de Comunicación, Chaco' },
                                    { year: '2016', title: 'FRAGMENTOS DE LUZ', loc: 'Sala del Sol, C.C.U. UNNE, Corrientes' },
                                    { year: '2015', title: 'LINEAL', loc: 'Resistencia, Chaco' },
                                ].map((ex, i) => (
                                    <div
                                        key={i}
                                        className="border-b border-neutral-100 pb-6 md:pb-8 flex justify-between items-baseline group hover:px-2 md:hover:px-4 transition-all duration-500"
                                    >
                                        <div className="flex flex-col min-w-0 pr-4">
                                            <span className="font-serif text-xl md:text-3xl group-hover:italic truncate">{ex.title}</span>
                                            <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-neutral-300 truncate">
                                                {ex.loc}
                                            </span>
                                        </div>
                                        <span className="font-mono text-xs md:text-sm text-neutral-400 whitespace-nowrap">{ex.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-400 font-bold">Exposiciones colectivas</span>
                                <div className="h-[1px] w-8 md:w-12 bg-neutral-900" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
                                {[
                                    'PANIC EROTIC - Maison Bruneau, París (2022)',
                                    'ABSTRACT – Galería Art.number23, Atenas (2022)',
                                    'INTERFAZ - Museo de Medios, Chaco (2016)',
                                    'POR LAS RAMAS - Limbo Galería, Corrientes',
                                    'AMOR ESTENOPEICO - Casa de las Culturas, Chaco',
                                    'CÚMULUS - Museo Rene Brusau, Chaco (2015)',
                                ].map((ex, i) => (
                                    <div key={i} className="border-l-2 border-neutral-50 pl-4 md:pl-6 py-1 md:py-2 min-w-0">
                                        <p className="text-xs md:text-sm text-neutral-800 font-medium truncate">{ex.split(' - ')[0]}</p>
                                        <p className="text-[8px] md:text-[10px] uppercase text-neutral-400 truncate">{ex.split(' - ')[1] || ''}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-12">
                        <div className="bg-[#f4f3f0] p-8 md:p-12 space-y-8 md:space-y-10 border border-neutral-100">
                            <div className="flex items-center gap-4">
                                <BookOpen size={20} className="text-neutral-400 w-[18px] h-[18px] md:w-5 md:h-5" />
                                <span className="text-[10px] uppercase font-bold tracking-widest">Publicaciones</span>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <span className="block text-[8px] md:text-[10px] uppercase text-neutral-400 font-bold mb-1">2023</span>
                                    <p className="text-xs md:text-sm font-medium italic">Diez Rollos Treinta y Cinco Milímetros (Libro, Paris)</p>
                                </div>
                                <div>
                                    <span className="block text-[8px] md:text-[10px] uppercase text-neutral-400 font-bold mb-1">2022</span>
                                    <p className="text-xs md:text-sm font-medium italic">Absence Fragile (Artzine, Paris)</p>
                                </div>
                                <div>
                                    <span className="block text-[8px] md:text-[10px] uppercase text-neutral-400 font-bold mb-1">2017</span>
                                    <p className="text-xs md:text-sm font-medium italic">Impermanencia (Artzine, Melancolía en Saturno)</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 space-y-6 md:space-y-8 border border-neutral-100">
                            <div className="flex items-center gap-4">
                                <Mic2 size={20} className="text-neutral-400 w-[18px] h-[18px] md:w-5 md:h-5" />
                                <span className="text-[10px] uppercase font-bold tracking-widest">Disertaciones</span>
                            </div>
                            <div className="space-y-4 md:space-y-6">
                                <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed italic">
                                    1° Festival de fotografía analógica «PH- Patagonia». Charla: ‘’Crear con luz’’. Rio Gallegos (2016).
                                </p>
                                <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed italic">
                                    Ciclo de Charlas FotoclubCHACO; ‘’Fotografía analógica y procesos alternativos’’. CE.Cu.AL (2016).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </motion.div>
    );
};

export default Profile;
