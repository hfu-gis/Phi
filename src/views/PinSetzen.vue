<template>
    <div class="body-1">
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->

        <div class="tooltip">Hover over me
            <span class="tooltiptext">Tooltip text</span>
        </div>
        <header><h1 class="h1">Länder suchen</h1></header>
        <header><h2 class="h2">wähle Wunschländer aus</h2></header>

        <input type="text" placeholder="Search..">



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
    .h1{font-size: 40px; font-family: Arial; font-weight: lighter; margin-top: -60%}
    .h2{font-size:20px; font-family: Arial; font-weight: lighter}
    body {
        background: #e6e6e6;
    }

    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;

        /* Position the tooltip text */
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;

        /* Fade in tooltip */
        opacity: 0;
        transition: opacity 0.3s;
    }

    /* Tooltip arrow */
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>
