import React from 'react';
import styles from "@/app/css/competences.module.css";

interface CompetenceBox2Props {
    imageName1: string;
    imageName2: string;
    title: string;
}

const CompetenceBoxComponentWith2Images: React.FC<CompetenceBox2Props> = ({ imageName1, imageName2, title }) => {
    const url1SRC = './assets/competences/' + imageName1 + '.svg'
    const url2SRC = './assets/competences/' + imageName2 + '.svg'

    return (
        <div className={styles.competenceboxwith2images}>
            <img
                src={url1SRC}
                alt={title}
            />
            <img
                src={url2SRC}
                alt={title}
            />
            <p>{title}</p>
        </div>
    );
};

export default CompetenceBoxComponentWith2Images;