<template>
    <Head title="Tell us about your journey"/>

    <Container class="rounded bg-gray-900/90 max-w-prose p-6 mb-6">
        <div class="p-6">
            <!-- 2023 -->
            <div
                v-if="user.joins_in_2023 === false"
                class="mb-3 rounded text-white w-full font-normal tracking-widest flex justify-center py-6 px-8 bg-red-800 hover:bg-red-600 text-2xl font-serif">
                You are not joining us in 2023.
            </div>

            <div v-if="user.joins_in_2023"
                 class="mb-3 rounded text-white w-full font-normal tracking-widest flex justify-center py-6 px-8 bg-green-800 hover:bg-green-600 text-2xl font-serif">
                Attendance in 2023 confirmed!
            </div>

            <div class="flex gap-2">
                <Button
                    class="rounded w-full font-normal tracking-widest flex justify-center py-6 px-8 bg-green-800 hover:bg-green-600 text-2xl font-serif"
                    @click="confirmAttendance(true)">
                    Confirm attendance for 2023
                </Button>

                <Button
                    class="rounded w-full font-normal tracking-widest flex justify-center py-6 px-8 bg-red-800 hover:bg-red-600 text-2xl font-serif"
                    @click="confirmAttendance(false)">
                    I will not join in 2023
                </Button>
            </div>
        </div>
    </Container>

    <Container class="rounded bg-gray-900/90 max-w-prose p-6 mb-6" v-if="user.joins_in_2023">
        <div class="p-6">
            <H2>Please provide your info below.</H2>

            <BreezeValidationErrors class="mb-4"/>

            <template v-if="message">
                <div class="rounded p-3 bg-green-600 mb-3 ">
                    {{ message }}
                </div>
            </template>

            <form @submit.prevent="submit">
                <div>
                    <BreezeLabel for="name" value="Your name"/>
                    <BreezeInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus
                                 autocomplete="name"/>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="email" value="Your email"/>
                    <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                                 autocomplete="username"/>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="reference" value="Through whom have you been introduced to our festival?"/>
                    <BreezeInput id="reference" type="text" class="mt-1 block w-full" v-model="form.reference"
                                 autocomplete="reference"/>
                </div>

                <div class="flex flex-col justify-around gap-2 items-center border border-gray-700 p-6 rounded my-6">
                    <div class="flex flex-col justify-between gap-2">
                        <div>
                            <div class="flex items-center space-x-6">
                                <div class="shrink-0">
                                    <img
                                        class="object-cover w-24 h-24 rounded-full overflow-hidden border border-gray-500"
                                        :src="$page.props.auth.user.avatar"
                                        alt="profile photo"/>
                                </div>
                                <div class="flex flex-col">
                                    <label class="block">
                                        <span class="sr-only">Choose File</span>
                                        <input type="file"
                                               @input="this.form.avatar = $event.target.files[0]"
                                               class="block w-full text-base text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-gray-400 hover:file:bg-gray-900 hover:file:text-gray-100 file:cursor-pointer"/>
                                        <span class="ml-3 text-xs text-gray-400" id="file_input_help">
                                        SVG | PNG | JPG | GIF | max 500kB.
                                    </span>
                                    </label>

                                    <div
                                        @click="submitAvatar($page.props.auth.user)"
                                        class="cursor-pointer text-center w-full mt-2 font-serif font-normal tracking-widest text-white cursor-pointer p-3 rounded bg-gray-800 hover:bg-gray-500">
                                        <span v-if="form.recentlySuccessful">Picture changed</span>
                                        <span v-else>Save avatar</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="arrives_on"
                                 value="You will arrive on (thursday is only for the construction crew)"/>
                    <BreezeInput id="arrives_on" type="date" min="2023-06-01" max="2023-06-05" class="mt-1 block w-full"
                                 v-model="form.arrives_on"
                                 autocomplete="arrives_on"/>
                </div>

                <div class="block mt-4">
                    <label class="flex items-center">
                        <BreezeCheckbox name="has_arranged_transportation"
                                        v-model:checked="form.has_arranged_transportation"/>
                        <CheckboxLabel>Have you arranged transportation?</CheckboxLabel>
                    </label>
                </div>

                <div class="mt-4" v-if="form.has_arranged_transportation">
                    <BreezeLabel for="chauffeur_name" value="Cool! What is the name of your chauffeur?"/>
                    <BreezeInput id="chauffeur_name" type="text" class="mt-1 block w-full" v-model="form.chauffeur_name"
                                 autocomplete="chauffeur_name"/>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="departure_date" value="You will depart on"/>
                    <BreezeInput id="departure_date" min="2023-06-03" max="2023-06-06" type="date"
                                 class="mt-1 block w-full"
                                 v-model="form.departure_date"
                                 autocomplete="departure_date"/>
                </div>

                <div class="block mt-4">
                    <label class="flex items-center">
                        <BreezeCheckbox name="joins_party_bus" v-model:checked="form.joins_party_bus"/>
                        <CheckboxLabel>
                            I'm interested in travelling by party bus for an additional fee (more information will be
                            provided later)
                        </CheckboxLabel>
                    </label>
                </div>

                <HR/>

                <div class="block mt-4">
                    <label class="flex items-center">
                        <BreezeCheckbox name="has_medical_training" v-model:checked="form.has_medical_training"/>
                        <CheckboxLabel>Do you have any medical training (i.e. EHBO, BHV)</CheckboxLabel>
                    </label>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="tent_size"
                                 value="The size of your tent in # of people (to determine space on the grounds)"/>
                    <BreezeInput id="tent_size" type="number" class="mt-1 block w-full" v-model="form.tent_size"
                                 autocomplete="tent_size"/>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="other_tent_occupants" value="Name(s) of others sharing your tent, if any"/>
                    <BreezeInput id="other_tent_occupants" type="text" class="mt-1 block w-full"
                                 v-model="form.other_tent_occupants"
                                 autocomplete="other_tent_occupants"/>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="dietary_preferences"
                                 value="Do you have any dietary preferences (i.e. no meat, no milk)"/>
                    <BreezeInput id="dietary_preferences" type="text" class="mt-1 block w-full"
                                 v-model="form.dietary_preferences"
                                 autocomplete="dietary_preferences"/>
                </div>

                <div class="mt-4">
                    <BreezeLabel for="initial_sustenance" value="What welcome package would you like?"/>
                    <select
                        name="initial_sustenance"
                        id="initial_sustenance"
                        class="w-full bg-gray-400 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        v-model="form.initial_sustenance">
                        <option class="w-100" value="">
                            Don't care
                        </option>
                        <option value="beer">
                            Beer
                        </option>
                        <option value="wine">
                            Wine
                        </option>
                        <option value="soda">
                            Soda
                        </option>
                    </select>
                </div>
            </form>

            <div class="flex items-center justify-between mt-4">
                <BreezeButton
                    @click="submit"
                    :class="{ 'opacity-25': form.processing, 'bg-green-600': form.success }"
                    :disabled="form.processing">
                    {{ form.processing ? 'Processing... ' : 'Update my journey' }}
                    <i :class="{'fas fa-spin fa-spinner ml-3': form.processing, 'fas fa-check ml-3': form.success}"></i>
                </BreezeButton>

                <Link class="text-gray-100 p-3 rounded hover:bg-gray-800" :href="route('dashboard')">
                    <i class="fas fa-arrow-left mr-3"></i> Back
                </Link>
            </div>
        </div>
    </Container>
</template>

<script>
import BreezeButton from '@/Components/Button.vue'
import BreezeCheckbox from '@/Components/Checkbox.vue'
import BreezeInput from '@/Components/Input.vue'
import BreezeLabel from '@/Components/Label.vue'
import BreezeValidationErrors from '@/Components/ValidationErrors.vue'
import {Head, Link} from '@inertiajs/inertia-vue3'
import {Inertia} from "@inertiajs/inertia";
import HR from "@/Components/HR.vue";
import CheckboxLabel from "@/Components/CheckboxLabel.vue";
import Authenticated from "@/Layouts/Authenticated.vue";
import Container from "@/Layouts/Container.vue";
import Button from "@/Components/Button.vue";
import H2 from "@/Components/H2.vue";

export default {
    layout: Authenticated,

    components: {
        H2,
        Button,
        Container,
        CheckboxLabel,
        HR,
        BreezeButton,
        BreezeInput,
        BreezeLabel,
        BreezeCheckbox,
        BreezeValidationErrors,
        Head,
        Link,
    },

    props: {
        user: Object,
        teams: Object,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: this.user.name,
                email: this.user.email,
                arrives_on: this.user.arrives_on,
                has_arranged_transportation: this.user.has_arranged_transportation,
                chauffeur_name: this.user.chauffeur_name,
                reference: this.user.reference,
                has_medical_training: this.user.has_medical_training,
                tent_size: this.user.tent_size,
                other_tent_occupants: this.user.other_tent_occupants,
                dietary_preferences: this.user.dietary_preferences,
                initial_sustenance: this.user.initial_sustenance,
                departure_date: this.user.departure_date,
                avatar: null,
                joins_party_bus: this.user.joins_party_bus
            }),
            message: '',
        }
    },

    methods: {
        submit() {
            this.form.patch(this.route('story.update', this.user), {
                resetOnSuccess: true,
                onFinish: () => {
                    this.message = 'Your information has been saved'
                    this.form.success = true;
                },
            })
        },

        submitAvatar(user) {
            this.form.post(route('user.avatar', user), {
                forceFormData: true
            })
        },

        confirmAttendance(value) {
            Inertia.patch(route('story.update', this.user), {
                joins_in_2023: value,
            })
        }
    }
}
</script>
