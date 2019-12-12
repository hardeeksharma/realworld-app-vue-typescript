export interface IProfile {
    username: string;
    bio?: string;
    image?: string;
    following: boolean;
}

export interface ProfileResponse {
    profile: IProfile
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

///// ARTICLE TYPES /////

export interface ArticleResponse {
    articles?: (Article)[] | null;
    articlesCount: number;
}

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList?: (string)[] | null;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}

export interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

///// ARTICLE TYPE ENDS /////