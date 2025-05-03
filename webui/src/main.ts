import { createApp } from 'vue'
import { router } from './router/routes'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'
import Material from '@primevue/themes/material'
import Nora from '@primevue/themes/nora'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const themeName = localStorage.getItem('theme') || 'Aura'
const preset =
    themeName === 'Lara'
        ? Lara
        : themeName === 'Material'
        ? Material
        : themeName === 'Nora'
        ? Nora
        : Aura

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset,
        options: {
            prefix: 'p-',
            cssLayer: false,
            darkModeSelector: '.my-app-dark',
        }
    }
})
app.use(router)
app.mount('#app')