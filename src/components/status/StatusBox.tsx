/* other imports */
import styles from './StatusBox.module.css'

const StatusBox = ({
    image,
    title,
    titleValue,
    subTitle,
    subTitleValue,
} : {
    image: string,
    title: string,
    titleValue: string,
    subTitle?: string,
    subTitleValue?: string,
}) => {
    return <div className={styles.box}>
        <img className={styles.img} src={image} alt='test image' loading='lazy' />
        <div>
            <div className={styles.header}>
                <span>{title}</span>
                <span className={styles.title}>{titleValue}</span>
            </div>
            {subTitleValue && (
                <div className={styles['sub-header']}>
                <span>{subTitle}</span>
                <span className={styles['sub-title']}>{subTitleValue}</span>
            </div>
            )}
        </div>
    </div>
}

export default StatusBox;