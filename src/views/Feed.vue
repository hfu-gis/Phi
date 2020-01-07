<template>


    <v-card

            max-width="1000"

            class="mx-auto"

    >

        <v-list-item>

            <v-list-item-avatar color="grey"></v-list-item-avatar>

            <v-list-item-content>

                <v-list-item-title class="headline">Lisa Wagner</v-list-item-title>


            </v-list-item-content>

        </v-list-item>

        <v-img
                class="white--text align-end"
                height="500px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title>My top 10 Australian beaches</v-card-title>

        </v-img>



        <v-card-text>
            Australia has over 10.000 beaches. You could spend 27 years visiting another beach every single day. Of course I haven't seen them all, as I've only travelled Australia for one year, but I've seen a few. So here's a list of my top 10 Australian beaches.

        </v-card-text>



        <v-card-actions>

            <v-btn

                    text

                    color="blue"

            >

                Read more

            </v-btn>


            <v-spacer></v-spacer>

            <v-btn icon>

                <v-icon>mdi-heart</v-icon>

            </v-btn>

            <v-btn icon>

                <v-icon>mdi-bookmark</v-icon>

            </v-btn>

        </v-card-actions>

    </v-card>


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


</style>