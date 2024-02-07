export interface IUser {
    readonly id: number,
    first_name: string,
    last_name: string,
    email: string,
    profile_picture_url: string
}

export interface IRegisterUser extends Omit<IUser, "id" | "profile_picture_url" > {
    password: string
}

export interface ILoginUser extends Omit<IUser, "id" | "firstName" | "lastName" | "profile_picture_url">{
    password: string
}