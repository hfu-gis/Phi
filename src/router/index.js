import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Startseite from "../views/Startseite";
import Menü from "../views/Menü";
import Profil from "../views/Profil";
import Hilfe from "../views/Hilfe";
import findFriends from "../views/findFriends";
import PinSetzen from "../views/PinSetzen";
import addFoto from "../views/addFoto";
import Ticket1 from "../views/Ticket1";
import Ticket2 from "../views/Ticket2";
import TicketLaden from "../views/TicketLaden";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/Login',
            name: "Login",
            component: Login
        },
        {
            path: '/Startseite',
            name: "Startseite",
            component: Startseite
        },
        {
            path: '/Menü',
            name: "Menü",
            components: Menü
        },
        {
            path: '/Profil',
            name: "Profil",
            components: Profil
        },
        {
            path: '/Hilfe',
            name: "Hilfe",
            components: Hilfe
        },
        {
            path: '/findFriends',
            name: "findFriends",
            components: findFriends
        },
        {
            path: '/PinSetzen',
            name: "PinSetzen",
            components: PinSetzen
        },
        {
            path: '/addFoto',
            name:"addFoto",
            components: addFoto
        },
        {
            path: '/Ticket1',
            name: "Ticket1",
            components: Ticket1
        },
        {
            pathe: '/Ticket2',
            name: "Ticket2",
            components: Ticket2
        },
        {
            path: '/TicketLaden',
            name: "TicketLaden",
            components: TicketLaden
        },

    ]
})
