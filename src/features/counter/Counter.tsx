import React, {useCallback, useEffect, useState} from 'react';
import style from './Counter.module.scss'

type CounterPropsType = {
    unitCount: number
}

export const Counter: React.FC<CounterPropsType> = ({unitCount}) => {
    const [unit, setUnit] = useState(0)

    const increment =  useCallback(() => {
        setUnit(prevState => prevState + 1)
    },[])

    useEffect(() => {
        if(unit === unitCount){
            return
        }
        const timeoutFunction = setInterval(increment, 80)
        return () => clearInterval(timeoutFunction);

    },[increment, unit])


    return (
        <div className={style.counter}>
            <div className={style.number}>
                {unit}
            </div>

            <div className={style.title}>
                TOTAL TMC COUNT
            </div>

        </div>
    );
};