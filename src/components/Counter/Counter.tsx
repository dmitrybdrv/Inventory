import React, {useEffect, useState} from 'react';
import style from './Counter.module.scss'

type CounterPropsType = {
    inventoryItemCount: number,
}

export const Counter: React.FC<CounterPropsType> = ({inventoryItemCount}) => {
    const [currVal, setCurrVal] = useState(0);

    useEffect(() => {

        const timerId = setTimeout(() => {
            if (currVal < inventoryItemCount) {
                setCurrVal(prevState => prevState + 1)
            }
        }, 50)

        return () => clearTimeout(timerId)

    }, [currVal]);


    return (

        <div className={style.counterWrapper}>

            <div className={style.counterNumber}>{currVal}</div>

            <div className={style.counterText}>
                ОБЩЕЕ КОЛИЧЕСТВО <span className={style.words}>УЧТЁННОГО ИМУЩЕСТВА (в шт)</span>
            </div>

        </div>

    );
};