<template>
    <div class="article-preview">
        <div class="article-meta">
            <a href="profile.html"><img :src="article.author.image" /></a>
            <div class="info">
                <router-link :to="`/@${article.author.username}`" class="author">{{article.author.username}}</router-link>
                <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
        </div>
        <router-link :to="`/article/${article.slug}`" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
        </router-link>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import {Article} from "@/store/modules";

    @Component
    export default class ArticlePreview extends Vue {
        @Prop() article?: Article
        created(){
            // console.log(this.article)
        }
    }
</script>

<style scoped>

</style>