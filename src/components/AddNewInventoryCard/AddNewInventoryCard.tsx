import React, {ChangeEvent, useState} from 'react';
import style from './AddNewInventoryCard.module.scss'
import {useAppDispatch} from "../../store/hooks/hooks";
import {addCard} from "../../store/cardSlice";


type AddNewInventoryCardPropsType = {}
export const AddNewInventoryCard: React.FC<AddNewInventoryCardPropsType> = ({}) => {
    const [cNum, setNum] = useState('')
    const [cName, setName] = useState('')
    const [info, setInfo] = useState('')
    const [user, setUserName] = useState('')
    const cNumberHandler = (eve: ChangeEvent<HTMLInputElement>) => {
        setNum(eve.currentTarget.value)
    }
    const cNameHandler = (eve: ChangeEvent<HTMLInputElement>) => {
        setName(eve.currentTarget.value)
    }
    const cInfoHandler = (eve: ChangeEvent<HTMLTextAreaElement>) => {
        setInfo(eve.currentTarget.value)
    }
    const cUserNameHandler = (eve: ChangeEvent<HTMLInputElement>) => {
        setUserName(eve.currentTarget.value)
    }


    const dispatch = useAppDispatch()

    const addNewCard = () => {
        dispatch(addCard({id: cNum, itemName: cName, description: info, user: user}))
        setNum('')
        setName('')
        setInfo('')
        setUserName('')
    }


    return (
        <div className={style.inventoryCardWrapper}>

            <div className={style.cardTitle}>НОВАЯ КАРТОЧКА</div>

            <div className={style.card}>
                <div><input type="text" placeholder={'номер'} value={cNum} onChange={cNumberHandler}/>
                    <button>сгенерировать номер</button>
                </div>
                <div><input type="text" placeholder={'наименование'} value={cName} onChange={cNameHandler}/>
                </div>
                <div><textarea rows={10} cols={40} placeholder={'описание единицы инвентаризации/(хар-ки)'} value={info} onChange={cInfoHandler}/>
                </div>
                <div><input type="text" placeholder={'пользователь'} value={user} onChange={cUserNameHandler}/></div>
            </div>
            <button onClick={addNewCard}>СОЗДАТЬ</button>
        </div>
    );
};