import './bootstrap';
import '../css/app.css'

import {createApp, h} from 'vue';
import {createI18n} from 'vue-i18n'
import {createInertiaApp, Link} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
import en from '../lang/en.json'

const i18n = createI18n({
    locale: 'en', fallbackLocale: 'en', messages: en,
});


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .use(i18n)
            .component('InertiaLink', Link)
            .mixin({methods: {route}})
            .mount(el);
    },
});

InertiaProgress.init({color: '#4B5563'});
