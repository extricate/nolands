<template>
    <div class="top-0 main-background w-full bg-gray-700">
        <div class="grid grid-cols-1 min-h-screen">
            <div class="flex flex-col items-center justify-center mx-auto my-auto">
                <ApplicationLogo class="block w-fit"/>

                <div class="bg-gray-900/90 p-6">
                    <h1 class="xl:text-8xl text-5xl text-gray-100 font-serif tracking-widest">
                        Nolands 2023
                    </h1>

                    <Transition name="fade" appear>
                        <div
                            class="flex pb-4 self-center justify-center gap-4 justify-between flex-wrap truncate text-ellipsis">
                            <div class="flex flex-col relative">
                                <VueCountdown
                                    class="flex flex-shrink-1 flex-wrap gap-2 text-white text-2xl font-bold "
                                    :time="countdownDate"
                                    v-slot="{ years, months, days, hours, minutes, seconds }">
                                    <span v-if="months">{{ $tc('time.months', months, {months: months}) }},</span>
                                    <span v-if="days">{{ $tc('time.days', days, {days: days}) }},</span>
                                    <span>{{ $tc('time.hours', hours, {hours: hours}) }},</span>
                                    <span>{{ $tc('time.minutes', minutes, {minutes: minutes}) }},</span>
                                    <span>{{ $tc('time.seconds', seconds, {seconds: seconds}) }}</span>
                                </VueCountdown>
                            </div>
                        </div>
                    </Transition>

                    <div class="flex gap-3 flex-wrap py-3 text-gray-200">
                        <Link v-if="!$page.props.auth.user" :href="route('register')"
                              class="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 focus:bg-gray-800 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                            Become a Nolander <i class="pl-3 fas fa-party-horn"/>
                        </Link>

                        <Link v-if="$page.props.auth.user" href="/dashboard"
                              class="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 focus:bg-gray-800 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                            Dashboard <i class="fas fa-face-party ml-3"/>
                        </Link>

                        <template v-else>
                            <Link :href="route('login')"
                                  class="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 focus:bg-gray-800 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                                Log in <i class="fas fa-right-to-bracket ml-3"/>
                            </Link>
                        </template>
                    </div>
                </div>

            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup>
import {Link} from '@inertiajs/inertia-vue3';
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import VueCountdown from "@/Components/Countdown.ts";

const countdownDate = Date.parse('26 May 2023 18:00:00 UTC') - Date.now()
</script>
