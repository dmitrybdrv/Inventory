import React, {useEffect} from 'react';
import {useActions, useAppSelector} from '@/common/hooks/hooks';
import {usersActions} from "@/features/users/users.slice";
import {selectUser} from "@/features/users/users.selector";
import {useForm} from "react-hook-form";
import {UserType} from "@/features/users/users.types";
import {User} from './user/User';
import style from './Users.module.scss'


export const Users: React.FC = () => {
    const actions = useActions(usersActions)
    const allUsers = useAppSelector(selectUser)

    const {register, setValue, handleSubmit, formState: {errors}} = useForm<UserType>();

    const onSubmit = (data: UserType) => {
        actions.addUser({newUser: data})
    }


    useEffect(() => {
        actions.setUsers({users: allUsers})
    }, [allUsers])


    return (
        <div className={style.usersContainer}>
            <h1>Users list</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <input {...register("firstName")} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...register("lastName")} />
                </div>
                <div>
                    <label>Job Title</label>
                    <input {...register("jobTitle")} />
                </div>
                <div>
                    <label>Phone</label>
                    <input {...register("phone")} />
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email")} />
                </div>
                <div>
                    <button type="submit">SetValue</button>
                </div>
            </form>

            <div className={style.usersForm}>
                {allUsers.map(el => <User
                    key={el.id}
                    firstName={el.firstName}
                    lastName={el.lastName}
                    jobTitle={el.jobTitle}
                    phone={el.phone}
                    email={el.email}
                    ava={el.ava}
                />)}
            </div>
        </div>
    );
};