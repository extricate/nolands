<template>
    <Head title="Edit user"/>

    <BreezeValidationErrors class="mb-4"/>

    <template v-if="message">
        <div class="rounded p-3 bg-green-600 mb-3 ">
            {{ message }}
        </div>
    </template>

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

        <div class="block mt-4">
            <label class="flex items-center">
                <BreezeCheckbox name="payment_received" v-model:checked="form.payment_received"/>
                <span class="ml-2 text-sm text-gray-100">Payment received</span>
            </label>
        </div>

        <div class="flex items-center justify-between mt-4">
            <Link class="text-gray-100" :href="route('user.index')">Back</Link>

            <BreezeButton class="ml-4"
                          :class="{ 'opacity-25': form.processing, 'bg-green-600': form.success }"
                          :disabled="form.processing">
                Edit user
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
                payment_received: this.user.payment_received,
            }),
            message: '',
        }
    },

    methods: {
        submit() {
            this.form.patch(this.route('user.update', this.user), {
                onFinish: () => {
                    this.message = 'User edited'
                    this.form.success = true;
                },
            })
        }
    }
}
</script>
