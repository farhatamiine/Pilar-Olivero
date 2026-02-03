import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Layers, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PROJECTS } from '../const';
import { useLanguage } from '../context/LanguageContext';
import { generateProjectStory } from '../services/geminiService';
import { Language, translations } from '../translations';
import { StoryResponse } from '../types';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const ui = translations.ui[language];
    const project = PROJECTS.find((p) => p.id === id);

    const [storyData, setStoryData] = useState<StoryResponse | null>(null);
    const [loading, setLoading] = useState(false);

    // Get translated content for special projects
    const getTranslatedProject = () => {
        if (id && translations.projects[id as keyof typeof translations.projects]) {
            return translations.projects[id as keyof typeof translations.projects];
        }
        return null;
    };
    const translatedProject = getTranslatedProject();

    useEffect(() => {
        if (project) {
            setLoading(true);
            generateProjectStory(project).then((data) => {
                setStoryData(data);
                setLoading(false);
            });
        }
    }, [project]);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-3 bg-black text-white uppercase tracking-widest text-xs rounded-full hover:opacity-80 transition-opacity"
                >
                    {ui.back}
                </button>
            </div>
        );
    }

    // Check if this is the special multi-stage project
    const isMursFragiles = id === 'murs-fragiles';
    const mursFragilesData = isMursFragiles ? translations.projects['murs-fragiles'] : null;

    // Helper to get text in current language
    const getText = (obj: Record<Language, string> | undefined): string => {
        if (!obj) return '';
        return obj[language] || obj.fr || '';
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-[#FAF9F6] overflow-y-auto scroll-smooth selection:bg-black selection:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Header */}
            <div className="fixed top-0 left-0 w-full z-[110] px-4 md:px-12 py-6 md:py-10 flex justify-between items-center mix-blend-difference text-white">
                <div className="flex items-center gap-6">
                    <span className="font-mono text-[8px] md:text-[10px] opacity-40 uppercase tracking-widest hidden sm:block">Archive / {project.id}</span>
                    <h2 className="font-serif text-base md:text-xl truncate max-w-[150px] sm:max-w-none">
                        {translatedProject ? getText(translatedProject.title) : project.title}
                    </h2>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all"
                >
                    <X size={18} strokeWidth={1} />
                </button>
            </div>

            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
                <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center pointer-events-none select-none font-serif text-[30vw] md:text-[25vw] uppercase tracking-tighter">
                    {project.year}
                </div>
                <div className="relative z-10">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 md:mb-8 block font-bold">
                        {project.category}
                    </span>
                    <h1 className="font-serif text-4xl md:text-[clamp(3rem,12vw,10rem)] leading-[0.9] md:leading-[0.8] tracking-tighter italic mb-10 md:mb-12">
                        {translatedProject ? getText(translatedProject.title) : project.title}
                    </h1>
                    <ArrowDown size={24} strokeWidth={1} className="animate-bounce opacity-20 mx-auto" />
                </div>
            </section>

            {/* Description Section */}
            <section className="min-h-[50vh] md:min-h-screen py-20 md:py-32 flex flex-col items-center justify-center px-6 md:px-24 bg-white relative">
                <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
                    <div className="lg:col-span-7">
                        <p className="font-serif text-2xl md:text-6xl italic leading-[1.1] text-neutral-800 mb-10 md:mb-16">
                            {loading ? '...' : `"${storyData?.fragments[0]?.text}"`}
                        </p>
                        <div className="space-y-6 md:space-y-8 text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                            <p>
                                {translatedProject && 'description' in translatedProject
                                    ? getText((translatedProject as any).description)
                                    : project.description}
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5 bg-[#f4f3f0] p-8 md:p-12 space-y-6 md:space-y-8 border border-neutral-100">
                        <div className="flex items-center justify-between">
                            <Layers size={16} />
                            <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest">Metadata</span>
                        </div>
                        <div className="space-y-3 md:space-y-4 font-mono text-[10px] md:text-xs text-neutral-500">
                            <div className="flex justify-between border-b border-neutral-200 pb-2">
                                <span>LOCATION</span>
                                <span className="text-neutral-900 uppercase truncate ml-4">{project.location}</span>
                            </div>
                            <div className="flex justify-between border-b border-neutral-200 pb-2">
                                <span>{ui.technique.toUpperCase()}</span>
                                <span className="text-neutral-900 text-right ml-4 max-w-[200px]">
                                    {translatedProject?.technique ? getText(translatedProject.technique) : project.technicalData}
                                </span>
                            </div>
                            {translatedProject && 'dimensions' in translatedProject && (
                                <div className="flex justify-between border-b border-neutral-200 pb-2">
                                    <span>{ui.dimensions.toUpperCase()}</span>
                                    <span className="text-neutral-900 uppercase truncate ml-4">{(translatedProject as any).dimensions}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Image */}
            <section className="px-4 md:px-24 pb-20 md:pb-32">
                <div className="relative aspect-[4/3] md:aspect-video overflow-hidden border border-neutral-200 shadow-2xl">
                    <img src={project.imageUrl} className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-[4s]" alt="" />
                </div>
            </section>

            {/* ========== SPECIAL SECTION FOR MURS FRAGILES ========== */}
            {isMursFragiles && mursFragilesData && (
                <>
                    {/* Stage 1 */}
                    <section className="py-20 md:py-32 px-6 md:px-24 bg-neutral-50">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">{ui.stage} 1</span>
                                <div className="h-[1px] flex-grow bg-neutral-200" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-5xl italic mb-6">{getText(mursFragilesData.stages.stage1.title)}</h3>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-8">{getText(mursFragilesData.stages.stage1.type)}</p>
                            <div className="text-base md:text-lg text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                                {getText(mursFragilesData.stages.stage1.description)}
                            </div>
                        </div>
                    </section>

                    {/* THE EMBROIDERED POEM - Special Typography Block */}
                    <section className="py-24 md:py-48 px-6 md:px-24 bg-[#1a1a1a] text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
                            <span className="font-serif text-[20vw] italic">Yaya</span>
                        </div>
                        <div className="max-w-3xl mx-auto relative z-10">
                            <div className="flex items-center gap-4 mb-12 justify-center">
                                <div className="h-[1px] w-12 bg-white/20" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">{ui.embroideredText}</span>
                                <div className="h-[1px] w-12 bg-white/20" />
                            </div>
                            <div className="font-serif text-lg md:text-2xl italic leading-relaxed text-white/90 whitespace-pre-line text-center">
                                {mursFragilesData.embroideredPoem[language]}
                            </div>
                        </div>
                    </section>

                    {/* Stage 2: À Louer */}
                    <section className="py-20 md:py-32 px-6 md:px-24 bg-white">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">{ui.stage} 2</span>
                                <div className="h-[1px] flex-grow bg-neutral-200" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-5xl italic mb-6">{getText(mursFragilesData.stages.stage2.title)}</h3>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-8">{getText(mursFragilesData.stages.stage2.type)}</p>
                            <div className="text-base md:text-lg text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                                {getText(mursFragilesData.stages.stage2.description)}
                            </div>
                        </div>
                    </section>

                    {/* Closing Statement */}
                    <section className="py-16 md:py-24 px-6 md:px-24 bg-neutral-100">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="font-serif text-xl md:text-3xl italic text-neutral-700 leading-relaxed">
                                {getText(mursFragilesData.closingStatement)}
                            </p>
                        </div>
                    </section>
                </>
            )}

            {/* Gallery Images */}
            {project.galleryImages && (
                <section className="px-4 md:px-24 pb-40 md:pb-64 bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24">
                        {project.galleryImages.map((img, idx) => (
                            <div key={idx} className={`group flex flex-col gap-4 md:gap-6 ${idx % 2 === 1 ? 'md:mt-32' : ''}`}>
                                <div className="flex justify-between items-center text-[8px] md:text-[10px] font-mono text-neutral-300 border-b border-neutral-50 pb-2">
                                    <span>FRAME_{String(idx + 1).padStart(3, '0')}</span>
                                </div>
                                <div className="relative overflow-hidden aspect-[3/4] shadow-sm hover:shadow-2xl transition-all duration-700 bg-neutral-100">
                                    <img
                                        src={img}
                                        className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-1000"
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="bg-neutral-900 py-24 md:py-32 flex flex-col items-center justify-center text-white text-center">
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-white/30 mb-6 md:mb-8 block">Final Thought</span>
                <p className="font-serif text-2xl md:text-5xl italic max-w-2xl px-6 mb-16 md:mb-24 leading-tight">
                    {loading ? '...' : `"${storyData?.fragments[2]?.text}"`}
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="font-serif text-xl md:text-2xl italic hover:opacity-50 transition-opacity flex items-center gap-4"
                >
                    <ArrowRight className="-rotate-180 w-5 h-5 md:w-6 md:h-6" strokeWidth={1} />
                    {ui.back}
                </button>
            </footer>
        </motion.div>
    );
};

export default ProjectDetail;
