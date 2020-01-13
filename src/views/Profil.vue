<template>
    <img src="img_avatar.png" alt="Avatar">
    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="card">
        <img src="img.jpg" alt="John" style="width:100%">
        <h1>John Doe</h1>
        <p class="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <p><button>Contact</button></p>
    </div>
    <v-simple-table dense>
         v-slot:default>
            <thead>
            <tr>
                <th class="text-left">visited countries</th>
                <th class="text-left">countries to visit</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.visited countries }}</td>
                <td>{{ item.countries to visit }}</td>
            </tr>
            </tbody>
    </v-simple-table>
</template>
<script>
    export default {
        data () {
            return {
                desserts: [
                    {
                        visited countries: 'Germany',
                        countries to visit: Nicaragua,
                    },
                    {
                        visited countries: 'Italy',
                        countries to visit: Australia,
                    },
                    {
                        visited countries: 'Spain',
                        countries to visit: Peru,
                    },
                    {
                        visited countries: 'Norway',
                        countries to visit: Sweden,
                    },
                    {
                        visited countries: 'Brazil',
                        countries to visit: South Africa,
                    },
                    {
                        visited countries: 'Botswana',
                        countries to visit: Namibia,
                    },
                    {
                        visited countries: 'United States',
                        countries to visit: Canada,
                    },
                    {
                        visited countries: 'France',
                        countries to visit: Portugal,
                    },
                    {
                        visited countries: 'Poland',
                        countries to visit: Russia,
                    },
                    {
                        visited countries: 'Turkey',
                        countries to visit: croatia,
                    },
                ],
            }
        },
    }
</script>

<style>
    img {
        border-radius: 50%;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
    }

    .title {
        color: grey;
        font-size: 18px;
    }

    button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }

    a {
        text-decoration: none;
        font-size: 22px;
        color: black;
    }

    button:hover, a:hover {
        opacity: 0.7;
    }
</style>




<style><
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
}

.title {
    color: grey;
    font-size: 18px;
}

button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}

button:hover, a:hover {
    opacity: 0.7;
}
</style>


