import homePage from './pages/app-home.cmp.js';
import mailApp from './apps/email/pages/mail-app.cmp.js';


const routes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    {
        path: '/appMail',
        component: mailApp
    },
    // {
    //     path: '/appKeep',
    //     component: keepApp
    // },


    // {
    //     path: '/book/edit/:bookId?',
    //     component: bookEdit
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});