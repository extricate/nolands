<template>
    <Head title="Bericht aanpassen"/>

    <Authenticated>
        <div class="flex justify-center py-6">
            <div class="flex flex-col max-w-prose w-full gap-4 bg-gray-900 opacity-90 p-4 rounded">

                <div>
                    <Label for="title" value="Title"/>
                    <Input id="title" type="text" class="mt-1 block w-full" v-model="form.title" required autofocus
                           autocomplete="title"/>
                </div>

                <div>
                    <Label for="body" value="Body"/>
                    <MdEditor :preview="false" theme="dark" language="en-US" id="body" class="mt-1 block w-full h-64 rounded bg-gray-400 border border-white"
                              v-model="form.body"/>
                </div>

                <Button @click="submit">
                    Bewerken
                </Button>
            </div>
        </div>
    </Authenticated>
</template>

<script setup>
import Authenticated from "@/Layouts/Authenticated.vue";
import {useForm, Head} from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import Label from "@/Components/Label.vue";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const props = defineProps({
    post: Object,
    errors: Object,
})

const form = useForm({
    title: props.post.title,
    body: props.post.body,
})

function submit() {
    form.submit('patch', route('posts.update', props.post))
}
</script>
