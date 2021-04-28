import React from 'react'
import CountUp,{useCountUp} from 'react-countup'

const Countup = () => {
    const {
            countUp,
            start,
            pauseResume,
            reset,
            update,
        } = useCountUp({duration:6, end:1000,startOnMount:false})
    return (
        <div>
            <div>
                <h1>{countUp}</h1>
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>Pause / Resume</button>
                <button onClick={() => update(2000)}>Updare to 2000</button>

            </div>
            <h1>
                <CountUp end={200} />
                <br />
                <CountUp end={200} duration={5} />
                <br />
                <CountUp start={500} end={1000} duration={5} />
                <br />
                <CountUp end={1000} duration={8} prefix='$' decimals={2} />

            </h1>
        </div>
    )
}

export default Countup
