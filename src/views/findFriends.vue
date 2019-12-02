<template>
    <div class="body-1">
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->

        <header><h1>Freunde finden</h1></header>

        <input type="text" placeholder="Search..">
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
    body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-image: url("https://wallpaperplay.com/walls/full/7/9/a/184079.jpg");
        background-size: cover;
    }


    /* Add background color to the top navigation */
    .topnav {
        background-color: cornflowerblue;
        overflow: hidden;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }


</style>
