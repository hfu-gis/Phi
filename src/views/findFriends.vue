<template>
    <div class="container">
        <div class="top">
            <h2>Find Friends</h2>
        </div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet">
        <div class="topnav">
            <form action="action_page.php" class="example">
                <input name="search" placeholder="Looking for a traveling acquaintance?" type="text">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>

        <div class="list">
            <div class="shadow">
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                class="avatar" height="300px"
                                src="https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/09/768x384/landscape-1488567815-index-european-tulips.jpg?resize=480:*"
                                width="300px">
                        </v-img>

                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Malte Krolik</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                        <p>You've both been to:</p>
                        <p><a href="#"> The Netherlands </a></p>
                    </div>
                    <div class="col-sm-2">

                        <button class="btn"><i class="fa fa-globe"></i> Add Friend</button>
                    </div>
                </div>

                <div class="clearfix"></div>
                <hr/>
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                class="avatar" height="300px"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwBUmE-BfVownZOYFYWrWQTo_oNhGzlSxq3zm0tGVuua7i4hl6"
                                width="300px">
                        </v-img>
                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Isabel Schindler</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                        <p>You've both been to:</p>
                        <p><a href="#"> Australia </a></p>
                    </div>
                    <div class="col-sm-2">

                        <button class="btn"><i class="fa fa-globe"></i> Add Friend</button>
                    </div>
                </div>
                <div class="clearfix"></div>
                <hr/>
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                class="avatar" height="300px"
                                src="data:image/jpeg;base64,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"
                                width="300px">
                        </v-img>
                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Leonie Schwall</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                        <p>You've both been to:</p>
                        <p><a href="#"> Canada </a></p>
                    </div>
                    <div class="col-sm-2">

                        <button class="btn"><i class="fa fa-globe"></i> Add Friend</button>
                    </div>
                </div>
                <div class="clearfix"></div>
                <hr/>
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                class="avatar" height="300px"
                                src="data:image/jpeg;base64,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"
                                width="300px">
                        </v-img>
                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Patrick Ulmschneider</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                        <p>You've both been to:</p>
                        <p><a href="#"> Ireland </a></p>
                    </div>
                    <div class="col-sm-2">

                        <button class="btn"><i class="fa fa-globe"></i> Add Friend</button>


                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
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

        //Variablen-Speicher
//            return {}
        // },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: [],

        // Initialisierung
        //    created() {}
    }

</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-size: cover;
    }


    /* Add background color to the top navigation */
    .topnav {
        background-color: cornflowerblue;
        overflow: hidden;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 100px 100px;
        text-decoration: none;
        font-size: 17px;
    }

    form.example input[type=text] {
        padding: 10px;
        font-size: 17px;
        border: 0px solid grey;
        float: left;
        width: 80%;
        background: #f1f1f1;
    }

    .topnav .search-container button {
        float: right;
        padding: 50px 10px;
        margin-top: 15px;
        margin-right: 16px;
        background: #ddd;
        font-size: 17px;
        border: none;
        cursor: pointer;
    }

    .topnav .search-container button:hover {
        background: #ccc;
    }

    form.example button {
        float: left;
        width: 20%;
        padding: 10px;
        background: cornflowerblue;
        color: white;
        font-size: 17px;
        border: 0px solid grey;
        border-left: none; /* Prevent double borders */
        cursor: pointer;
    }

    .btn {
        background-color: cornflowerblue;
        border: none;
        color: white;
        padding: 12px 16px;
        font-size: 16px;
        cursor: pointer;
    }

    /* Darker background on mouse-over */
    .btn:hover {
        background-color: RoyalBlue;
    }
</style>
