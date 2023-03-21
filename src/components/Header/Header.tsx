import React from 'react';
import style from './Header.module.scss'
import {HelpBar} from "./HelpBar/HelpBar";
import logo from '../../Assets/img/Logo.png'
import {UniTitle} from "../../common/UniversalComponents/h3/UniTitle";


export type HeaderType = {
    companyName: string
}

export const Header: React.FC<HeaderType> = ({companyName}) => {

    return (

        <div className={style.headerWrapper}>

            <div><img className={style.logo} src={logo} alt="Logo"/></div>

            <div className={style.companyName}>
                <UniTitle title={companyName}/>
            </div>

            <div><HelpBar/></div>

        </div>

    );
};