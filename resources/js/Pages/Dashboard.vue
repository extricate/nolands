<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold font-serif text-xl text-gray-100">
                Dashboard
            </h2>
        </template>

        <div class="py-12">

            <div v-if="$page.props.auth.user.payment_received">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-green-600 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="font-bold font-serif p-6 bg-green-600">
                           PAYMENT RECEIVED & PROCESSED
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-red-600 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="font-bold font-serif p-6 bg-red-600">
                            PAYMENT NOT YET RECEIVED
                            or not yet processed
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </BreezeAuthenticatedLayout>
</template>

<script>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue'
import { Head } from '@inertiajs/inertia-vue3';

export default {
    components: {
        BreezeAuthenticatedLayout,
        Head,
    },
}
</script>
