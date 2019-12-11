import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {IProfile, IUser, IUserSubmit} from "@/store/modules";
import {store} from '@/store';
import {loginUser} from "@/store/api";

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

    @Action({commit: 'setUser'})
    async login(userSubmit: IUserSubmit) {
        console.log(userSubmit);
        const user = await loginUser(userSubmit);
        console.log(user);
        return ({user: user})
    }

}

export default getModule(UsersModule);