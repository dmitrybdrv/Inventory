import React, {ChangeEvent, useState} from 'react';
import style from './EditableSpanTitle.module.scss'


type EditableSpanPropsType = {
    title: string
    callBack: (newCompanyName: string) => void
}
export const EditableSpan: React.FC<EditableSpanPropsType> = ({title, callBack}) => {

    const [value, setValue] = useState(title)
    const [editMode, setEditMode] = useState(false)
    const changerText = (eve: ChangeEvent<HTMLInputElement>) => {
        setValue(eve.currentTarget.value)
    }

    const onClickHandler = () => {
        setEditMode(false)
        if(value.trim() !== '')
        callBack(value.toUpperCase())
    }


    return (
        <div>
            {!editMode
                ? <div className={style.editableSpanTitle} onDoubleClick={() => setEditMode(true)}>{title}</div>

                : <input
                    onChange={changerText}
                    value={value}
                    onBlur={onClickHandler}
                    autoFocus
                ></input>}
        </div>
    );
};