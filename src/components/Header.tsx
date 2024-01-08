'use client'
import React, {useEffect, useState} from 'react';
import styles from '../app/css/navbar.module.css'
import Modal from './ModalComponent';

interface NavbarProps {
    isExpanded: boolean;
    onToggle: () => void;
}

const Header = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const [isNavReduced, setNavReduced] = useState(false);

    const handleImageClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleDownloadCV = () => {
        window.open('./CV.pdf', '_blank');
    };

    const handleToggleNav = () => {
        setNavReduced(!isNavReduced);
    };

    useEffect(() => {
        const handleResize = () => {
            setNavReduced(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const scrollToAccueil = () => {
            const accueilElement = document.getElementById('accueil');

            if (accueilElement) {
                accueilElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const linkElement = document.getElementById('accueil-link');
        if (linkElement) {
            linkElement.addEventListener('click', scrollToAccueil);
        }

        return () => {
            if (linkElement) {
                linkElement.removeEventListener('click', scrollToAccueil);
            }
        };
    }, []);

    useEffect(() => {
        const scrollToApropos = () => {
            const accueilElement = document.getElementById('apropos');

            if (accueilElement) {
                accueilElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const linkElement = document.getElementById('apropos-link');
        if (linkElement) {
            linkElement.addEventListener('click', scrollToApropos);
        }

        return () => {
            if (linkElement) {
                linkElement.removeEventListener('click', scrollToApropos);
            }
        };
    }, []);

    useEffect(() => {
        const scrollToApropos = () => {
            const accueilElement = document.getElementById('competences');

            if (accueilElement) {
                accueilElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const linkElement = document.getElementById('competences-link');
        if (linkElement) {
            linkElement.addEventListener('click', scrollToApropos);
        }

        return () => {
            if (linkElement) {
                linkElement.removeEventListener('click', scrollToApropos);
            }
        };
    }, []);

    useEffect(() => {
        const scrollToApropos = () => {
            const accueilElement = document.getElementById('parcours');

            if (accueilElement) {
                accueilElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const linkElement = document.getElementById('parcours-link');
        if (linkElement) {
            linkElement.addEventListener('click', scrollToApropos);
        }

        return () => {
            if (linkElement) {
                linkElement.removeEventListener('click', scrollToApropos);
            }
        };
    }, []);

    useEffect(() => {
        const scrollToApropos = () => {
            const accueilElement = document.getElementById('projets');

            if (accueilElement) {
                accueilElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const linkElement = document.getElementById('projets-link');
        if (linkElement) {
            linkElement.addEventListener('click', scrollToApropos);
        }

        return () => {
            if (linkElement) {
                linkElement.removeEventListener('click', scrollToApropos);
            }
        };
    }, []);

    return (
        <div className={`${isNavReduced ? styles.navbarReduced : styles.navbar}`}>
            <div className={styles.profile_picture}>
                <img src="./assets/navbar/photo.png" alt="Nicolas BLART"/>
            </div>
            <div className={styles.name}>
                Nicolas BLART
            </div>
            <div className={styles.cv_icon}>
                <img src={"./assets/navbar/CV.svg"} alt={"CV icon"} onClick={handleImageClick}/>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Télécharger le CV</h2>
                <button onClick={handleDownloadCV}>Télécharger le CV</button>
            </Modal>

            <div id={"accueil-link"} className={styles.navbutton}>
                <img src={"./assets/navbar/accueil.svg"} alt={"Accueil"}/>
                <p>Accueil</p>
            </div>

            <div id={"apropos-link"} className={styles.navbutton}>
                <img src={"./assets/navbar/apropos.svg"} alt={"A propos"}/>
                <p>A propos</p>
            </div>

            <div id={"competences-link"} className={styles.navbutton}>
                <img src={"./assets/navbar/competences.svg"} alt={"Compétences"}/>
                <p>Compétences</p>
            </div>
            <div id={"parcours-link"} className={styles.navbutton}>
                <img src={"./assets/navbar/parcours.svg"} alt={"Parcours"}/>
                <p>Parcours</p>
            </div>
            <div id={"projets-link"} className={styles.navbutton}>
                <img src={"./assets/navbar/project.svg"} alt={"Projets"}/>
                <p>Projets</p>
            </div>

            <div className={styles.switch_icon} onClick={handleToggleNav}>
                <img src={"./assets/navbar/switch.svg"} alt={"Switch icon"}/>
            </div>
        </div>
    );
};

export default Header;