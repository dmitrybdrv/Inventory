import {configureStore} from '@reduxjs/toolkit'
import {cardsReducer} from "./cardSlice";


export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
})

//@ts-ignore
window.store = store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch