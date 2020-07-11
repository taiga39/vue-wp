import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import Hage from './components/HelloWorld.vue';

Vue.use(VueRouter);

const routes =  [
    { 
        path: '/', 
        component: Top 
    },
    { 
        path: '/hage/:id', 
        component: Hage
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;