<template>
    <label class="block text-sm tracking-widest text-gray-100 mb-2 font-bold">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>

<script>
export default {
    props: ['value']
}
</script>
