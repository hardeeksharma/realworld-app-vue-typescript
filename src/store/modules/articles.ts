import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {store} from '@/store';
import {Article} from "@/store/modules";
import * as api from '@/store/api';

@Module({
    dynamic: true,
    name: 'articles',
    namespaced: true,
    store,
})

class ArticlesModule extends VuexModule {
    globalFeed: Article[] = []
    userFeed: Article[] = []

    @Mutation
    setGlobalFeed(articles: Article[]) {
        this.globalFeed = articles;
    }

    @Action({commit: 'setGlobalFeed'})
    async refreshGlobalFeed() {
        const feed = await api.getGlobalFeed();
        return feed.articles
    }
}

export default getModule(ArticlesModule);