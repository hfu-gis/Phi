<template>
    <v-container>
        <v-layout row>
            <v-flex md12>
    <v-carousel
            cycle
            height="600"
            hide-delimiter-background
            show-arrows-on-hover
            >
        <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="scroll-x-reverse-transition"
                transition="scroll-x-transition"
                >
        </v-carousel-item>

    </v-carousel>
            </v-flex>

            <v-flex md12>

                <v-card :elevation="selected"

                        color="light-blue lighten-5"

                >
                    <v-card-text>

                        <p class="text-center ma-10"
                           font="Helvetica"
                        >
                            <v-btn text x-large :to="{name:'Registration'}"
                                    color="light-blue lighten-2"
                                    >
                                    GET STARTED NOW.</v-btn>
                        </p>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex md4>

                <v-card :elevation="selected"

                        color="white"

                >
                    <v-card-text>

                        <p class="text-center ma-10">

                            <v-avatar
                                    slot="icon"
                                    color="light-blue lighten-2"
                                    size="40"
                            >
                                <v-icon
                                        icon="mdi-map"
                                        color="white"
                                >
                                    mdi-map
                                </v-icon>
                            </v-avatar>


                        <p class="text-center ma-10"
                           font="Helvetica"
                           >
                        TRACK YOUR TRAVELS{{ selected }}
                        <v-spacer>
                        Keep your family up to date about your location and adventures.
                        </v-spacer>
                    </p>
                    </v-card-text>
                </v-card>
            </v-flex>


            <v-flex md4>

                <v-card :elevation="selected"

                        color="white"

                >
                    <v-card-text>

                        <p class="text-center ma-10">

                            <v-avatar
                                    slot="icon"
                                    color="light-blue lighten-2"
                                    size="40"
                            >
                                <v-icon
                                        icon="mdi-account-heart"
                                        color="white"
                                >
                                    mdi-account-heart
                                </v-icon>
                            </v-avatar>

                        <p class="text-center ma-10"
                           font="Helvetica"
                        >
                        RIDE ALONG WITH FRIENDS{{ selected }}
                        <v-spacer>
                            Follow your family and friends on their trips and feel like you're in the passenger seat.
                        </v-spacer>

                        </p>

                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex md4>

                <v-card :elevation="selected"

                        color="white"

                >
                    <v-card-text>

                        <p class="text-center ma-10">

                            <v-avatar
                                    slot="icon"
                                    color="light-blue lighten-2"
                                    size="40"
                            >
                                <v-icon
                                        icon="mdi-white-balance-sunny"
                                        color="white"
                                >
                                    mdi-white-balance-sunny
                                </v-icon>
                            </v-avatar>

                        <p class="text-center ma-10"
                           font="Helvetica"
                        >
                        GET SOME INSPIRATION.{{ selected }}
                        <v-spacer>
                            Let yourself be carried away by wanderlust. What's your next travel destination?
                        </v-spacer>

                        </p>

                    </v-card-text>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
    }
</script>

<style>

</style>