import { createApp } from 'vue'
import { router } from './router/routes'
// import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Button from 'primevue/button'
import Menubar from 'primevue/menubar'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
})
app.component('Button', Button)
app.component('Menubar', Menubar)

app.use(router)
app.mount('#app')