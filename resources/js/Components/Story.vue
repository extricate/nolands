<template>
    <p>
        This is where your Nolands 2023 journey starts. An epic adventure often resulting in the
        birth
        of new
        friendships, passionate romance waiting to happen, and new heights and new highs to be
        discovered.
    </p>

    <p>
        You are <span class="font-serif">{{ user.name }}</span>. You are a living
        legend.
        If we need to reach you, we will do so through <span
        class="font-serif">{{ user.email }}</span>.
        To help us fund this journey, we require payment. You have
        <span class="font-serif">
                            {{
                user.payment_received ? 'fulfilled your financial obligations to us' : 'not yet fulfilled your financial obligations to us'
            }}
                        </span>.
    </p>

    <p>
        You plan to start your journey by joining us at
        <span class="font-serif">{{
                user.arrival_date ?? 'a time which is to be determined later'
            }}</span>.
        <template v-if="user.arrival_date">
            Specifically, you will be joining us at <span
            class="font-serif">{{ user.arrival_hour }}</span>.
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
                user.has_arranged_transportation ? 'have arranged transportation' : 'do not have arranged transportation yet'
            }}</span>.
        <template v-if="user.has_arranged_transportation">And your designated
            driver is
            <span class="font-serif">{{
                    user.chauffeur_name ?? 'still unknown'
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
                user.has_medical_training ? 'we should definitely ask you for help' : 'we would be better off asking somebody else for help'
            }}.
                            </span>
    </p>

    <p>
        You plan to stay with us in your own canvas mansion. Your canvas mansion houses
        <span class="font-serif">{{ user.tent_size ?? 0 }}</span> people.
        You are planning on sharing your canvas mansion with
        <span class="font-serif">{{
                user.other_tent_occupants ?? 'nobody else, for now'
            }}</span>.
    </p>

    <p>
        During this journey, you will be provided with sustenance of various shapes and sorts. You
        have indicated that you have the following dietary preferences:
        <span class="font-serif">{{
                user.dietary_preferences ?? 'no specific dietary preferences'
            }}</span>.
    </p>

    <p>
        Upon arrival you will be provided with three options of initial sustenance. You have
        <span class="font-serif">{{
                user.initial_sustenance ?? 'not yet decided on your choice of initial sustenance'
            }}</span>.
    </p>

    <p>
        Finally, after we've concluded our journey, we will part our ways. You are departing,
        <span class="font-serif">{{
                user.departure_date ? `specifically on ${user.departure_date}` : 'but are yet to decide on a specific moment.'
            }}</span>.
    </p>
</template>

<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true,
    }
})
</script>


<style scoped>
p {
    margin-bottom: 1rem;
}
</style>
