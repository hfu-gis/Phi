<template>
    <div>
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <header><h1 class="h1">interaktive Weltkarte</h1></header>
        <header><h2 class="h2">wähle bereiste Länder aus</h2></header>

    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'interaktiveWeltkarte',

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
        methods: {},

        // Initialisierung
        created() {}
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
.h1{font-size: 40px; font-family: Arial; font-weight: lighter; margin-top: -60%}
    .h2{font-size:20px; font-family: Arial; font-weight: lighter}

</style>
