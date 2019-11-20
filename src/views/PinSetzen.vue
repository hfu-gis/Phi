<template>
    <div class="body-1">
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <div class="topnav">
            <a class="active" href="menu.html">Home</a>
            <a href="findFriends.html">Freunde finden</a>
            <a href="pin.html">Pin setzen</a>
            <a href="addFoto.html">Fotos </a>
            <a href="help.html">Hilfe</a>
            <a href="profile.html">Profil</a>
            <a href="index.html">Logout</a>
        </div>

        <header><h1>Länder suchen</h1></header>

        <input type="text" placeholder="Search..">

        <h2>Länderliste</h2>

        <ul style="list-style-type:disc;">
            <li>Australien</li>
            <li>Argentinien</li>
            <li>Belgien</li>
            <li>...</li>
        </ul>

        <div class='pin bounce'></div>
        <div class='pulse'></div>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'template',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data() {
            return {}
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: [],

        // Initialisierung
        created() {}
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
    body {
        background: #e6e6e6;
    }

    .pin {
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        background: #00cae9;
        position: absolute;
        transform: rotate(-45deg);
        left: 50%;
        top: 50%;
        margin: -20px 0 0 -20px;
    }
    .pin:after {
        content: "";
        width: 14px;
        height: 14px;
        margin: 8px 0 0 8px;
        background: #e6e6e6;
        position: absolute;
        border-radius: 50%;
    }

    .bounce {
        animation-name: bounce;
        animation-fill-mode: both;
        animation-duration: 1s;
    }

    .pulse {
        background: #d6d4d4;
        border-radius: 50%;
        height: 14px;
        width: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: 11px 0px 0px -12px;
        transform: rotateX(55deg);
        z-index: -2;
    }
    .pulse:after {
        content: "";
        border-radius: 50%;
        height: 40px;
        width: 40px;
        position: absolute;
        margin: -13px 0 0 -13px;
        animation: pulsate 1s ease-out;
        animation-iteration-count: infinite;
        opacity: 0;
        box-shadow: 0 0 1px 2px #00cae9;
        animation-delay: 1.1s;
    }

    @keyframes pulsate {
        0% {
            transform: scale(0.1, 0.1);
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            transform: scale(1.2, 1.2);
            opacity: 0;
        }
    }

    @keyframes bounce {
        0% {
            opacity: 0;
            transform: translateY(-2000px) rotate(-45deg);
        }

        60% {
            opacity: 1;
            transform: translateY(30px) rotate(-45deg);
        }

        80% {
            transform: translateY(-10px) rotate(-45deg);
        }

        100% {
            transform: translateY(0) rotate(-45deg);
        }
    }
</style>
