import axios from 'axios';
import {IUser, IUserResponse, IUserSubmit} from "@/store/modules";

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
    try {
        const response = await conduitApi.post('/users/login', {
            user: data
        });
        console.log(response.data);
        return (response.data as IUserResponse).user;
    } catch (e) {
        console.error(e)
    }
}