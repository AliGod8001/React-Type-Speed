/* other imports */
import styles from './SocialsItem.module.css'

const SocialsItem = ({
    data
} : {
    data: Social
}) => {
    return <div className={styles.item}>
        <img 
            className={styles.img}
            src={data.image} 
            alt={`${data.name} socail media image`} />
        <span className={styles.id}>@{data.social_id}</span>
    </div>
}

export default SocialsItem