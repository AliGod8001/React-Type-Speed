/* main imports */
import { CSSTransition } from 'react-transition-group'

/* other imports */
import styles from './ResultStar.module.css'
import { starImage } from '../../../public/images'

const ResultStar = ({
    active
} : {
    active: boolean
}) => {
    return <CSSTransition in={active} classNames={styles.show} timeout={450} >
        <img className={`${styles.img} ${active ? styles.active : ""}`} src={starImage} alt='star image' loading='lazy' />
    </CSSTransition>
}


export default ResultStar