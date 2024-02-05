export interface IUser {
    readonly id: number,
    firstName: string,
    lastName: string,
    email: string,
}

export interface IRegisterUser extends Omit<IUser, "id"> {
    password: string
}

export interface ILoginUser extends Omit<IUser, "id" | "firstName" | "lastName">{
    password: string
}