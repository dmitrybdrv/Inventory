import React from 'react';
import style from './Auth.module.scss'
import ava from '@/assets/ava.gif'

export const Auth: React.FC = () => {

    return (
        <div className={style.userField}>
            <div className={style.ava}>
                <img src={ava} alt=""/>
            </div>
            <div>LOGIN</div>
        </div>
    );
};