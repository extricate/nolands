<template>
    <Head title="Dashboard"/>

    <BreezeAuthenticatedLayout>
        <div class="h-40 py-12 p-6">
            <Table
                :filters="queryBuilderProps.filters"
                :search="queryBuilderProps.search"
                :columns="queryBuilderProps.columns"
                :on-update="setQueryBuilder"
                :meta="users"
            >
                <template #head>
                    <tr>
                        <th @click.prevent="sortBy('name')">Name</th>
                        <th v-show="showColumn('email')" @click.prevent="sortBy('email')">Email</th>
                        <th v-show="showColumn('payment_received')" @click.prevent="sortBy('payment_received')">
                            Payment received
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
