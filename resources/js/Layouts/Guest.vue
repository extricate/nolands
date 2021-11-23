<template>
    <div>
        <div class="min-h-screen main-background flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-800">
            <div>
                <Link href="/">
                    <BreezeApplicationLogo class="w-32 h-32 fill-current text-gray-500"/>
                </Link>
            </div>

            <div
                class="bg-gray-900 opacity-90 w-full sm:max-w-md mt-6 mb-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue'
import {Link} from '@inertiajs/inertia-vue3';
import Notification from '@/Components/Notification'

export default {
    components: {
        BreezeApplicationLogo,
        Link,
        Notification,
    }
}
</script>
