<template>
    <div class="bg-gray-900 opacity-90 p-4 text-white rounded flex flex-col gap-2 relative">
        <div>
            {{ user.name }}
        </div>

        <div class="absolute right-4 top-4 flex gap-1">
            <div :class="{
            'bg-green-500' : user.payment_received,
            'bg-red-500' : !user.payment_received,
        }" class="flex rounded p-1">
                {{ user.payment_received ? 'Paid' : 'Not yet paid' }}
            </div>

            <div :class="{
            'bg-green-500' : user.is_approved,
            'bg-gray-500' : !user.is_approved,
        }" class="flex rounded p-1">
                {{ user.is_approved ? 'Approved' : 'Unapproved' }}
            </div>
        </div>

        <InertiaLink class="hover:text-gray-300" :href="route('user.edit', props.user)">Bewerk</InertiaLink>
    </div>
</template>

<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true,
    }
})
</script>
