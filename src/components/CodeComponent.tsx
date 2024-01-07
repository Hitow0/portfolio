import React from 'react';
import styles from '../app/css/competences.module.css'
import CompetenceBoxComponent from "@/components/CompetenceBoxComponent";
import CompetenceBoxWith2Images from "@/components/CompetenceBoxWith2Images";

const CodeComponent = () => {
    return (
        <div className={styles.codecomponent}>
            <h3>Langages de programmation</h3>
            <div className={styles.langages}>
                <CompetenceBoxComponent imageName={'python'} title={'Python'}/>
                <CompetenceBoxComponent imageName={'java'} title={'Java'}/>
                <CompetenceBoxWith2Images imageName1={'js'} title={'JavaScript\nTypeScript'} imageName2={'typescript'}/>
                <CompetenceBoxComponent imageName={'php'} title={'PHP'}/>
                <CompetenceBoxWith2Images imageName1={'html'} title={'HTML/CSS'} imageName2={'css'}/>
            </div>
            <h3>Frameworks</h3>
            <div className={styles.frameworks}>
                <CompetenceBoxComponent imageName={'react'} title={'React'}/>
                <CompetenceBoxComponent imageName={'laravel'} title={'Laravel'}/>
                <CompetenceBoxComponent imageName={'flask'} title={'Flask'}/>
                <CompetenceBoxComponent imageName={'nextjs'} title={'NextJS'}/>
            </div>
            <h3>SGBD</h3>
            <div className={styles.sgbd}>
                <CompetenceBoxComponent imageName={'mysql'} title={'MySQL'}/>
                <CompetenceBoxComponent imageName={'postgresql'} title={'PostgreSQL'}/>
            </div>
        </div>
    );
};

export default CodeComponent;