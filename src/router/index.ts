import { createRouter, createWebHistory } from 'vue-router'
let router = createRouter({
    history: createWebHistory(),
    scrollBehavior(){
        return {
            left: 0,
            top: 0
        }
    },
    routes: [
        {
            path: '/',
            component: ()=>import('@/views/home.vue'),
            name: 'Home'
        },
        {
            path: '/login',
            component: ()=>import('@/views/login.vue'),
            name: 'Login'
        },
        {
            path: '/404',
            component: ()=>import('@/views/404.vue'),
            name: '404'
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            name: 'Any'
        }
    ]
})
export default router
