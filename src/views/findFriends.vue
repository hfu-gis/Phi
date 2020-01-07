<template>
    <div class="container">
        <div class="top">
            <h2>Find Friends</h2>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="topnav">
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Looking for a traveling acquaintance?" name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>        </div>

        <div class="list">
            <div class="shadow">
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                src="https://previews.123rf.com/images/mnimpres/mnimpres1610/mnimpres161000130/64934650-illustration-travel-inspiration-zitiert-auf-koffer-silhouette-vintage-schriftzug-gep%C3%A4ck-f%C3%BCr-die-reise-ich-r.jpg"
                                class="avatar"
                                height="300px"
                                width="300px">
                        </v-img>

                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Malte Krolik</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                    </div>
                    <div class="col-sm-2">
                        <v-img src="https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                               class="avatar"
                               height="50px"
                               width="50px">
                        </v-img>                        <br>
                        <a href="#">Send Request</a>
                    </div>
                </div>
                <div class="clearfix"></div>
                <hr />
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                src="https://previews.123rf.com/images/mnimpres/mnimpres1610/mnimpres161000130/64934650-illustration-travel-inspiration-zitiert-auf-koffer-silhouette-vintage-schriftzug-gep%C3%A4ck-f%C3%BCr-die-reise-ich-r.jpg"
                                class="avatar"
                                height="300px"
                                width="300px">
                        </v-img>
                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Isabel Schindler</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                    </div>
                    <div class="col-sm-2">
                        <v-img src="https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                               class="avatar"
                               height="50px"
                               width="50px">
                        </v-img>                        <br>
                        <a href="#">Send Request</a>
                    </div>
                </div>
                <div class="clearfix"></div>
                <hr />
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                src="https://previews.123rf.com/images/mnimpres/mnimpres1610/mnimpres161000130/64934650-illustration-travel-inspiration-zitiert-auf-koffer-silhouette-vintage-schriftzug-gep%C3%A4ck-f%C3%BCr-die-reise-ich-r.jpg"
                                class="avatar"
                                height="300px"
                                width="300px">
                        </v-img>                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Leonie Schwall</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                    </div>
                    <div class="col-sm-2">
                        <v-img src="https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                               class="avatar"
                               height="50px"
                               width="50px">
                        </v-img>                        <br>
                        <a href="#">Send Request</a>
                    </div>
                </div>
                <div class="clearfix"></div>
                <hr />
                <div class="col-sm-12">
                    <div class="col-sm-2">
                        <v-img
                                src="https://previews.123rf.com/images/mnimpres/mnimpres1610/mnimpres161000130/64934650-illustration-travel-inspiration-zitiert-auf-koffer-silhouette-vintage-schriftzug-gep%C3%A4ck-f%C3%BCr-die-reise-ich-r.jpg"
                                class="avatar"
                                height="300px"
                                width="300px">
                        </v-img>                    </div>
                    <div class="col-sm-8">
                        <h4><a href="#">Patrick Ulmschneider</a></h4>
                        <p><a href="#">4 mutual friends</a></p>
                    </div>
                    <div class="col-sm-2">
                        <v-img src="https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                        class="avatar"
                        height="50px"
                        width="50px">
                        </v-img>

                        <br>
                        <a href="#">Send Request</a>

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
    body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-image: url("https://wallpaperplay.com/walls/full/7/9/a/184079.jpg");
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
</style>
