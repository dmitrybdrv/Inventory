import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {nanoid} from 'nanoid'
import { UsersStateType, UserType } from "./users.types";





const slice = createSlice({
    name: 'users',
    initialState: {
        users: [] as UsersStateType,
        status: 'idle' as 'idle' | 'loading' | 'error' | 'success'
    },
    reducers: {
        addUser: (state, action: PayloadAction<{newUser: UserType}>) => {
            const user: UserType = {...action.payload.newUser, id: nanoid(), equipment: []}
            state.users.unshift(user)
        },
        setUsers: (state, action: PayloadAction<{ users: UsersStateType }>) => {
            state.users = action.payload.users
        }
    },
    extraReducers: {}
})

export const {reducer: usersSlice, actions: usersActions} = slice