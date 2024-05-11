import {FC, useState, useEffect} from 'react'

export enum DIRECTION {
  INCREMENT= "INCREMENT",
  DECREMENT = "DECREMENT"
}

type TimerProps = {
    startValue: number
    endValue: number
    step: number
    direction: DIRECTION
    endTimeAction: () => void
}

const Timer:FC<TimerProps> = ({startValue, endValue, step, direction, endTimeAction}) => {
  const [time, setTime] = useState(startValue)
  const [intervalID, setIntervalID] = useState<null | number>(null)


  useEffect(() => {
    const interval = setInterval(() => {
        if (direction === DIRECTION.INCREMENT){
            setTime((prev) => prev + step)
        } else if (direction === DIRECTION.DECREMENT){
            setTime((prev) => prev - step)
        }
      }, 1000)
      
      setIntervalID(interval)

      return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if(intervalID !== null && time === endValue){
        clearInterval(intervalID)
        endTimeAction()
    }
  }, [time])

  return (
    <p>Time left before close: {time}</p>
  )
}

export default Timer