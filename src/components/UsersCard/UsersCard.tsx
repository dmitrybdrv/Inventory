import React from 'react';
import style from './UsersCard.module.scss'


type UsersCardPropsType = {}
export const UsersCard: React.FC<UsersCardPropsType> = ({}) => {
    return (
        <div className={style.usersCardWrapper}>
            UsersCard
        </div>
    );
};