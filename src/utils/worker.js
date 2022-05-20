import getPoints from './getPoints'
import calculatePositions from './calculatePositions'

onmessage = async function (e) {
    console.log('Worker: Message received from main script');
    let rawData = await getPoints(10);
    let { start, timestepInSeconds, totalSeconds } = e.data;
    for (const element of rawData) {
        const [id, name, tl1, tl2, description] = element
        const res = await calculatePositions({ tl1, tl2, start, timestepInSeconds, totalSeconds })
        // console.log(res)
        const newData = {
            id,
            name,
            description,
            position: res
        }
        postMessage(newData)

    }
}