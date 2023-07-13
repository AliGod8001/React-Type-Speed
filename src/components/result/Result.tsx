/* component imports */
import ResultStar from './ResultStar'

/* data imports */
import _pointsData from '../../data/POINTS-DATA.json'

/* other imports */
import styles from './Result.module.css'

const pointsData = _pointsData as PointsData[]

const calcPoint = (accuracy: number, speed: number, wrongCount: number) => {
    let point = 0
    let _var = accuracy
    pointsData.forEach(pointData => {
        if ( pointData.name !== "accuracy" && pointData.name === "speed" ) {
            _var = speed
        }

        if ( pointData.name !== "accuracy" && pointData.name === "wrongCount" ) {
            _var = wrongCount
        }

        pointData.points.forEach(p => {
            if ( _var > p.down && _var <= p.up ) {
                point += p.point
            }
        })
    })

    return Math.ceil(point) > 5 ? 5 : Math.ceil(point)
}

const Result = ({
    accuracy,
    speed,
    wrongCount
} : {
    accuracy: number,
    speed: number,
    wrongCount: number
}) => {
    const point = calcPoint(accuracy, speed, wrongCount)


    return <div className={styles.wrapper}>
        <div className={styles["stars-wrapper"]}>
            {[1, 2, 3, 4, 5].map((star, index) => (
                <ResultStar key={`${star}-${index}`} active={point - 1 >= index} />
            ))}
        </div>
        {/* TODO: add point dynamiced text in here */}
        <div className={styles.info}>
            Congragulation!! you finished the text completely with 
            <span className={point === 5 ? styles.complete : point >= 3 ? styles.half : styles.none }>{point}</span>
             score 
        </div>
        <div className={styles.info}>
            Please press 
            <span>" Enter "</span>
            to replay
        </div>
    </div>
}

export default Result;