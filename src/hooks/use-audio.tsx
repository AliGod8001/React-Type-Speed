import { useCallback } from 'react'

const useAudio = (audio: string) => {
    const sound = new Audio(audio)

    const play = useCallback((sfx : HTMLAudioElement) => {
        sfx
            .play()
            .catch((err : Error) => {
                throw new Error(err.message)
            })
    },[])

    const triggerPlay = () => {
        play(sound)
    }

    return triggerPlay
}

export default useAudio