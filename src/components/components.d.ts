interface KeysData {
    firstLayer: key[],
    secondLayer: key[],
    thirdLayer: key[],
    forthLayer: key[],
    fifthLayer: key[],
}

interface key {
    key: string,
    keyCode: string
}

interface PointsData {
    name: string,
    points: PointsValue[]
}

interface PointsValue {
    down: number,
    up: number,
    point: number
}

interface Social {
    id: number,
    name: string,
    social_id: string,
    image: string,
    url: string
}

interface WrongKey {
    index: number,
    key: string,
    keyCode: string
}