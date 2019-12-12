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
        console.log(userSubmit);
        const user = await api.loginUser(userSubmit);
        console.log(user);
        return user;
    }

    @Mutation
    setProfile(profile: IProfile) {
        this.profile = profile;
    }

    @Action({commit: 'setProfile'})
    async loadProfile(username:string) {
        const profle = await api.fetchProfile(username);
    }

}

export default getModule(UsersModule);