import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "@/features/users/users.slice";

export const store = configureStore({
    reducer: {
        users: usersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store