<template>
    <div class="top-0 main-background w-full bg-gray-700">
        <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div class="flex-row mx-auto my-auto bg-gray-900 opacity-90 p-6">
                <h1 class="py-4 xl:text-8xl text-5xl text-gray-100 font-serif">
                    Nolands 2022
                </h1>

                <div class="py-3 text-2xl text-gray-200 font-serif">
                    Set to be just a little bigger and badder than the previous edition, Nolands 2022 is gonna blow your
                    mind
                </div>

                <div class="py-3 text-2xl text-gray-200">
                    <Link v-if="$page.props.auth.user" href="/dashboard"
                          class="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 focus:bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                        You are a Nolander
                    </Link>

                    <template v-else>
                        <Link :href="route('register')"
                              class="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 focus:bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                            Become a Nolander <i class="pl-3 fas fa-arrow-right"/>
                        </Link>
                    </template>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    },
}
</script>
