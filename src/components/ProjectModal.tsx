import React from 'react';
import styles from '../app/css/modalstyle.module.css'

interface ModalProps {
    project: {
        title: string;
        image: string;
        langage: string;
        finished: boolean;
        teamSize: number;
        description: string;
        githubLink: string;
    };
    onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
    return (
        <div className={styles['modal-overlay']} onClick={onClose}>
            <div className={styles.modal}>
                <img src={project.image} alt={project.title} />
                <h2>{project.title}</h2>
                <p>{project.finished ? 'Projet terminé' : 'Projet en cours'}</p>
                <p>Réalisé en groupe de : {project.teamSize}</p>
                <p>Langage : {project.langage}</p>
                <p className={styles.scrollableDescription}>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    Voir sur GitHub
                </a>
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default ProjectModal;