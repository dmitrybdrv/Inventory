import React from 'react';
import style from './Upgredes.module.scss'


type UpgradesPropsType = {}
export const Upgrades: React.FC<UpgradesPropsType> = ({}) => {

    return (
        <div className={style.upgradesWrapper}>
            <h3>You used version <span>1.0</span></h3>
            <p className={style.word}>This is latest version</p>
        </div>
    );
};