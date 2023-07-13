import KeybaordKey from './KeyboardKey'

import _keys from '../../data/KEYS.json'
import styles from './Keyboard.module.css'
const Keyboard = ({
    lastKeyPressed
} : {
    lastKeyPressed: string[]
}) => {
    const keys = _keys as KeysData

    return <ul className={styles.wrapper}>
        <div className={styles.layer}>
            <KeybaordKey keys={keys.firstLayer} count={1} lastKeyPressed={lastKeyPressed} specialKey={null} />
        </div>
        <div className={styles.layer}>
            <KeybaordKey keys={keys.secondLayer} count={2} lastKeyPressed={lastKeyPressed} specialKey="tab" />
        </div>
        <div className={styles.layer}>
            <KeybaordKey keys={keys.thirdLayer} count={3} lastKeyPressed={lastKeyPressed} specialKey="enter" />
        </div>
        <div className={styles.layer}>
            <KeybaordKey keys={keys.forthLayer} count={4} lastKeyPressed={lastKeyPressed} specialKey="shift" />
        </div>
        <div className={styles.layer}>
            <KeybaordKey keys={keys.fifthLayer} count={5} lastKeyPressed={lastKeyPressed} specialKey="space" />
        </div>
    </ul>
}

export default Keyboard;