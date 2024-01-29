'use client'
import React, {useState} from 'react';
import styles from '../app/css/project.module.css'
import CategoryTitle from "@/components/CategoryTitle";
import PortfolioItem from "@/components/PortfolioItem";
import { projects } from "@/components/projectData"

const ProjectComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div id={'projets'}>
            <CategoryTitle categoryTitle={'Projets'}/>
            <div className={styles.projectgrid}>
                {projects.map((project, index) => (
                    <PortfolioItem
                        key={project.projectKey}
                        projectKey={project.projectKey}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectComponent;