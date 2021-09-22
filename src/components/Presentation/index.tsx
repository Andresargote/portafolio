import styles from "../../styles/Presentation.module.css";

export default function Presentation() {
    return (
        <>
            <h1 className={styles.title}>Hey👋 me llamo Andrés y soy fullstack developer</h1>
            <p className={styles.paragraph}>Actualmente me encuentro trabajando en <a className={styles.artesan} href="https://artesanshop.com/" target="_blank" rel="noreferrer">Artesan</a></p>
        </>
    );
}