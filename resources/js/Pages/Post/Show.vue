<template>
    <Head :title="props.post.title"/>

    <Authenticated>
        <div class="py-12 flex justify-center">
            <Post :post="props.post"/>
        </div>
    </Authenticated>
</template>

<script setup>
import Authenticated from "@/Layouts/Authenticated.vue";
import {Head} from "@inertiajs/inertia-vue3";
import Post from "@/Components/Post.vue";

const props = defineProps({
    post: Object,
})
</script>
