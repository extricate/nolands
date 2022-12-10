<template>
    <Head title="Nieuwsberichten"/>

    <Authenticated>
        <Container>
            <div class="py-12 flex flex-col gap-4 justify-center items-center">
                <div>
                    <InertiaLink
                        class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
                        v-show="$page.props.auth.role.find((role) => role.name === 'admin')"
                        :href="route('posts.create')">
                        New post
                    </InertiaLink>
                </div>

                <Post v-for="post in props.posts" :post="post"/>
            </div>
        </Container>
    </Authenticated>
</template>

<script setup>
import Authenticated from "@/Layouts/Authenticated.vue";
import {Head} from "@inertiajs/inertia-vue3";
import Post from "@/Components/Post.vue";
import NavLink from "@/Components/NavLink.vue";
import Container from "@/Layouts/Container.vue";

const props = defineProps({
    posts: Object,
})
</script>
