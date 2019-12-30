import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {store} from '@/store';
import {Article} from "@/store/modules";
import * as api from '@/store/api';

type FeedType ='global' | 'user'

@Module({
    dynamic: true,
    name: 'articles',
    namespaced: true,
    store,
})
class ArticlesModule extends VuexModule {
    feed: Article[] = []

    @Mutation
    setGlobalFeed(articles: Article[]) {
        this.feed = articles;
    }

    @Action({commit: 'setGlobalFeed'})
    async refreshFeed(feedType:FeedType) {
        const feed = await api.getGlobalFeed();
        return feed.articles
    }
}

export default getModule(ArticlesModule);