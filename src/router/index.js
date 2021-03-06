import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import App from '../App'
import Startseite from '../views/Startseite';
import addFoto from '../views/addFoto';
import findFriends from '../views/findFriends';
import friendslist from '../views/friendslist';
import Hilfe from '../views/Hilfe';
import Profil from '../views/Profil';
import interaktiveWeltkarte from "../views/interaktiveWeltkarte";
import Registration from "../views/Registration";
import Feed from "../views/Feed";
import Imprint from "../views/Imprint";


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Root',
            component: App
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/startseite',
            name: 'Startseite',
            component: Startseite
        },
        {
            path: '/addFoto',
            name: 'addFoto',
            component: addFoto
        },
        {
            path: '/findFriends',
            name: 'findFriends',
            component: findFriends
        },
        {
            path: '/friendslist',
            name: 'friendslist',
            component: friendslist
        },
        {
            path:'/hilfe',
            name:'hilfe',
            component: Hilfe
        },
        {
            path: '/Profil',
            name:'Profil',
            component: Profil
        },
        {
            path: '/interaktiveWeltkarte',
            name: 'interaktiveWeltkarte',
            component: interaktiveWeltkarte
        },
        {
            path: '/register',
            name: 'Registration',
            component: Registration
        },

        {
            path: '/feed',
            name: 'Feed',
            component: Feed
        },
        {
            path: '/imprint',
            name: 'Imprint',
            component: Imprint
        },

    ]
})
