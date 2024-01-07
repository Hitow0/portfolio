import React from 'react';
import styles from '../app/css/competences.module.css'
import Bar from "@/components/BarComponent";

interface CompetenceBoxProps {
    imageName: string;
    title: string;
    pourcentage: number;
    desc: string;
}

const CompetenceBoxWithBarComponent: React.FC<CompetenceBoxProps> = ({ imageName, title, pourcentage, desc }) => {
    const urlSRC = '/assets/competences/' + imageName + '.svg'

    return (
        <div className={styles.competenceboxwithbar}>
            <img
                src= {urlSRC}
                alt={title}
            />
            <p>{title}</p>
            <p style={{fontFamily: 'Poppins, sans serif', fontWeight: '400', fontStyle: 'italic'}}>{desc}</p>
            <Bar percentage={pourcentage}/>
        </div>
    );
};
export default CompetenceBoxWithBarComponent;
