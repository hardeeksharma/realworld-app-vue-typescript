export interface IProfile {
    username: string;
    bio?: string;
    image?: string;
    following: boolean;
}

export interface IUser {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: string;
}

export interface IUserSubmit {
    email: string;
    password: string;
}

export interface IUserResponse {
    user: IUser
}