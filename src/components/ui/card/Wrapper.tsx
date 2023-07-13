/* main imports */
import { useEffect, useState } from 'react'

/* component imports */
import OverlayWarning from '../overlay-warning/OverlayWarning'
import SocialsList from '../../social/SocialsList'

/* other imports */
import styles from './Wrapper.module.css'


const Wrapper = ({
    children,
} : {
    children: string | JSX.Element | JSX.Element[]
}) => {
    const [windowWidth, setWindowWidth] = useState<number>(1200)

    useEffect(() => {
        setWindowWidth(window.innerWidth)

        const handler = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])

    return <>
        {windowWidth < 992 && <OverlayWarning />}
        <SocialsList />
        <div className={styles.wrapper}>
            {children}
        </div>
    </>
}

export default Wrapper;