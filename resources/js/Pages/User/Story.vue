<template>
    <Head title="Tell us your story"/>

    <BreezeValidationErrors class="mb-4"/>

    <template v-if="message">
        <div class="rounded p-3 bg-green-600 mb-3 ">
            {{ message }}
        </div>
    </template>

    <form @submit.prevent="submit">
        <div>
            <BreezeLabel for="name" value="You name"/>
            <BreezeInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus
                         autocomplete="name"/>
        </div>

        <div class="mt-4">
            <BreezeLabel for="email" value="Your email"/>
            <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                         autocomplete="username"/>
        </div>

        <div class="mt-4">
            <BreezeLabel for="arrives_on" value="You will arrive on"/>
            <BreezeInput id="arrives_on" type="date" class="mt-1 block w-full" v-model="form.arrives_on"
                         autocomplete="arrives_on"/>
        </div>

        <div class="block mt-4">
            <label class="flex items-center">
                <BreezeCheckbox name="has_arranged_transportation" v-model:checked="form.has_arranged_transportation"/>
                <span class="ml-2 text-sm text-gray-100">Have you already arranged transportation?</span>
            </label>
        </div>

        <div class="mt-4" v-if="form.has_arranged_transportation">
            <BreezeLabel for="chauffeur_name" value="Cool! What is the name of your chauffeur?"/>
            <BreezeInput id="chauffeur_name" type="text" class="mt-1 block w-full" v-model="form.chauffeur_name"
                         autocomplete="chauffeur_name"/>
        </div>

        <div class="block mt-4">
            <label class="flex items-center">
                <BreezeCheckbox name="has_medical_training" v-model:checked="form.has_medical_training"/>
                <span class="ml-2 text-sm text-gray-100">Do you have any medical training (i.e. EHBO, BHV)</span>
            </label>
        </div>

        <div class="mt-4">
            <BreezeLabel for="tent_size"
                         value="The size of your tent (number of people, to determine space on the grounds)"/>
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
            <BreezeLabel for="dietary_preferences" value="Do you have any dietary preferences (i.e. no meat, no milk)"/>
            <BreezeInput id="dietary_preferences" type="text" class="mt-1 block w-full"
                         v-model="form.dietary_preferences"
                         autocomplete="dietary_preferences"/>
        </div>

        <div class="block mt-4">
            <label class="flex items-center">
                <BreezeCheckbox name="has_blankets" v-model:checked="form.has_blankets"/>
                <span class="ml-2 text-sm text-gray-100">Do you have any old white blankets that we can have?</span>
            </label>
        </div>

        <div class="mt-4">
            <BreezeLabel for="initial_sustenance" value="What welcome package would you like?"/>
            <select
                name="initial_sustenance"
                id="initial_sustenance"
                class="w-full bg-gray-400 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                v-model="form.initial_sustenance">
                <option class="w-100" value="">
                    I do not know what I like
                </option>
                <option value="beer">
                    Beer
                </option>
                <option value="wine">
                    Two bottles of wine
                </option>
                <option value="soda">
                    Soda
                </option>
            </select>
        </div>

        <div class="mt-4">
            <BreezeLabel for="departure_date" value="You will arrive on"/>
            <BreezeInput id="departure_date" type="date" class="mt-1 block w-full" v-model="form.departure_date"
                         autocomplete="departure_date"/>
        </div>

        <div class="flex items-center justify-between mt-4">
            <Link class="text-gray-100" :href="route('dashboard')">
                <i class="fas fa-arrow-left mr-3"></i> Back
            </Link>

            <BreezeButton class="ml-4"
                          :class="{ 'opacity-25': form.processing, 'bg-green-600': form.success }"
                          :disabled="form.processing">
                {{ form.processing ? 'Processing... ' : 'Update my story' }} <i :class="{'fas fa-spin fa-spinner ml-3': form.processing, 'fas fa-check ml-3': form.success}"></i>
            </BreezeButton>
        </div>
    </form>
</template>

<script>
import BreezeButton from '@/Components/Button.vue'
import BreezeGuestLayout from '@/Layouts/Guest.vue'
import BreezeCheckbox from '@/Components/Checkbox'
import BreezeInput from '@/Components/Input.vue'
import BreezeLabel from '@/Components/Label.vue'
import BreezeValidationErrors from '@/Components/ValidationErrors.vue'
import {Head, Link} from '@inertiajs/inertia-vue3';

export default {
    layout: BreezeGuestLayout,

    components: {
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
    },

    data() {
        return {
            form: this.$inertia.form({
                name: this.user.name,
                email: this.user.email,
                arrives_on: this.user.arrives_on,
                has_arranged_transportation: this.user.has_arranged_transportation,
                chauffeur_name: this.user.chauffeur_name,
                has_medical_training: this.user.has_medical_training,
                tent_size: this.user.tent_size,
                other_tent_occupants: this.user.other_tent_occupants,
                dietary_preferences: this.user.dietary_preferences,
                has_blankets: this.user.has_blankets,
                initial_sustenance: this.user.initial_sustenance,
                departure_date: this.user.departure_date,
            }),
            message: '',
        }
    },

    methods: {
        submit() {
            this.form.patch(this.route('story.update', this.user), {
                onFinish: () => {
                    this.message = 'Your story has been adjusted'
                    this.form.success = true;
                },
            })
        }
    }
}
</script>
