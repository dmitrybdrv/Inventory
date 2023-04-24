import {AppDispatch, RootState} from "@/app/store";
import {useDispatch, useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import {ActionCreatorsMapObject, AsyncThunk, bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";


export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useAppDispatch()

    return useMemo(
        () => bindActionCreators<T, RemapActionCreators<T>>(actions, dispatch),
        [actions, dispatch]
    )
}

// Types
type IsValidArg<T> = T extends object ? (keyof T extends never ? false : true) : true
type ActionCreatorResponse<T extends (...args: any[]) => any> = ReturnType<ReturnType<T>>
type ReplaceReturnType<T, TNewReturn> = T extends (a: infer A) => infer R
    ? IsValidArg<A> extends true
        ? (a: A) => TNewReturn
        : () => TNewReturn
    : never
type RemapActionCreators<T extends ActionCreatorsMapObject> = {
    [K in keyof T]: ReplaceReturnType<T[K], ActionCreatorResponse<T[K]>>
}