<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">Countries visited</th>
                <th class="text-left">Countries to visit</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    export default {
        data () {
            return {
                desserts: [
                    {
                        name: 'Germany',
                        calories: `South Africa`,
                    },
                    {
                        name: 'France',
                        calories: `Sweden`,
                    },
                    {
                        name: 'Italy',
                        calories: `Canada`,
                    },
                    {
                        name: 'Spain',
                        calories: `Australia`,
                    },
                    {
                        name: 'Poland',
                        calories: `New Zealand`,
                    },
                    {
                        name: 'Switzerland',
                        calories: `Botswana`,
                    },
                    {
                        name: 'United States',
                        calories: `Peru`,
                    },
                    {
                        name: 'Croatia',
                        calories: `Russia`,
                    },
                    {
                        name: 'Netherlands',
                        calories: `Kambodia`,
                    },
                    {
                        name: 'Norway',
                        calories: `Denmark`,
                    },
                ],
            }
        },
    }
</script>