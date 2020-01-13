<template>
    <v-card
            height="900"
            width="500"
            class="mx-auto"

    >
        <v-toolbar
                color="deep-purple accent-4"
                dark
        >

            <v-toolbar-title>Your Friends</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-toolbar>

        <v-list subheader>
            <v-subheader>Recent chat</v-subheader>

            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    @click=""
            >
                <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="item.title"> </v-list-item-title>
                    <v-list-item-headline v-text="item.headline"> </v-list-item-headline>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">mdi-chat</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-card>
</template>


<script>
    export default {
        data: () => ({
            items: [
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', headline: 'Most recent destination: Austria', subtitle: 'Latest Blogpost: During my visit in Austria I went to...' },
                { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' , headline: 'Most recent destination: Turkey', subtitle: 'Latest Blogpost: What I liked most about Turkey was their...'},
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', headline: 'Most recent destination: Brazil', subtitle: 'Latest Blogpost: When in Rome, or rather in Rio de...' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' , headline: 'Most recent destination: Thailand', subtitle: 'Latest Blogpost: Finally visited Thailand after years...'},
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', headline: 'Most recent destination: Wales', subtitle: 'Latest Blogpost: Since my family is originally from Wales I...' },
                { title: 'Jason Chapman', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460', headline: 'Most recent destination: Germany' , subtitle: ' What surprised me most about Germany was that everywhere...'},
            ],
        }),
    }
</script>
