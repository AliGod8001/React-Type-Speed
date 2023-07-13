/* main import */
import { useState, useEffect } from 'react'

/* component imports */
import StatusTheme from './StatusTheme'
import StatusBox from './StatusBox'
import Result from '../result/Result'

/* other imports */
import styles from './Status.module.css'
import { accuracyImage, timeImage, speedImage } from '../../../public/images'

const Status = ({
    wrongCount,
    enteredKeyCount,
    isTypeFinished,
    startCounting,
    averageWordLength,
    blur,
} : {
    wrongCount: number,
    enteredKeyCount: number,
    isTypeFinished: boolean,
    startCounting: boolean,
    averageWordLength: number,
    blur: boolean,
}) => {
    const [timer, setTimer] = useState<number>(0)
    const [lastStatus, setLastStaus] = useState<boolean>(isTypeFinished)

    const accuracy = enteredKeyCount > 0 ?  100 - Math.round(wrongCount / enteredKeyCount * 100) : 0
    const speedPerMinutes = timer > 0 ? Math.round( ( enteredKeyCount / averageWordLength ) * 60 / timer) : 0

    useEffect(() => {
        let timeTimeout : number;

            if ( !isTypeFinished && startCounting ) {
                if ( lastStatus === isTypeFinished && blur ) {
                    timeTimeout = setTimeout(() => {
                        setTimer(prevState => {
                            return prevState + 1
                        })
                    }, 1000);
                } else {
                    setTimer(0)
                }
            } 
        


        return () => {
            setLastStaus(isTypeFinished)
            clearTimeout(timeTimeout)
        }
    }, [isTypeFinished, startCounting, timer, lastStatus, blur])

    return <>
        <div className={styles.wrapper}>
            <StatusTheme />
            <StatusBox image={timeImage} title='Time Elappsed :' titleValue={`${timer}`}  />
            <StatusBox image={speedImage} title='Speed :' titleValue={`${speedPerMinutes}`} subTitleValue="Word Per Minutes" />
            <StatusBox image={accuracyImage} title='Accuracy: ' titleValue={`${accuracy}%`} subTitle='Wrongs :' subTitleValue={`${wrongCount}`} />
        </div>
        {isTypeFinished && <Result accuracy={accuracy} speed={speedPerMinutes} wrongCount={wrongCount} />}
    </>
}

export default Status;