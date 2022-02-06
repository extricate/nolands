<template>
    <div class="text-white mb-2 mt-3">
        You may indicate three preferences for the team you will be joining. If we do not receive your preference you
        will be put in the cleanup crew.
    </div>
    <div v-for="team in teams" class="cursor-pointer">
        <div class="bg-gray-100 mb-2 rounded p-2" @click="select(team.id)">
            <div class="uppercase font-bold flex flex-inline justify-center items-center">
                <div class="rounded-full bg-green-200 items-center px-2 mr-2 text-sm"
                     v-if="form.team_choice_first === team.id">
                    first
                </div>
                <div class="rounded-full bg-green-200 items-center px-2 mr-2 text-sm"
                     v-if="form.team_choice_second === team.id">
                    second
                </div>
                <div class="rounded-full bg-green-200 items-center px-2 mr-2 text-sm"
                     v-if="form.team_choice_third === team.id">
                    third
                </div>
                {{ team.name }}
            </div>

            <div class="flex justify-center">{{ team.category }}</div>
        </div>
    </div>

    <div class="text-white cursor-pointer" @click="clear">Reset preferences</div>
</template>

<script>
export default {
    props: {
        teams: Object,
        user: Object,
    },

    data() {
        return {
            form: this.$inertia.form({
                team_choice_first: this.user.team_choice_first,
                team_choice_second: this.user.team_choice_second,
                team_choice_third: this.user.team_choice_third,
            })
        }
    },

    methods: {
        select(teamId) {
            if (!this.user.team_choice_first) {
                this.form.team_choice_first = teamId
                this.submit();
            }

            if (this.user.team_choice_first && !this.user.team_choice_second) {
                this.form.team_choice_second = teamId
                this.submit();
            }

            if (this.user.team_choice_second && !this.user.team_choice_third) {
                this.form.team_choice_third = teamId
                this.submit();
            }
        },

        submit() {
            this.form.patch(this.route('story.update', this.user), {
                preserveScroll: true,
                onFinish: () => {
                    this.message = 'Team preference updated'
                    this.form.success = true;
                }
            })
        },

        clear() {
            this.form.team_choice_first = null
            this.form.team_choice_second = null
            this.form.team_choice_third = null

            this.submit()
        }
    }
}
</script>
