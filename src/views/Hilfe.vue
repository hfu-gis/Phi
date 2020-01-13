<template>
<v-container>
    <v-layout row>
        <v-flex md12>
            <v-card :elevation="selected"
            color="light-blue lighten-4"
            >
                <v-card-text>
                    <h1 class="text-center ma-10">
                        Help
                    </h1>
                <p class="text ma-10">
                    Have any questions or problems with our app?
                    Someone already might have had the same issue. Have a look at the most asked questions below or write a message to our Support team and we'll get back to you asap.
                </p>
                </v-card-text>
            </v-card>
             <v-expansion-panels>
                <v-expansion-panel
                v-for="(question,i) in 5"
                :key="i"
                 >
                <v-expansion-panel-header>Question</v-expansion-panel-header>
                     <v-expansion-panel-content>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-flex>
    </v-layout>
</v-container>
</template>
