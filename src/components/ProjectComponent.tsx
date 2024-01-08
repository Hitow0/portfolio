'use client'
import React, {useState} from 'react';
import CategoryTitle from "@/components/CategoryTitle";
import styles from '../app/css/project.module.css'
import PortfolioItem from "@/components/PortfolioItem";

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
                <PortfolioItem projectKey="portfolio" />
                <PortfolioItem projectKey="readnLive" />
                <PortfolioItem projectKey="flatcraft" />
                <PortfolioItem projectKey="raytracer" />
            </div>
        </div>
    );
};

export default ProjectComponent;