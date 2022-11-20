<template>
    <Head title="Nieuwsberichten"/>

    <Authenticated>
        <div class="py-12 flex justify-center">
            <Post v-for="post in props.posts" :post="post"/>
        </div>
    </Authenticated>
</template>

<script setup>
import Authenticated from "@/Layouts/Authenticated.vue";
import {Head} from "@inertiajs/inertia-vue3";
import Post from "@/Components/Post.vue";

const props = defineProps({
    posts: Object,
})
</script>
