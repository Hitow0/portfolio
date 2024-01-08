import React from 'react';
import styles from "@/app/css/competences.module.css";
import CompetenceBoxComponent from "@/components/CompetenceBoxComponent";
import CompetenceBoxWithBarComponent from "@/components/CompetenceBoxComponentWithBar";

const AutresComponent = () => {

    const qualities = ['Autonome', 'Travail d\'équipe', 'Rigoureux', 'Sérieux', 'Curieux', 'Polyvalent'];

    return (
        <div className={styles.codecomponent}>
            <h3>Langues</h3>
            <div className={styles.langages}>
                <CompetenceBoxWithBarComponent imageName={'france'} title={'Français'} pourcentage={100} desc={'Langue maternelle'}/>
                <CompetenceBoxWithBarComponent imageName={'uk'} title={'Anglais'} pourcentage={65} desc={'Niveau B2'}/>
                <CompetenceBoxWithBarComponent imageName={'espagne'} title={'Espagnol'} pourcentage={30} desc={'Niveau A2'}/>
            </div>
            <h3>Soft skills</h3>
            <div className={styles.softskills}>
                {qualities.map((quality, index) => (
                    <div key={index} className={styles.qualityContainer}>
                        <img src={'./assets/competences/star.svg'} alt={'>'}/>
                        <p>{quality}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutresComponent;