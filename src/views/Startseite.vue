<template>
    <div class="section">
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <h1>EXPLORE. DREAM. DISCOVER.</h1>
        <p>we help you turning your travel moments into lifetime memories.</p>
        <p>Share your travel journey with family and friends or get some travel inspiration by following others on their travels.  </p>
            <div class="video-container">
            <div class=".color-overlay"></div>
        <video autoplay loop muted>
            <iframe src="https://www.youtube.com/embed/2bW68nM0gk8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </video>
    </div>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'Startseite',

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
    .section{
     position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .section h1 {
        text-align: center;
        font-size: 6rem;
        font-family: Roboto-RegularItalic;
        padding: 20px;
        margin: 15px;
        z-index: 1;
        opacity: 0.7;
    }

    .section h2 {
        text-align: center;
        font-size: 2rem;
        font-family: Calibri;
        padding: 20px;
        margin: 15px;
        z-index: 1;
        opacity: 0.7;
    }

    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .color-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background-color: lightblue;
        width:100%;
        height: 90vh;
        opacity: 0.5;
    }


</style>
