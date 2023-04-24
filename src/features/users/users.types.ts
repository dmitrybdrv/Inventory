export type UserType = {
    id?: string
    firstName: string
    lastName: string
    jobTitle: string
    phone: string
    email: string
    ava?: string
    equipment?: string[]
}
export type UsersStateType = UserType[]