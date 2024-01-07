import styles from '../app/css/page.module.css'

export default function MainPage() {
    return (
        <main className={styles.main} id={'accueil'}>
            <div className={styles.accueil}>
                <h1>Nicolas BLART</h1>
                <p>Etudiant en Informatique</p>
            </div>
        </main>
    )
}
