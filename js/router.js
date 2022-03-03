import homePage from './pages/app-home.cmp.js';
import mailApp from './apps/email/pages/mail-app.cmp.js';
import keepApp from './apps/keep/pages/note-app.cmp.js';
import mailDetails from './apps/email/cmps/mail-details.cmp.js'
import inbox from './apps/email/cmps/inbox.cmp.js'
import sent from './apps/email/cmps/sent.cmp.js'
import favorites from './apps/email/cmps/favorite.cmp.js'
import all from './apps/email/cmps/all.cmp.js'



const routes = [
    {
        path: '/',
        component: homePage
    },
   
    {
        path: '/appMail',
        component: mailApp,
        children: [
            {
                path: 'inbox',
                component: inbox
            },
            {
                path: 'sent',
                component: sent
            },
            {
                path: 'all',
                component: all
            },
            {
                path: 'favorite',
                component: favorites
            },
            {
                path: 'inbox/:mailId',
                component: mailDetails
            },
            {
                path: 'all/:mailId',
                component: mailDetails
            },
            {
                path: 'sent/:mailId',
                component: mailDetails
            },
            {
                path: 'favorite/:mailId',
                component: mailDetails
            },
        ]
    },
    {
        path: '/appKeep',
        component: keepApp
    },


    // {
    //     path: '/book/edit/:bookId?',
    //     component: bookEdit
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});