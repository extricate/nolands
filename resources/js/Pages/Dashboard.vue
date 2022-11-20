<template>
    <Head title="Your journey"/>

    <BreezeAuthenticatedLayout>
        <div class="py-12">
            <div class="text-x bg-gray-900 opacity-90 max-w-prose rounded text-xl max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 pt-12 text-white">
                        <h2 class="font-serif text-2xl text-gray-100 pb-6">
                            The Nolands journey of {{ $page.props.auth.user.name }}
                        </h2>

                        <p>
                            This is where your Nolands 2023 journey starts. An epic adventure often resulting in the
                            birth
                            of new
                            friendships, passionate romance waiting to happen, and new heights and new highs to be
                            discovered.
                        </p>

                        <p>
                            You are <span class="font-serif">{{ $page.props.auth.user.name }}</span>. You are a living
                            legend.
                            If we need to reach you, we will do so through <span
                            class="font-serif">{{ $page.props.auth.user.email }}</span>.
                            To help us fund this journey, we require payment. You have
                            <span class="font-serif">
                            {{
                                    $page.props.auth.user.payment_received ? 'fulfilled your financial obligations to us' : 'not yet fulfilled your financial obligations to us'
                                }}
                        </span>.
                        </p>

                        <p>
                            You plan to start your journey by joining us at
                            <span class="font-serif">{{
                                    $page.props.auth.user.arrival_date ?? 'a time which is to be determined later'
                                }}</span>.
                            <template v-if="$page.props.auth.user.arrival_date">
                                Specifically, you will be joining us at <span
                                class="font-serif">{{ $page.props.auth.user.arrival_hour }}</span>.
                                And we're absolutely delighted you are.
                            </template>
                            <template v-else>
                                After all, you like to keep life exciting. Only boring people plan stories.
                                However, even if that is the case, it would be great if you could specify that time as
                                soon as you have decided.
                            </template>
                        </p>

                        <p>
                            You indicated that you
                            <span class="font-serif">{{
                                    $page.props.auth.user.has_arranged_transportation ? 'have arranged transportation' : 'do not have arranged transportation yet'
                                }}</span>.
                            <template v-if="$page.props.auth.user.has_arranged_transportation">And your designated
                                driver is
                                <span class="font-serif">{{
                                        $page.props.auth.user.chauffeur_name ?? 'still unknown'
                                    }}</span>
                            </template>
                            <template v-else>Maybe you should start arranging some transportation? We're sure there's
                                plenty people that want to help you get there.
                            </template>
                        </p>

                        <p>
                            Should there be some sort of medical issues during the journey,
                            <span class="font-serif">
                            {{
                                    $page.props.auth.user.has_medical_training ? 'we should definitely ask you for help' : 'we would be better off asking somebody else for help'
                                }}.
                            </span>
                        </p>

                        <p>
                            You plan to stay with us in your own canvas mansion. Your canvas mansion houses
                            <span class="font-serif">{{ $page.props.auth.user.tent_size ?? 0 }}</span> people.
                            You are planning on sharing your canvas mansion with
                            <span class="font-serif">{{
                                    $page.props.auth.user.other_tent_occupants ?? 'nobody else, for now'
                                }}</span>.
                        </p>

                        <p>
                            During this journey, you will be provided with sustenance of various shapes and sorts. You
                            have indicated that you have the following dietary preferences:
                            <span class="font-serif">{{
                                    $page.props.auth.user.dietary_preferences ?? 'no specific dietary preferences'
                                }}</span>.
                        </p>

                        <p>
                            A journey such as ours to-be can never have too many old white bed covers.
                            <span class="font-serif">{{
                                    $page.props.auth.user.has_blankets ? 'You will be bringing some bedcovers with you' : 'Unfortunately you have none to spare at this time'
                                }}</span>.
                            {{
                                $page.props.auth.user.has_blankets ?? 'We will just have to make due with what we got'
                            }}.
                        </p>

                        <p>
                            Upon arrival you will be provided with three options of initial sustenance. You have
                            <span class="font-serif">{{
                                    $page.props.auth.user.initial_sustenance ?? 'not yet decided on your choice of initial sustenance'
                                }}</span>.
                        </p>

                        <p>
                            Finally, after we've concluded our journey, we will part our ways. You are departing,
                            <span class="font-serif">{{
                                    $page.props.auth.user.departure_date ? `specifically on ${$page.props.auth.user.departure_date}` : 'but are yet to decide on a specific moment.'
                                }}</span>.
                        </p>
                    </div>

                    <div class="p-6">
                        <Link
                            class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
                            :href="route('story.edit')">
                            Tell my journey differently
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue'
import {Head, Link} from '@inertiajs/inertia-vue3';

export default {
    components: {
        BreezeAuthenticatedLayout,
        Head,
        Link,
    },
}
</script>

<style scoped>
p {
    margin-bottom: 1rem;
}
</style>
