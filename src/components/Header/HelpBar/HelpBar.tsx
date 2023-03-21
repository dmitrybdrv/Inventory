import React from 'react';
import style from './HelpBar.module.scss'
import {NavLink} from "react-router-dom";


export type NavType = {}

export const HelpBar: React.FC<NavType> = ({}) => {
    return (
        <div className={style.helpBarWrapper}>
            <div className={style.navContainer}>
                <NavLink to={'/about'} className={style.navItem}>О ПРОГРАММЕ</NavLink>
                <NavLink to={'/faq'} className={style.navItem}>FAQ</NavLink>
                <NavLink to={'/upgrades'} className={style.navItem}>ОБНОВИТЬ</NavLink>
            </div>
        </div>

    );
};