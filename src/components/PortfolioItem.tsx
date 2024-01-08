import React, { useState } from 'react';
import { portfolioData, readnLiveData, flatcraftData, raytracerData } from './projectData';
import ProjectModal from "@/components/ProjectModal";
import styles from '../app/css/project.module.css'

interface Project {
    title: string;
    image: string;
    langage: string;
    finished: boolean;
    teamSize: number;
    description: string;
    githubLink: string;
}

interface PortfolioItemProps {
    projectKey: string;
}

const projectDataMap: { [key: string]: Project } = {
    portfolio: portfolioData,
    readnLive: readnLiveData,
    flatcraft: flatcraftData,
    raytracer: raytracerData,
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ projectKey }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const project = projectDataMap[projectKey];

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const className = project.title

    return (
        <>
            <div className={styles[project.title]} onClick={openModal}>
                <img src={project.image} alt={project.title} />
                <span>{project.title}</span>
            </div>

            {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
        </>
    );
};

export default PortfolioItem;
