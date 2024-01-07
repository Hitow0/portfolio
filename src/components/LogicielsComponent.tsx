import React from 'react';
import styles from "@/app/css/competences.module.css";
import CompetenceBoxComponent from "@/components/CompetenceBoxComponent";
import CompetenceBoxWith2Images from "@/components/CompetenceBoxWith2Images";

const LogicielsComponent = () => {
    return (
        <div className={styles.codecomponent}>
            <h3>IDE</h3>
            <div className={styles.langages}>
                <CompetenceBoxComponent imageName={'intellij'} title={'IntelliJ Idea'}/>
                <CompetenceBoxComponent imageName={'phpstorm'} title={'PhpStorm'}/>
                <CompetenceBoxComponent imageName={'pycharm'} title={'PyCharm'}/>
                <CompetenceBoxComponent imageName={'webstorm'} title={'WebStorm'}/>
                <CompetenceBoxComponent imageName={'vscode'} title={'VS Code'}/>
            </div>
            <h3>Shells</h3>
            <div className={styles.frameworks}>
                <CompetenceBoxComponent imageName={'bash'} title={'Bash'}/>
                <CompetenceBoxComponent imageName={'powershell'} title={'PowerShell'}/>
            </div>
            <h3>Outils de versioning</h3>
            <div className={styles.sgbd}>
                <CompetenceBoxComponent imageName={'git'} title={'Git'}/>
            </div>
        </div>
    );
};

export default LogicielsComponent;