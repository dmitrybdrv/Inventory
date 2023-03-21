import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Menu.module.scss'
import {UniTitle} from "../../common/UniversalComponents/h3/UniTitle";


export type MainType = {}

export const Menu: React.FC<MainType> = ({}) => {


    return (

        <div className={style.menuWrapper}>
            <UniTitle title={'MENU'}/>
            <div className={style.menuLinks}>
                <div><NavLink to={'/main'}>КАРТОТЕКА</NavLink></div>
                <div><NavLink to={'/add'}>СОЗДАТЬ КАРТОЧКУ</NavLink></div>
                <div><NavLink to={'/search'}>НАЙТИ ПО НОМЕРУ</NavLink></div>
            </div>
        </div>

    );
};