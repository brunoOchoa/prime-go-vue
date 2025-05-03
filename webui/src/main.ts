import { createApp } from 'vue'
import { router } from './router/routes'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import ToggleSwitch from 'primevue/toggleswitch'
import SelectButton from 'primevue/selectbutton'
import Dock from 'primevue/dock'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p-',
            cssLayer: false,
            darkModeSelector: '.my-app-dark',
        }
    }
})
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('ToggleSwitch', ToggleSwitch)
app.component('SelectButton', SelectButton)
app.component('Dock', Dock)

app.use(router)
app.mount('#app')