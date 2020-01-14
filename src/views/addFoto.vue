
<template>
    <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
            <v-card>

                <v-card-text>

                    <p class="text-center ma-10"
                       font="Helvetica">
                        <v-btn text x-large :to="{}"
                               style="color: cornflowerblue">
                            YOUR PHOTOS</v-btn>
                    </p>

                    <form class="box" method="post" action="" enctype="multipart/form-data" >
                        <div class="box__input" style="color: cornflowerblue" >
                            <input class="box__file"  type="file" name="files[]" id="file" data-multiple-caption="{count} files selected"
                                   multiple/>

                            <v-btn class="box__button" type="submit" style="color: cornflowerblue">
                                Upload</v-btn>
                        </div>
                    </form>
                </v-card-text>
                <v-container fluid>
                    <v-row>
                        <v-col
                                v-for="n in 24"
                                :key="n"
                                class="d-flex child-flex"
                                cols="4"
                        >
                            <v-card flat tile class="d-flex">
                                <v-img
                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                >
                                    <template v-slot:placeholder>
                                        <v-row
                                                class="fill-height ma-0"
                                                align="center"
                                                justify="center"
                                        >
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>

</template>

<style>


</style>

