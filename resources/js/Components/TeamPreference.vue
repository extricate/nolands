<template>
    <div class="selected bg-green-900 my-6 rounded">
        <div class="text-white font-bold mt-3 text-2xl uppercase p-6">
            You may indicate three preferences for the team you will be joining.
            <div class="text-base">
                If we do not receive your preference you will be put in the cleanup crew.
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm justify-between bg-green-900 rounded p-6">
            <div
                v-for="team in this.teams.filter(team => [this.form.team_choice_first, this.form.team_choice_second, this.form.team_choice_third].includes(team.id))"
                @click="unselect(team.id)"
                class="bg-gray-900 rounded-xl p-4 hover:bg-gray-800 text-white"
                :class="{
                'bg-green-200 border border-green-500': isSelected(team.id)
            }">
                <div
                    class="flex flex-col"
                    :title="team.description">

                    <div class="flex gap-1 flex-wrap">
                        <div
                            class="flex truncate text-ellipsis rounded-full bg-green-900 items-center px-2 mr-2 text-sm"
                            v-if="this.form.team_choice_first === team.id">
                            First choice
                        </div>
                        <div
                            class="flex truncate text-ellipsis rounded-full bg-green-700 items-center px-2 mr-2 text-sm"
                            v-if="this.form.team_choice_second === team.id">
                            Second choice
                        </div>
                        <div
                            class="flex truncate text-ellipsis rounded-full bg-green-500 items-center px-2 mr-2 text-sm"
                            v-if="this.form.team_choice_third === team.id">
                            Third choice
                        </div>
                        <div class="flex text-xl uppercase font-bold">
                            {{ team.name }}
                        </div>
                    </div>


                    <div class="flex flex-wrap gap-4 my-2 text-sm justify-between">
                        <div class="flex justify-center py-1 px-2 bg-gray-700 rounded">
                            Group category {{ team.category }}
                        </div>
                        <div class="flex justify-center py-1 px-2 bg-gray-700 rounded">
                            Group of {{ team.required_people_amount }} Nolanders
                        </div>
                        <div class="flex justify-center py-1 px-2 bg-gray-700 rounded">
                            Arrive by {{ team.arrive_by || 'zaterdag' }}
                        </div>
                    </div>

                </div>
            </div>
            <div
                v-for="(unselected, index) in unselectedTeams">
                <div class="bg-gray-900 rounded-xl h-36 flex justify-center items-center text-white text-3xl font-bold">
                    {{ unselected }}
                </div>
            </div>
        </div>

        <div class="actions flex gap-4 justify-between p-6">
            <button class="text-white cursor-pointer p-3 rounded bg-gray-800 hover:bg-gray-700" @click="submit">
                <span v-if="this.form.recentlySuccessful">
                    Team preference updated
                </span>

                <span v-else>
                    Save preferences
                </span>
            </button>

            <div class="text-white text-center cursor-pointer p-3 rounded bg-gray-600 hover:bg-red-500" @click="clear">
                Reset preferences
            </div>
        </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="team in teams" class="cursor-pointer bg-gray-900 rounded-xl p-4 hover:bg-gray-800 text-white"
             @click="select(team.id)"
             :class="{
                'bg-green-200 border border-green-500': isSelected(team.id)
            }">
            <div
                :class="{ 'bg-green-200': isSelected(team.id)}"
                class="flex flex-col"
                :title="team.description">

                <div class="flex flex-inline">
                    <div class="flex rounded-full bg-green-900 items-center px-2 mr-2 text-sm"
                         v-if="form.team_choice_first === team.id">
                        First choice
                    </div>
                    <div class="flex rounded-full bg-green-700 items-center px-2 mr-2 text-sm"
                         v-if="form.team_choice_second === team.id">
                        Second choice
                    </div>
                    <div class="flex rounded-full bg-green-500 items-center px-2 mr-2 text-sm"
                         v-if="form.team_choice_third === team.id">
                        Third choice
                    </div>
                    <div class="text-xl uppercase font-bold">
                        {{ team.name }}
                    </div>
                </div>

                <div class="text-sm my-2">
                    {{ team.description }}
                </div>

                <div class="flex flex-wrap gap-4 my-2 text-sm justify-between">
                    <div class="flex justify-center py-1 px-2 bg-gray-700 rounded">
                        Group category {{ team.category }}
                    </div>
                    <div class="flex justify-center py-1 px-2 bg-gray-700 rounded">
                        Group of {{ team.required_people_amount }} Nolanders
                    </div>
                    <div class="flex justify-center py-1 px-2 bg-gray-700 rounded">
                        Arrive by {{ team.arrive_by || 'zaterdag' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        teams: Object,
        user: Object,
        message: {
            type: String,
            default: null
        },
    },

    data() {
        return {
            form: this.$inertia.form({
                team_choice_first: this.user.team_choice_first,
                team_choice_second: this.user.team_choice_second,
                team_choice_third: this.user.team_choice_third,
            }),
            message: ''
        }
    },

    computed: {
        unselectedTeams() {
            let unselected = []

            if (!this.form.team_choice_first) {
                unselected.push(1)
            }

            if (!this.form.team_choice_second) {
                unselected.push(2)
            }

            if (!this.form.team_choice_third) {
                unselected.push(3)
            }

            return unselected
        }
    },

    methods: {
        select(teamId) {
            const choices = [this.user.team_choice_first, this.user.team_choice_second, this.user.team_choice_third]

            if (choices.includes(teamId)) { // you already have this preference selected
                return this.unselect(teamId)
            }

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
                    this.form.success = true;
                }
            })
        },

        unselect(teamId) {
            if (this.form.team_choice_first === teamId) {
                this.form.team_choice_first = null
                this.user.team_choice_first = null
            }

            if (this.form.team_choice_second === teamId) {
                this.form.team_choice_second = null
                this.user.team_choice_second = null
            }

            if (this.form.team_choice_third === teamId) {
                this.form.team_choice_third = null
                this.user.team_choice_third = null
            }

            this.submit()
        },

        clear() {
            this.form.team_choice_first = null
            this.form.team_choice_second = null
            this.form.team_choice_third = null

            this.submit()
        },

        isSelected(teamId) {
            return [this.form.team_choice_first, this.form.team_choice_second, this.form.team_choice_third].includes(id => teamId === id)
        }
    }
}
</script>
