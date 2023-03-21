import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

type CardType = {
    id: string,
    itemName: string,
    description: string,
    user: string
}

export const cardsSlice = createSlice({
    name: 'card',
    initialState: {card: [] as Array<CardType>},
    reducers: {
        addCard: (state, action: PayloadAction<{
            id: string,
            itemName: string,
            description: string,
            user: string
        }>) => {
            const newCard: CardType = {
                id: action.payload.id,
                itemName: action.payload.itemName,
                description: action.payload.description,
                user: action.payload.user
            }
            state.card.unshift(newCard)
        },
        deleteCard: (state, action: PayloadAction<{ cardID: number }>) => {

        },
    },
})

export const {addCard, deleteCard} = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer