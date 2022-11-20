<template>
    <Head title="Dashboard"/>

    <BreezeAuthenticatedLayout>
        <div class="p-14 grid grid-cols-1 md:grid-cols-3">
            <User v-for="user in users" :user="user"/>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue'
import {Head, Link} from '@inertiajs/inertia-vue3';
import User from "@/Components/User.vue";

const props = defineProps({
    users: Object,
})
</script>
