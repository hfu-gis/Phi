<template>
    <v-container>
    <v-form ref="form" v-model="valid">
        <v-row v-if="success" align="center" justify="center">
            <v-card elevation="10">
                <v-img src="http://picsum.photos/200"
                       class="white--text align-end"
                       gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                    <v-card-title v-text>Registration<br/>successful</v-card-title>
                </v-img>
            </v-card>
        </v-row>
        <v-row v-else align="top" justify="center">
            <v-col cols="12" md="6">
                <v-text-field label="Nickname" v-model="userData.nickName" required maxlength="25"
                              :disabled="this.userData.isAlreadyRegistered"
                              :rules="nameRules"/>
                <v-text-field label="Password" v-model="userData.password" required  maxlength="25"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="showPassword ? 'text' : 'password'"
                              @click:append="showPassword = !showPassword"
                              :rules="nameRules"
                />
                <v-text-field label="Name" v-model="userData.name" required  maxlength="25"
                              :rules="nameRules"/>
                <v-text-field label="Family name" v-model="userData.familyName" required  maxlength="25"
                              :rules="nameRules"/>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field label="City" v-model="userData.city" required
                              :rules="nameRules"/>
                <v-select label="Country" :items="countries" v-model="userData.country" required clearable
                          :rules="selectionRules"
                />
            </v-col>
            <v-btn text outlined shaped
                   color="light-blue lighten-2"
                   @click="validate">Register
            </v-btn>

        </v-row>
    </v-form>
    </v-container>
</template>

<script>
    //import db from '../db'
    import db from '../db'
    export default {
        props: {},
        data: () => ({
            success: false,
            valid: true,
            showPassword: false,
            userData: {
                nickName: '',
                password: '',
                name: '',
                familyName: '',
                streetName: '',
                streetNr: undefined,
                zipCode: '',
                city: '',
                country: '',
                isAlreadyRegistered: false
            },
            countries: [
                "Afghanistan",
                "Albania",
                "Algeria",
                "Andorra",
                "Angola",
                "Antigua & Deps",
                "Argentina",
                "Armenia",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bhutan",
                "Bolivia",
                "Bosnia Herzegovina",
                "Botswana",
                "Brazil",
                "Brunei",
                "Bulgaria",
                "Burkina",
                "Burundi",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cape Verde",
                "Central African Rep",
                "Chad",
                "Chile",
                "China",
                "Colombia",
                "Comoros",
                "Congo",
                "Congo (Democratic Rep)",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "East Timor",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Fiji",
                "Finland",
                "France",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Greece",
                "Grenada",
                "Guatemala",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Honduras",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran",
                "Iraq",
                "Ireland (Republic)",
                "Israel",
                "Italy",
                "Ivory Coast",
                "Jamaica",
                "Japan",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea North",
                "Korea South",
                "Kosovo",
                "Kuwait",
                "Kyrgyzstan",
                "Laos",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macedonia",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Mauritania",
                "Mauritius",
                "Mexico",
                "Micronesia",
                "Moldova",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Morocco",
                "Mozambique",
                "Myanmar (Burma)",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Poland",
                "Portugal",
                "Qatar",
                "Romania",
                "Russia",
                "Rwanda",
                "St Kitts & Nevis",
                "St Lucia",
                "Saint Vincent & the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome & Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Syria",
                "Taiwan",
                "Tajikistan",
                "Tanzania",
                "Thailand",
                "Togo",
                "Tonga",
                "Trinidad & Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Vatican City",
                "Venezuela",
                "Vietnam",
                "Yemen",
                "Zambia",
                "Zimbabwe",
            ],
            nameRules: [
            //    value => (!!value && value.trim().length > 0) || 'Field is required',
             //   value => (value && value.length <= 25) || 'Field must be less than 25 characters',
            ],
            selectionRules: [
             //   value => !!value || 'Field is required'
            ]
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    console.debug('Validation success')
                    this.register()
                }
            },
            register()  {
                this.userData.isAlreadyRegistered = true
                let docRef = db.collection('User').doc( this.userData.nickName)
                docRef.set(this.userData)
                    .catch(error => console.debug('Error', error))
                    .then(() => this.success = true)
                // docRef.update(userData)
            }
        },
        created() {
            let docRef = db.collection('countries')
            docRef.get().then(docs => {
                docs.forEach(doc => this.countries.push(doc.data().name))
            })
            docRef = db.collection('User').doc( '')
            docRef.get().then(doc => this.userData = doc.data())
        }
    }
</script>


