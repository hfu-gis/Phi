<template>
    <div class="body-1">
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <div class="login-box">
            <h1>Login</h1>
            <div class="textbox">
                <v-ion-icon name="person"></v-ion-icon>
                <input type="text" placeholder="Benutzername" name="" value="">
            </div>

            <div class="textbox">
                <v-ion-icon name="lock"></v-ion-icon>
                <input type="text" placeholder="Password" name="" value="">
            </div>
            <input class="btn" type="button" name="" value="Anmelden">
            <input class="text" placeholder="Neuland? Registriere dich" name="" value="">
            <input class="blue--text" type="button" name="" value="hier">
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
    /* CSS für diese Seite hier einfügen */
    body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-image: url("https://wallpaperplay.com/walls/full/7/9/a/184079.jpg");
        background-size: cover;
    }

    .login-box{
        width: 280px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,0.5);
        border-radius: 10px;
        text-align: center;
    }
    .login-box h1{
        float: left;
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 30px;
        padding: 13px 0;
        text-align: center;
    }
    .textbox
    {
        width: 100%;
        overflow: hidden;
        font-size: 20px;
        padding:8px 0;
        margin: 8px 0;
        border-bottom: 1px solid #000000;
    }
    .textbox i
    {
        width: 26px;
        float: left;
    }
    .textbox input
    {
        border: none;
        outline: none;
        background: none;
        color: black;
        font-size: 16px;
        width: 100%;
        float: left;
        margin: 0 10px;
    }
    .btn{
        width: 30%;
        background: none;
        border: 1px solid #000000;
        color: #000000;
        padding: 5px;
        font-size: 16px;
        cursor: pointer;
        margin: 12px 0;
        border-radius: 10px;
    }

</style>
