import React from 'react';
import Timeline from "@/components/Timeline";
import styles from '../app/css/parcours.module.css'
import CategoryTitle from "@/components/CategoryTitle";

const Parcours = () => {
    return (
        <div>
            <CategoryTitle categoryTitle={"Parcours"}/>
            <div className={styles.timeline}>
                <Timeline/>
                {/*SOON PARCOURS PROFESSIONNEL*/}
            </div>
        </div>
    );
};

export default Parcours;