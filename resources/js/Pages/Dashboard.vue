<template>
    <Head title="Your journey"/>

    <BreezeAuthenticatedLayout>
        <div class="py-12">
            <div class="text-x bg-gray-900 opacity-90 max-w-prose rounded text-xl max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 pt-12 text-white">
                        <H2>
                            The Nolands journey of {{ $page.props.auth.user.name }}
                        </H2>

                        <div class="flex flex-col items-center gap-4 justify-center mb-4">
                            <div
                                class="flex justify-center image avatar h-32 w-32 rounded-full overflow-hidden border border-gray-500">
                                <img alt="avatar" class="object-cover" :src="$page.props.auth.user.avatar ">
                            </div>
                        </div>

                        <div
                            :class="{
                                'border-green-900': $page.props.auth.user.joins_in_2023,
                                'border-yellow-900 bg-yellow-900/75': !$page.props.auth.user.joins_in_2023
                            }"
                            class="flex items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"
                        >
                            <div v-if="$page.props.auth.user.joins_in_2023">
                                YOU ARE ATTENDING NOLANDS 2023
                            </div>

                            <div v-else>
                                PLEASE CONFIRM YOUR ATTENDANCE IN 2023
                            </div>

                            <Link
                                class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
                                :href="route('story.edit')">
                                Update my information <i class="fas fa-memo-circle-info ml-3"></i>
                            </Link>
                        </div>

                        <div
                            :class="{
                                'border-green-900': $page.props.auth.user.payment_received,
                                'border-red-900': !$page.props.auth.user.payment_received
                            }"
                            class="flex items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"
                        >
                            <div v-if="$page.props.auth.user.payment_received">
                                Payment received and processed
                            </div>

                            <div v-else>
                                Payment not yet received or processed
                            </div>

                            <Link
                                class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                                Payment unavailable <i class="fas fa-sack-dollar ml-3"></i>
                            </Link>
                        </div>

                        <Story :user="$page.props.auth.user"/>
                    </div>
                </div>

            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue'
import {Head, Link} from '@inertiajs/inertia-vue3';
import {Inertia} from "@inertiajs/inertia";
import Story from "@/Components/Story.vue";
import H2 from "@/Components/H2.vue";
</script>
