import React from 'react';
import style from './CompanyOwnerMenu.module.scss'
import {NavLink} from "react-router-dom";
import {UniTitle} from "../../common/UniversalComponents/h3/UniTitle";


type CompanyOwnerMenuPropsType = {}
export const CompanyOwnerMenu: React.FC<CompanyOwnerMenuPropsType> = ({}) => {


    return (

        <div className={style.ownerWrapper}>
            <UniTitle title={'OWNER FIELD'}/>
            <div className={style.menuLinks}>
                <div><NavLink to={'/companyCard'}>ИНФОРМАЦИЯ О КОМПАНИИ</NavLink></div>
                <div><NavLink to={'/usersCard'}>ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЯХ</NavLink></div>
            </div>

        </div>
    );
};