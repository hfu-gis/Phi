<template>
    <div class="body-1">
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <div class="login-box">
            <br>
            <br>
            <h1 class="h1">Imprint</h1>
            <h2 class="h2">a project by</h2>
            <h3 class="h3">
            Isabel Schindler<br>
            Leonie Schwall<br>
            Luca Schmid<br>
                Malte Krolik
            </h3>
            <h4 class="h4">in cooperation with the University Furtwangen</h4>
            <h5 class="h5">contact:<br>
            contact@travelmap.com<br>
            phone: 123 45678</h5>



        </div>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'Login',

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

    .body-1{
        margin: 0;
        padding: 0;
        font-family: Arial;
        background-image: url("https://wallpaperplay.com/walls/full/7/9/a/184079.jpg");
        background-size: cover;
    }

    .login-box{
        width: 500px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,0.5);
        background-color: rgba(125, 199, 228, 0.5);
        border-radius: 20px;
        text-align: center;
    }

    .textbox i
    {
        width: 26px;
        float: left;
    }

    .h1{font-size:60px; font-family: Arial; font-weight: lighter}
    .h2{font-size:25px; font-family: Arial; font-weight: lighter; margin-top: 50px}
    .h3{font-size:25px; font-family: Arial; font-weight: lighter; margin-top: 40px}
    .h4{font-size:20px; font-family: Arial; font-weight: lighter; margin-top: 30px}
    .h5{font-size:20px; font-family: Arial; font-weight: lighter; margin-top: 30px}


</style>
