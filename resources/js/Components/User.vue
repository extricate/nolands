<template>
    <div
        class="flex justify-between items-center bg-gray-900 opacity-90 p-4 text-white rounded gap-2 relative">
        <div class="flex gap-3 items-center flex-1">
            <div
                class="flex justify-center image avatar h-12 w-12 rounded-full overflow-hidden border border-gray-500">
                <img alt="avatar" class="object-cover" :src="user.avatar ">
            </div>

            <div class="text-xl">
                {{ user.name }}
            </div>
        </div>

        <div class="flex w-full flex-wrap justify-end gap-2 flex-1">
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

            <div v-if="user.is_admin" class="flex rounded p-1 bg-yellow-600">
                Beheerder
            </div>

            <div :class="{
                'bg-green-500' : user.joins_in_2023,
              'bg-red-500' : user.joins_in_2023 === 0,
              'bg-gray-300' : user.joins_in_2023 === null,
             }" class="flex rounded p-1">
                {{ user.joins_in_2023 === true ? '2023' : '' }}
                {{ user.joins_in_2023 === false ? '2022' : '' }}
                {{ user.joins_in_2023 === null ? '???' : '' }}
            </div>

            <InertiaLink class="flex hover:text-gray-300 bg-gray-500 rounded flex p-1"
                         :href="route('user.edit', props.user)">Edit
            </InertiaLink>
        </div>
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
