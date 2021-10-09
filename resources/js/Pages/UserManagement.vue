<template>
    <Head title="Dashboard"/>

    <BreezeAuthenticatedLayout>
        <div class="p-14">
            <Table
                :filters="queryBuilderProps.filters"
                :search="queryBuilderProps.search"
                :columns="queryBuilderProps.columns"
                :on-update="setQueryBuilder"
                :meta="users"
                class="bg-gray-900 opacity-90 p-14 rounded"
            >
                <template #head>
                    <tr>
                        <th @click.prevent="sortBy('name')">Name</th>
                        <th v-show="showColumn('email')" @click.prevent="sortBy('email')">Email</th>
                        <th v-show="showColumn('payment_received')" @click.prevent="sortBy('payment_received')">
                            Payment received
                        </th>
                        <th v-show="showColumn('arrives_on')" @click.prevent="sortBy('arrives_on')">arrives_on</th>
                        <th v-show="showColumn('has_arranged_transportation')"
                            @click.prevent="sortBy('has_arranged_transportation')">has_arranged_transportation
                        </th>
                        <th v-show="showColumn('chauffeur_name')" @click.prevent="sortBy('chauffeur_name')">
                            chauffeur_name
                        </th>
                        <th v-show="showColumn('has_medical_training')"
                            @click.prevent="sortBy('has_medical_training')">has_medical_training
                        </th>
                        <th v-show="showColumn('tent_size')" @click.prevent="sortBy('tent_size')">tent_size</th>
                        <th v-show="showColumn('other_tent_occupants')"
                            @click.prevent="sortBy('other_tent_occupants')">other_tent_occupants
                        </th>
                        <th v-show="showColumn('dietary_preferences')"
                            @click.prevent="sortBy('dietary_preferences')">dietary_preferences
                        </th>
                        <th v-show="showColumn('has_blankets')" @click.prevent="sortBy('has_blankets')">
                            has_blankets
                        </th>
                        <th v-show="showColumn('initial_sustenance')" @click.prevent="sortBy('initial_sustenance')">
                            initial_sustenance
                        </th>
                        <th v-show="showColumn('departure_date')" @click.prevent="sortBy('departure_date')">
                            departure_date
                        </th>

                        <th></th>
                    </tr>
                </template>

                <template #body>
                    <tr v-for="user in users.data" :key="user.id">
                        <td>{{ user.name }}</td>
                        <td v-show="showColumn('email')">{{ user.email }}</td>
                        <td v-show="showColumn('payment_received')">
                            <template v-if="user.payment_received">
                                <span class="bg-green-600 rounded p-1 text-white">PAID</span>
                            </template>
                            <template v-else>
                                <span class="bg-red-600 rounded p-1 text-white">NOT PAID</span>
                            </template>
                        </td>
                        <td v-show="showColumn('arrives_on')">{{ user.arrives_on }}</td>
                        <td v-show="showColumn('has_arranged_transportation')">
                            {{
                                user.has_arranged_transportation ? 'Yes' : 'No'
                            }}
                        </td>
                        <td v-show="showColumn('chauffeur_name')">{{ user.chauffeur_name }}</td>
                        <td v-show="showColumn('has_medical_training')">{{
                                user.has_medical_training ? 'Yes' : 'No'
                            }}
                        </td>
                        <td v-show="showColumn('tent_size')">{{ user.tent_size }}</td>
                        <td v-show="showColumn('other_tent_occupants')">{{ user.other_tent_occupants }}</td>
                        <td v-show="showColumn('dietary_preferences')">{{ user.dietary_preferences }}</td>
                        <td v-show="showColumn('has_blankets')">{{ user.has_blankets ? 'Yes' : 'No' }}</td>
                        <td v-show="showColumn('initial_sustenance')">{{ user.initial_sustenance }}</td>
                        <td v-show="showColumn('departure_date')">{{ user.departure_date }}</td>
                        <td>
                            <Link :href="route('user.edit', user)"><i class="fas fa-edit"></i></Link>
                        </td>
                    </tr>
                </template>
            </Table>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue'
import {Head, Link} from '@inertiajs/inertia-vue3';

import {InteractsWithQueryBuilder, Tailwind2} from '@protonemedia/inertiajs-tables-laravel-query-builder';

export default {
    mixins: [InteractsWithQueryBuilder],

    components: {
        Table: Tailwind2.Table,
        BreezeAuthenticatedLayout,
        Head,
        Link,
    },

    props: {
        users: Object
    }
};
</script>
