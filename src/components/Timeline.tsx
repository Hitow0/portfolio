import React from 'react';

import styles from '../app/css/parcours.module.css'


const Timeline = () => {
    return (
        <div className={styles.container}>
            <div className={styles.resumeitem}>
                <h4>BUT Informatique</h4>
                <h5>En cours</h5>
                <p>
                    <em>IUT de Lens</em>
                </p>
                <p>
                    Développement d'applications, conduites de projets et travaux en équipe, gestions de données.
                </p>

            </div>
            <div className={styles.resumeitem}>
                <h4>Baccalauréat technologique STI2D SIN</h4>
                <h5>2018-2022</h5>
                <p>
                    <em>Lycée André Malraux, Béthune</em>
                </p>
                <p>
                    Travaux sur les algorithmes et la conception tout en respectant le développement durable.
                </p>
            </div>
        </div>
    );
};

export default Timeline;