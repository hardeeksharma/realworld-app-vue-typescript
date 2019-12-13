import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {IProfile, IUser, IUserSubmit} from "@/store/modules";
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
        this.user = user
    }

    get username() {
        return this.user && this.user.username || null;
    }

    @Action({commit: 'setUser'})
    async login(userSubmit: IUserSubmit) {
        try {
            const user = await api.loginUser(userSubmit);
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

}

export default getModule(UsersModule);