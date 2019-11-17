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

        <header><h1>Fotos hinzufügen</h1></header>


        <form class="box" method="post" action="" enctype="multipart/form-data">
            <div class="box__input">
                <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected"
                       multiple/>

                <button class="box__button" type="submit">Upload</button>
            </div>
        </form>
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


    .topnav a.active {
        background-color: mediumslateblue;
        color: white;
    }
</style>
