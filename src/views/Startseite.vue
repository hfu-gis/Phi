<template>
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
                reverse-transition="fade-transition"
                transition="scroll-x-transition"
                >

            <v-card :elevation="selected"

                    color="light-blue lighten-3"

            >
                <v-card-text>

                    <p class="text-center ma-10"
                    font="Helvetica"
                    >

                        EXPLORE.
                        DREAM.
                        DISCOVER.{{ selected }}

                    </p>

                </v-card-text>

            </v-card>
        </v-carousel-item>
    </v-carousel>

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