/* other imoprts */
import styles from './OverlayWarning.module.css'


const OverlayWarning = () => {
    return <div className={styles.overlay}>
        <div className={styles.content}>
            <span className={styles.title}>You are logged in with "Mobile" or "Tablet" device</span>
            <span className={styles.text}>Please to take advantage of this game Enter with your "PC"</span>
        </div>
    </div>
}

export default OverlayWarning;