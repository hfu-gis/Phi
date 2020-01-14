<template>
    <v-layout row>
        <v-flex md12>
            <v-card :elevation="selected"
                    color="light-blue lighten-4"
            >
                <v-card-text>
                    <h1 class="text-center ma-10">
                        <h2 class="h1">Imprint</h2>
                    </h1>
                    <p class="text-center ma-10">
                        This is a project in the basics of interactive media of the 2. semester at the University of Furtwangen.
                    </p>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-flex md6>
            <v-card :elevation="selected"
                    color="light-blue lighten-5"
            >
                <v-card-text>
                    <h1 class="text-center ma-10">
                        <h2 class="h1">Team</h2>
                    </h1>
                    <p class="text-center ma-10">
                        Malte Krolik<br>
                        Isabel Schindler<br>
                        Leonie Schwall<br>
                        Luca Schmid<br>
                        Supervisor: Alfred Walther-Weyland
                    </p>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-flex md6>
            <v-card :elevation="selected"
                    color="light-blue lighten-5"
            >
                <v-card-text>
                    <h1 class="text-center ma-10">
                        <h2 class="h1">Contact</h2>
                    </h1>
                    <p class="text-center ma-10">
                        adress: Travelmap Headquaters<br>
                        Travelstreet 1<br>
                        1234 Traveltown<br>
                        email: conact@travelmap.com<br>
                        phone: 1023 45678
                    </p>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>


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
    .h1{color: darkblue}
</style>
