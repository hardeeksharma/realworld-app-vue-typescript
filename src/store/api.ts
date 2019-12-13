import axios from 'axios';
import {ArticleResponse, IProfile, IUser, IUserResponse, IUserSubmit, ProfileResponse} from "@/store/modules";
import {async} from "q";

export const conduitApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
})

export function setJWT(jwt: string) {
    conduitApi.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}

export function clearJwt() {
    delete conduitApi.defaults.headers.common['Authorization'];
}

export async function loginUser(data: IUserSubmit): Promise<IUser | undefined> {
    let response;
    try {
        response = await conduitApi.post('/users/login', {
            user: data
        });
        //console.log(response.data);
        return (<IUserResponse>response.data).user;
    } catch (e) {
        console.log(e.response.data)
        throw new Error("Login Error")
    }
}

export async function getGlobalFeed() {
    const response = await conduitApi.get('/articles');
    return response.data as ArticleResponse;
}

export async function fetchProfile(username: string): Promise<IProfile> {
    const response = await conduitApi.get(`/profiles/${username}`);
    console.log(response.data);
    return (<ProfileResponse>response.data).profile
}