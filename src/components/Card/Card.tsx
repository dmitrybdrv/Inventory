import React from 'react';
import style from './Card.module.scss'


type CardPropsType = {
    id: string,
    itemName: string,
    description: string,
    userName: string
}
export const Card: React.FC<CardPropsType> = ({id, description, itemName, userName}) => {


    return (
        <div className={style.cardWrapper}>
            <div className={style.cardPseudo}>
                <p>item id: {id}</p>
                <p>item name: {itemName}</p>
                <p>item info: {description}</p>
                <p>user name: {userName}</p>
            </div>
        </div>
    );
};