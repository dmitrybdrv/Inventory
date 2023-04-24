import React from 'react';
import style from './User.module.scss'

type PropsType = {
    firstName: string
    lastName: string
    jobTitle: string
    phone: string
    email: string
    ava?: string
}

export const User: React.FC<PropsType> = (
    {
        firstName,
        lastName,
        jobTitle,
        phone,
        email,
        ava
    }
) => {

    return (
        <div className={style.userCard}>
            {ava && <div className={style.userAva}> <img src={ava} alt="ava"/> </div>}
            <div className={style.userLastN}> Фамилия: <span>{lastName}</span> </div>
            <div className={style.userFirstN}> Имя: <span>{firstName}</span> </div>
            <div className={style.userJob}> Должность: <span>{jobTitle}</span> </div>
            <div className={style.userPhone}>Тел: <span>{phone}</span> </div>
            <div className={style.userEmail}>Эл.Почта: <span>{email}</span> </div>
        </div>
    );
};