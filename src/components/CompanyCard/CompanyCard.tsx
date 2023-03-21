import React, {useState} from 'react';
import style from './CompanyCard.module.scss'
import {UniTitle} from "../../common/UniversalComponents/h3/UniTitle";
import {EditableSpan} from "../../common/UniversalComponents/EditableSpan/EditableSpan";

type CompanyCardPropsType = {
    title: string
    callBack: (newCompanyName: string) => void
}
export const CompanyCard: React.FC<CompanyCardPropsType> = ({title, callBack}) => {


    return (
        <div>
            <div>Add new company</div>
            <input type="text" placeholder={'new company'}/>
            <button>add</button>

            <div className={style.companyCardWrapper}>

                <div className={style.fields}>
                    <div>Company name:</div>
                    <div>Address:</div>
                    <div>Email:</div>
                    <div>Website:</div>
                    <div>Phone number:</div>
                </div>

                <div className={style.info}>
                    <EditableSpan title={title} callBack={callBack}/>
                    <div>{'ул.Пушкина 160'}</div>
                    <div>{'somecompany@protonmail.com'}</div>
                    <div>{'www.website.com'}</div>
                    <div>{'(+1) 157 555 89 01'}</div>
                </div>

            </div>
        </div>
    );
};