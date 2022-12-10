<template>
    <div class="selected my-6 rounded">
        <div class="text-white font-bold mt-3 text-2xl uppercase py-6">
            You may indicate three preferences for the team you will be joining.
            <div class="text-base">
                We will distribute the teams based on these preferences.
                If you do not provide a preference you will be put in the cleanup crew.
            </div>
        </div>
        <div name="fade"
             tag="div"
             class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm justify-between rounded">
            <div
                :key="index"
                v-for="(team, index) in this.teams.filter(team => [this.form.team_choice_first, this.form.team_choice_second, this.form.team_choice_third].includes(team.id))"
                @click="unselect(team.id)"
                class="flex bg-gray-900/90 rounded-xl items-center justify-center p-4 cursor-pointer hover:bg-gray-800 text-white border-2 border-green-800">
                <div class="flex flex-wrap xl:flex-nowrap items-center gap-3"
                     :title="team.description">

                    <div class="flex justify-start items-center text-white text-8xl font-serif mt-2">
                        <div v-if="this.form.team_choice_first === team.id">1</div>
                        <div v-if="this.form.team_choice_second === team.id">2</div>
                        <div v-if="this.form.team_choice_third === team.id">3</div>

                        <div class="flex text-4xl uppercase font-normal font-serif self-center ml-6 -mt-1">
                            {{ team.name }}
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-1 text-sm justify-end items-center overflow-hidden">
                        <Chip>
                            <i
                                :class="{
                            'fa-burger-soda': team.category === 'eets & drinks',
                            'fa-party-horn': team.category.includes('entertainment'),
                            'fa-house': team.category.includes('locatie'),
                            'fa-vacuum': team.category.includes('schoonmaak'),
                            }"
                                class="fas mr-3"/>

                            {{ team.category }}
                        </Chip>
                        <Chip>
                            <i class="fas fa-people mr-3"/> Group of {{ team.required_people_amount }} Nolanders
                        </Chip>
                        <Chip>
                            <i class="fas fa-calendar mr-3"/> Arrive by {{ team.arrive_by || 'zaterdag' }}
                        </Chip>
                    </div>
                </div>
            </div>
            <div
                :key="index"
                v-for="(unselected, index) in unselectedTeams">
                <div
                    class="bg-gray-900 rounded-xl h-36 flex justify-center items-center text-white text-3xl font-bold">
                    {{ unselected }}
                </div>
            </div>
        </div>

        <div class="actions flex gap-4 justify-between py-6">
            <Transition name="fade">
                <Button class="text-white cursor-pointer p-3 rounded bg-gray-800 hover:bg-gray-700" @click="submit">
                <span v-if="this.form.recentlySuccessful">
                    Team preference updated
                    <i class="fas fa-check ml-3"></i>
                </span>

                    <span v-else>
                    Save preferences
                </span>

                    <span v-if="this.form.processing">
                        <i class="fas fa-spinner-third animate-spin ml-3"></i>
                    </span>
                </Button>
            </Transition>


            <div class="text-white text-center cursor-pointer p-3 rounded bg-gray-600 hover:bg-red-500" @click="clear">
                Reset preferences
            </div>
        </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
            v-for="team in teams.filter(team => ![this.form.team_choice_first, this.form.team_choice_second, this.form.team_choice_third].includes(team.id))"
            class="cursor-pointer bg-gray-900 rounded-xl p-4 hover:bg-gray-800 text-white"
            @click="select(team.id)"
            :class="{
                'bg-green-200 border border-green-500': isSelected(team.id)
            }">
            <div
                :class="{ 'bg-green-200': isSelected(team.id)}"
                class="flex flex-col"
                :title="team.description">

                <div class="flex gap-1 flex-wrap">
                    <div class="flex text-xl uppercase font-bold">
                        {{ team.name }}
                    </div>
                </div>

                <div class="text-sm my-2">
                    {{ team.description }}
                </div>

                <div class="flex flex-wrap gap-1 text-sm mt-1">
                    <Chip>
                        <i
                            :class="{
                            'fa-burger-soda': team.category === 'eets & drinks',
                            'fa-party-horn': team.category.includes('entertainment'),
                            'fa-house': team.category.includes('locatie'),
                            'fa-vacuum': team.category.includes('schoonmaak'),
                            }"
                            class="fas mr-3"/>

                        {{ team.category }}
                    </Chip>
                    <Chip>
                        <i class="fas fa-people mr-3"/> Team of {{ team.required_people_amount }} Nolanders
                    </Chip>
                    <Chip>
                        <i class="fas fa-calendar mr-3"/> Arrive by {{ team.arrive_by || 'zaterdag' }}
                    </Chip>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chip from "@/Components/Chip.vue"
import Button from "@/Components/Button.vue";

export default {
    components: {
        Button,
        Chip,
    },
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

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
