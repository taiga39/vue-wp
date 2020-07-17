import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/top/Top.vue';
import Report from './components/report/Top.vue';
import Port from './components/port/Top.vue';
import Blog from './components/blog/Top.vue';
import About from './components/aboutus/Top.vue';
import Tech from './components/tech/Top.vue';
import BlogContent from './components/content/Top.vue';



Vue.use(VueRouter);

const routes =  [
    { 
        path: '/', 
        component: Top 
    },
    { 
        path: '/report', 
        component: Report,
    },
    { 
        path: '/portfolio', 
        component: Port
    },
    { 
        path: '/blog', 
        component: Blog
    },
    { 
        path: '/blog/:id', 
        component: BlogContent
    },
    { 
        path: '/aboutus', 
        component: About
    },
    { 
        path: '/tech', 
        component: Tech
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;