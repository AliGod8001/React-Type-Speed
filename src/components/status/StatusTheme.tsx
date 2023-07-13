/* main imports */
import { useState, useContext } from 'react'

/* store import */
import { ThemeContext,themes } from "../../store/theme-context"

/* other imports */
import styles from './StatusTheme.module.css'

const StatusTheme = () => {
    const themeCtx = useContext(ThemeContext)
    const [darkMode, setDarkMode] = useState<boolean>(themeCtx.theme === "dark" ? true : false)

    const themeInputChangeHandler = () => {
        setDarkMode(prevState => {
            return !prevState
        })
        themeCtx.changeTheme(darkMode ? themes.light : themes.dark)
    }

    return <div className={styles.wrapper}>
        <label className={styles.switch}>
            <input type="checkbox" checked={darkMode} onChange={themeInputChangeHandler}/>
            <span className={styles.slider}></span>
        </label>
    </div>
}

export default StatusTheme;