import React, { useState } from 'react';
import ProjectModal from "@/components/ProjectModal";
import styles from '../app/css/project.module.css'
import { projects } from "@/components/projectData"


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
    index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ projectKey, index }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const project = projects[index];

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const classNames = `${styles.projectItem} ${styles[project.title]} ${index % 2 === 1 ? styles.projectItemWithMarginTop : ''}`;

    return (
        <>
            <div className={classNames} onClick={openModal}>
                <img src={project.image} alt={project.title} />
                <span>{project.title}</span>
            </div>

            {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
        </>
    );
};

export default PortfolioItem;