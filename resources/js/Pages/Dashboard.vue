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
                            <img alt="avatar"
                                 class="flex justify-center image avatar h-32 w-32 rounded-full overflow-hidden border border-gray-500"
                                 :src="$page.props.auth.user.avatar ">
                        </div>

                        <div>
                            <H2>Step 1. RSVP & info.</H2>
                            <div
                                :class="{
                                'border-green-900 bg-green-900/75': $page.props.auth.user.joins_in_2023,
                                'border-red-900 bg-red-900/75': !$page.props.auth.user.joins_in_2023
                            }"
                                class="flex mb-8 items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"
                            >
                                <div v-if="$page.props.auth.user.joins_in_2023 === true">
                                    YOU ARE ATTENDING NOLANDS 2023
                                </div>

                                <div v-if="$page.props.auth.user.joins_in_2023 === false">
                                    YOU ARE NOT ATTENDING NOLANDS 2023
                                </div>

                                <div v-if="$page.props.auth.user.joins_in_2023 === null">
                                    PLEASE CONFIRM YOUR ATTENDANCE IN 2023
                                </div>

                                <Link
                                    class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
                                    :href="route('story.edit')">
                                    Update my information <i class="fas fa-memo-circle-info ml-3"></i>
                                </Link>
                            </div>

                            <div v-if="$page.props.auth.user.joins_in_2023">
                                <H2>Step 2. Team preferences.</H2>
                                <div
                                    :class="{
                                'border-green-900 bg-green-900/75': $page.props.auth.user.team_choice_first,
                                'border-red-900 bg-red-900/75': !$page.props.auth.user.team_choice_first
                            }"
                                    class="flex mb-8 items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"
                                >
                                    <div v-if="$page.props.auth.user.team_choice_first">
                                        YOU PROVIDED TEAM PREFERENCES
                                    </div>

                                    <div v-if="$page.props.auth.user.team_choice_first === null">
                                        PLEASE PROVIDE TEAM PREFERENCES
                                    </div>

                                    <Link
                                        class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
                                        :href="route('teams.index')">
                                        Update team preferences <i class="fas fa-memo-circle-info ml-3"></i>
                                    </Link>
                                </div>

                                <H2>Step 3. Pay.</H2>
                                <div
                                    :class="{
                                'border-green-900 bg-green-900/75': $page.props.auth.user.payment_received,
                                'border-red-900 bg-red-900/75': !$page.props.auth.user.payment_received
                            }"
                                    class="flex items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"
                                >
                                    <div v-if="$page.props.auth.user.payment_received">
                                        Payment received and processed
                                    </div>

                                    <div v-else>
                                        Payment not yet received or processed
                                    </div>

                                    <a
                                        v-if="!$page.props.auth.user.payment_received"
                                        :href="$page.props.services.payment_link"
                                        target="_blank"
                                        class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                                        Pay €130<i class="fas fa-sack-dollar ml-3"></i>
                                    </a>
                                </div>

                                <Story :user="$page.props.auth.user"/>
                            </div>
                        </div>
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
