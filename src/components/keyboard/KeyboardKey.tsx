import styles from './KeyboardKey.module.css'

const KeybaordKey = ({
    keys,
    specialKey,
    count,
    lastKeyPressed,
} : {
    keys: key[],
    specialKey: string | null,
    count: number,
    lastKeyPressed: string[]
}) => {
    return <>
        {
            keys.map((key, index) => 
                <button 
                    key={`${count}-${index}`} 
                    className={`${styles.key} ${lastKeyPressed.includes(key.keyCode) ? styles.pressed : ""} ${specialKey !== null ? key.key.toLowerCase().includes(specialKey) ? styles.main : "" : ""}`}>
                        {key.key}
                </button>
         )}
    </>
}

export default KeybaordKey;