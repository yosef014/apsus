import homePage from './pages/app-home.cmp.js';
import mailApp from './apps/email/pages/mail-app.cmp.js';
import keepApp from './apps/keep/pages/note-app.cmp.js';
import mailDetails from './apps/email/cmps/mail-details.cmp.js'
import inbox from './apps/email/cmps/inbox.cmp.js'



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
                path: 'details',
                component: mailDetails
            },
            {
                path: 'inbox',
                component: inbox
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