'use client'
import React, {ReactNode, useState} from 'react';
import CategoryTitle from "@/components/CategoryTitle";
import CodeComponent from "@/components/CodeComponent";
import LogicielsComponent from "@/components/LogicielsComponent";
import AutresComponent from "@/components/AutresComponent";

import styles from '../app/css/competences.module.css'

const Competences = () => {

    const [selectedCategory, setSelectedCategory] = useState<string>('Code');

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    let categoryContent: ReactNode;

    switch (selectedCategory) {
        case 'Code':
            categoryContent = <CodeComponent/>;
            break;
        case 'Logiciels':
            categoryContent = <LogicielsComponent/>
            break;
        case 'Autres':
            categoryContent = <AutresComponent/>
            break;
        default:
            categoryContent = <CodeComponent/>
            break;
    }

    return (
        <div id={'competences'} className={styles.container}>
            <CategoryTitle categoryTitle={'Compétences'} subCategoryTitle={selectedCategory}/>
            <div className={styles.competences}>
                {categoryContent}
                <div className={styles.buttoncategory}>
                    <button onClick={() => handleCategoryClick('Code')}
                            className={selectedCategory === 'Code' ? styles.selectedButton : ''}>
                        <img src={'/assets/competences/button icon/code icon.svg'} alt={"code"}/>
                        Code
                    </button>
                    <button onClick={() => handleCategoryClick('Logiciels')}
                            className={selectedCategory === 'Logiciels' ? styles.selectedButton : ''}>
                        <img src={'/assets/competences/button icon/layer icon.svg'} alt={"logiciels"}/>
                        Logiciels
                    </button>
                    <button onClick={() => handleCategoryClick('Autres')}
                            className={selectedCategory === 'Autres' ? styles.selectedButton : ''}>
                    <img src={'/assets/competences/button icon/gear icon.svg'} alt={"autre"}/>
                        Autres
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Competences;