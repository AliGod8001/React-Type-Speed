/* other imports */
import styles from "./Manitor.module.css"

const Manitor = ({
    sentence,
    enteredSentence,
    wrongKeyIndex,
} : {
    sentence: string,
    enteredSentence: string,
    wrongKeyIndex: number[]
} ) => {

    return <div className={styles.wrapper} id='wrapper'>
        {
            sentence.split("").map((word, index) => (
                // <span 
                //     key={`word-${index}`} 
                //     className={`
                //             ${enteredSentence.length > 0 
                //             && enteredSentence.length > index 
                //             ? enteredSentence[index] === word 
                //             ? styles.correct 
                //             : styles.incorrect 
                //             : ""}`
                //         }>
                //     {word}
                // </span>
                <span 
                    key={`word-${index}`} 
                    className={`${enteredSentence.length > 0 && enteredSentence.length > index ? !wrongKeyIndex.includes(index) ? styles.correct : styles.incorrect : ""} ${word === " " ? styles.space : ""} ${enteredSentence.length > 0 && enteredSentence.length === index ? styles.next : ""}`}>
                    {word}
                </span>
            ))
        }
    </div>
}

export default Manitor;