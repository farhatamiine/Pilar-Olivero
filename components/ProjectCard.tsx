import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
    return (
        <div className="relative group cursor-pointer w-full" onClick={() => onClick(project)}>
            <div className="flex justify-between items-center mb-2 px-1 text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold">
                <span>FRAME_{index + 1}</span>
                <span>{project.year}</span>
            </div>
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-neutral-900 border-[1px] border-white/10">
                <img
                    src={project.imageUrl}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1.5s] ease-out"
                    alt=""
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Text Overlay */}
                <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 z-20 max-w-[90%]">
                    <h3 className="font-serif text-lg md:text-3xl text-white italic tracking-wide truncate">{project.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
