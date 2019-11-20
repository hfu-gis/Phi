<template>
    <div class="body-1">
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <div class="login-box">
            <h1>Login</h1>
            <div class="textbox">
                <v-ion-icon name="person"></v-ion-icon>
                <input type="text" placeholder="Benutzer" name="" value="">
            </div>

            <div class="textbox">
                <v-ion-icon name="lock"></v-ion-icon>
                <input type="text" placeholder="Passwort" name="" value="">
            </div>
            <input class="btn" type="button" name="" value="Anmelden">
            <input class="btn" type="button" name="" value="Registrieren">
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
        background: image();
        background-size: cover;
    }
    .login-box{
        width: 280px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #000000;
    }
    .login-box h1{
        float: left;
        font-size: 40px;
        border-bottom: 6px solid #000000;
        margin-bottom: 50px;
        padding: 13px 0;
    }
    .textbox{
        width: 100%;
        overflow: hidden;
        font-size: 20px;
        padding:8px 0;
        margin: 8px 0;
        border-bottom: 1px solid #000000;
    }
    .textbox i{
        width: 26px;
        float: left;
        text-align: center;
    }
    .textbox input{
        border: none;
        outline: none;
        background: none;
        color: #000000;
        font-size: 18px;
        width: 80%;
        float: left;
        margin: 0 10px;
    }
    .btn{
        background: none;
        border: 2px solid #000000;
        color: #000000;
        padding: 5px;
        font-size: 18px;
        cursor: pointer;
        margin: 12px 0;
    }
    .btn{
        background: none;
        border: 2px solid #000000;
        color: #000000;
        padding: 5px;
        font-size: 18px;
        cursor: pointer;
        margin: 12px 0;
    }
    <img src="../assets/184079.jpg" height="1473" width="2000"/><img src="../assets/184079.jpg" height="1473"
                                                                     width="2000"/><img src="../assets/landkarte.png"/>
</style>
