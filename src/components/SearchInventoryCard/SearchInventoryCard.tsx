import React from 'react';
import style from './SearchInventoryCardWrapper.module.scss'

type SearchInventoryCardPropsType = {}
export const SearchInventoryCard: React.FC<SearchInventoryCardPropsType> = ({}) => {
    return (
        <div className={style.searchInventoryCardWrapper}>
            SearchInventoryCard
        </div>
    );
};