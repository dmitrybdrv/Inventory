import React from 'react';
import style from "./UniTitle.module.scss";


type UniTitlePropsType = {
    title: string,

}
export const UniTitle: React.FC<UniTitlePropsType> = ({title}) => {

    return (
        <div className={style.title}>
            <div className={style.upLine}>
                <h3>{title}</h3>
            </div>
        </div>

    );
};