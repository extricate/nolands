<template>
    <Authenticated>
        <Container>
            <TeamPreference :teams="teams" :user="$page.props.auth.user"/>
        </Container>
    </Authenticated>
</template>

<script setup>
import Authenticated from "@/Layouts/Authenticated.vue";
import TeamPreference from "@/Components/TeamPreference.vue";
import Container from "@/Layouts/Container.vue";

const props = defineProps({
    teams: Object,
})
</script>
