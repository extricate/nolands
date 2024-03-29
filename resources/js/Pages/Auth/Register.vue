<template>
    <Head title="Register"/>

    <BreezeValidationErrors class="mb-4"/>

    <div class="font-serif text-center text-2xl text-gray-100 pb-2">
        Become a Nolander
    </div>

    <p class="text-white pb-2">
        You will require manual approval before you can truly become a Nolander
    </p>

    <form @submit.prevent="submit">
        <div>
            <BreezeLabel for="name" value="Name"/>
            <BreezeInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus
                         autocomplete="name"/>
        </div>

        <div class="mt-4">
            <BreezeLabel for="email" value="Email"/>
            <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                         autocomplete="username"/>
        </div>

        <div class="mt-4">
            <BreezeLabel for="reference" value="Through whom have you been introduced to our festival?"/>
            <BreezeInput id="reference" type="text" class="mt-1 block w-full" v-model="form.reference"
                         placeholder="Write down a name of at least one Nolander"
                         autocomplete="reference"/>
        </div>

        <div class="mt-4">
            <BreezeLabel for="password" value="Password"/>
            <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                         autocomplete="new-password"/>
        </div>

        <div class="mt-4">
            <BreezeLabel for="password_confirmation" value="Confirm Password"/>
            <BreezeInput id="password_confirmation" type="password" class="mt-1 block w-full"
                         v-model="form.password_confirmation" required autocomplete="new-password"/>
        </div>

        <div class="flex items-center justify-between mt-4">
            <Link :href="route('login')" class="underline text-sm text-gray-100 hover:text-gray-500">
                Already registered?
            </Link>

            <BreezeButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Join Nolands 2023 <i class="fas fa-party-horn ml-3"></i>
            </BreezeButton>
        </div>
    </form>
</template>

<script>
import BreezeButton from '@/Components/Button.vue'
import BreezeGuestLayout from '@/Layouts/Guest.vue'
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
        BreezeValidationErrors,
        Head,
        Link,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms: false,
                reference: '',
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('register'), {
                onFinish: () => this.form.reset('password', 'password_confirmation'),
            })
        }
    }
}
</script>
