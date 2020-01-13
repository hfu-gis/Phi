import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Order from '../views/Order'
import Overview from '../views/Overview'
import App from '../App'
import Startseite from '../views/Startseite';
import addFoto from '../views/addFoto';
import CountrySelection from '../views/CountrySelection';
import findFriends from '../views/findFriends';
import Hilfe from '../views/Hilfe';
import Menü from '../views/Menü';
import PinSetzen from '../views/PinSetzen';
import Profil from '../views/Profil';
import Ticket1 from '../views/Ticket1';
import Ticket2 from '../views/Ticket2';
import TicketLaden from '../views/TicketLaden';
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
            path: '/overview',
            name: 'Overview',
            component: Overview
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/startseite',
            name: 'Startseite',
            component: Startseite
        },
        {
            path: '/addfoto',
            name: 'addFoto',
            component: addFoto
        },
        {
            path: '/countryselection',
            name: 'CountrySelection',
            component: CountrySelection
        },
        {
            path: '/findfriends',
            name: 'findFriends',
            component: findFriends
        },
        {
            path:'/hilfe',
            name:'Hilfe',
            component: Hilfe
        },
        {
            path: '/menü',
            name: 'Menü',
            component: Menü
        },
        {
            path: '/pinsetzen',
            name:'PinSetzen',
            component: PinSetzen
        },
        {
            path: '/profil',
            name:'profil',
            component: Profil
        },
        {
            path: '/ticket1',
            name: 'Ticket1',
            component: Ticket1
        },
        {
            path: '/ticket2',
            name: 'Ticket2',
            component: Ticket2
        },
        {
            path: '/ticketladen',
            name: 'TicketLaden',
            component: TicketLaden
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
