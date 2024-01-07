'use client'
import React, {useState} from 'react';
import CategoryTitle from "@/components/CategoryTitle";
import styles from '../app/css/apropos.module.css'
import Modal from "@/components/ModalComponent";
const APropos = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const handleImageClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleDownloadCV = () => {
        window.open('/CV.pdf', '_blank');
    };

    return (
        <div id={"apropos"}>
            <CategoryTitle categoryTitle={"A propos"}></CategoryTitle>
            <div className={styles.informationcontainer}>
                <img className={styles.image} src="/assets/navbar/photo.png" alt="Nicolas BLART"/>
                <p className={styles.paragraph}>
                    Je suis un étudiant en Informatique, je suis actuellement en seconde année d’un BUT Informatique à Lens.
                    <br/><br/>
                    Je suis actuellement à la recherche d’un stage d’une durée de 8 à 10 semaines à partir du 15 avril 2024.
                </p>
            </div>
            <div className={styles.contactcontainer}>
                <div className={styles.email}>
                    <img src={'/assets/apropos/email icon.svg'} alt={"email"}/>
                    <p>
                        <a className={styles.attributemail} href={"mailto:blrt.nicolas@gmail.com"}>
                            blrt.nicolas@gmail.com
                        </a>
                    </p>
            </div>
            <div className={styles.cv}>
                    <img src={'/assets/apropos/cv icon.svg'} alt={"cv"}/>
                    <p style={{cursor: "pointer" }} onClick={handleImageClick}>Télécharger le CV</p>
                </div>
                <div className={styles.phone}>
                    <img src={'/assets/apropos/phone icon.svg'} alt={"phone number"}/>
                    <p>+33 7 81 66 13 08</p>
                </div>
                <div className={styles.mobilite}>
                    <img src={'/assets/apropos/mobilité icon.svg'} alt={"mobilité"}/>
                    <p>Mobilité : Zone Béthune - Bruay Lille (en train)</p>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Télécharger le CV</h2>
                <button onClick={handleDownloadCV}>Télécharger le CV</button>
            </Modal>
        </div>


    );
};

export default APropos;