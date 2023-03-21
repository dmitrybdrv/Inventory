import React, {useEffect} from 'react';
import style from './Main.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {Card} from "../Card/Card";


type MainPropsType = {}
export const Main: React.FC<MainPropsType> = ({}) => {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(state => state.cards.card)


    useEffect(() => {

    }, [])


    return (
        <div className={style.mainWrapper}>
            {cards.map(el => {
                return <Card id={el.id} itemName={el.itemName} description={el.description} userName={el.user}/>
            })}
        </div>
    );
};