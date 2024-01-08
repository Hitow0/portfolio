import React from 'react';
import styles from '../app/css/competences.module.css'

interface CompetenceBoxProps {
    imageName: string;
    title: string;
}

const CompetenceBoxComponent: React.FC<CompetenceBoxProps> = ({ imageName, title }) => {
    const urlSRC = './assets/competences/' + imageName + '.svg'

    return (
        <div className={styles.competencebox}>
            <img
                src= {urlSRC}
                alt={title}
            />
            <p>{title}</p>
        </div>
    );
};
export default CompetenceBoxComponent;
