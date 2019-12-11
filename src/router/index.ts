import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/Settings.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/editor',
        name: 'editor',
        component: () => import('@/views/Editor.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/views/Article.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
