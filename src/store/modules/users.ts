import {Action, getModule, Module, Mutation, MutationAction, VuexModule} from "vuex-module-decorators";
import {IProfile, IUpdateUser, IUser, IUserSubmit} from "@/store/modules";
import {store} from '@/store';
import * as api from "@/store/api";

@Module({
    name: 'user',
    namespaced: true,
    store,
    dynamic: true
})
class UsersModule extends VuexModule {

    user: IUser | null = null;
    profile: IProfile | null = null;

    @Mutation
    setUser(user: IUser) {
        console.log("Mutation called setUser")
        this.user = user
    }

    get username() {
        return this.user && this.user.username || null;
    }

    @Action({commit: 'setUser'})
    async login(userSubmit: IUserSubmit) {

        try {
            const user = await api.loginUser(userSubmit);
            user && api.setJWT(user.token);
            return user;
        } catch (e) {
            throw new Error("Invalid email of password");
        }

    }

    @Mutation
    setProfile(profile: IProfile) {
        this.profile = profile;
    }

    @Action({commit: 'setProfile'})
    async loadProfile(username: string) {
        const profile = await api.fetchProfile(username);
        return profile;
    }

    @Action({commit: 'setUser'})
    async updateProfile(updateUser: IUpdateUser) {
        console.log("In module update user")
        try {
            const user = await api.updateProfile(updateUser);
            return user
        } catch (e) {
            console.log("API error");
        }
    }
}

export default getModule(UsersModule);