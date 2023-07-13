/* main import */
import { useState, useEffect, useCallback } from 'react'

/* hooks import */
import useAudio from '../../hooks/use-audio';

/* components import */
import Keyboard from "../keyboard/Keyboard";
import Status from "../status/Status";
import Manitor from "../manitor/Manitor";
import Wrapper from "../ui/card/Wrapper"

/* other import */
import sentences from '../../data/SENTENCES.json'
import _blockInputKey from '../../data/BLOCK-INPUT-KEY.json'

/* audio imports */
import keyAudio from '../../../public/sounds/keyboard-key-sfx.mp3'
import wrongAudio from '../../../public/sounds/wrong.mp3'
import finishTypeAudio from '../../../public/sounds/finish-game-sfx-2.wav'

const setRandomSentence = (dummy = false) => {
    if ( dummy )
        return "fsl hggi hgvplk hgvpdl"

    return sentences[Math.floor( Math.random() * sentences.length)]
}

const Index = () => {
    const [sentence, setSentence] = useState<string>(() => {
        return setRandomSentence()
    })
    const [enteredSentence, setEnteredSentence] = useState<string>("")
    const [lastKeyPressed, setLastKeyPressed] = useState<string[]>([])
    // const [lastKeyPressed, setLastKeyPressed] = useState<string>("")
    // const [wrongKeyPressed, setWrongKeyPressed] = useState<number>(0)
    const [wrongKeyPressed, setWrongKeyPressed] = useState<WrongKey[]>([])
    const [typeStart, setTypeStart] = useState<boolean>(false)
    const [blured, setBlured] = useState<boolean>(false)

    const isTypeOver = enteredSentence.length === sentence.length
    const averageWordLengthOfSentence = Math.round( sentence.replace(" ", "").length / sentence.split(" ").length )
    const wrongKeyIndex = wrongKeyPressed.map(wrongkey => wrongkey.index)

    const keyPlay = useAudio(keyAudio)
    const wrongPlay = useAudio(wrongAudio)
    const finishTypePlay = useAudio(finishTypeAudio)

    const initializeType = useCallback(() => {
        setSentence(setRandomSentence())
        setEnteredSentence("")
        setLastKeyPressed([])
        setWrongKeyPressed([])
        setBlured(false)
        // setWrongKeyPressed(0)
    }, [])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ( e.key === "F5" ) {
                location.reload()
            }

            if ( isTypeOver ) {
                if (e.key === "Enter") {
                    initializeType()
                } else {
                    return
                }
            }

            e.preventDefault();
            
            // NOTE: can entered wrong with backspace logic
            // if ( e.location !== 0 || blockInputKey.includes(e.key.toLowerCase()) ) {
            //     null
            // } else if ( e.key === "Backspace" ) {
            //     setEnteredSentence(prevState => {
            //         return prevState.length === 1 ? "" : prevState.slice(0, enteredSentence.length-1)
            //     })
            // } else if ( e.key.match(/^[a-zA-Z\s]+$/) || e.key.match(/[,\\.'";]/g) ) {
            //     setEnteredSentence(prevState => {
            //         return prevState += e.key
            //     })
            // }
            
            if ( e.location !== 0 || _blockInputKey.includes(e.key.toLowerCase()) ) {
                if ( e.key === "Enter" && enteredSentence.length === 0 ) {
                    initializeType()
                }
            } else if ( e.key.match(/^[a-zA-Z\s]+$/) || e.key.match(/[,\\.'";]/g) ) {
                setTypeStart(true)
                setBlured(true)
                if ( sentence[enteredSentence.length] === e.key ) {
                    if ( sentence.length - 1 === enteredSentence.length )
                        finishTypePlay()
                    else 
                        keyPlay()
                    setEnteredSentence(prevState => {
                        return prevState += e.key
                    })
                } else {
                    setWrongKeyPressed(prevState => {
                        return [...prevState, {index: enteredSentence.length, key: e.key, keyCode: e.code}]
                        // return prevState + 1
                    })
                    wrongPlay()
                }
            }
            setLastKeyPressed(prevState => {
                return [...prevState, e.code.replace('Key', '').toLowerCase()]
            })
    
        }

        const keyUpHandler = (e: KeyboardEvent) => {
            e.preventDefault()
            setLastKeyPressed([])
        }
        document.addEventListener('keydown', handler)
        document.addEventListener("keyup", keyUpHandler)

        return () => {
            document.removeEventListener('keydown', handler)
            document.removeEventListener('keyup', keyUpHandler)
        }

    }, [setSentence, enteredSentence, lastKeyPressed, initializeType, isTypeOver, typeStart, blured])

    return <Wrapper>
        <Status 
            wrongCount={wrongKeyPressed.length} 
            enteredKeyCount={enteredSentence.length} 
            isTypeFinished={isTypeOver} 
            startCounting={typeStart} 
            averageWordLength={averageWordLengthOfSentence} 
            blur={blured} />
        <Manitor sentence={sentence} enteredSentence={enteredSentence} wrongKeyIndex={wrongKeyIndex} />
        <Keyboard lastKeyPressed={lastKeyPressed} />
    </Wrapper>
}

export default Index;