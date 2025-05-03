<template>
    <Menubar :model="menuItems">
      <template #end>
          <div class="flex items-center gap-2">
              <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
              <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
          </div>
      </template>
    </Menubar>
  <div class="flex gap-2 mt-2 justify-center items-center">
      <Button label="Home" icon="pi pi-home" outlined severity="warn" @click="goTo('/')" :size="size" />
      <Button label="Usuários" icon="pi pi-user" outlined severity="danger" :size="size" @click="goTo('/users')" />
  </div>
  <div class="flex gap-2 mt-2">
    <Button
    :icon="darkMode ? 'pi pi-moon' : 'pi pi-sun'"
    aria-label="Toggle Dark Mode"
    severity="secondary"
    :size="size"
    @click="darkMode = !darkMode"
    />
    <ToggleSwitch class="align-self-center" v-model="darkMode" severity="secondary" :size="size"/>
  </div>
  <div class="flex justify-center gap-3 mt-3 w-full max-w-4xl">
      <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" :size="size"/>
  </div>
  <div class="flex justify-center gap-3 mt-3 w-full max-w-4xl">
    <SelectButton
        v-model="selectedTheme"
        :options="themeOptions"
        optionLabel="label"
        optionValue="value"
        @change="changeTheme"
        :size="size"
      />
  </div>
  <main class="mt-2 w-full max-w-4xl">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import Aura from '@primeuix/themes/aura'
import Lara from '@primeuix/themes/lara'

const router = useRouter()
const currentTheme = ref(Aura)

const menuItems = [
  { label: 'Home', icon: 'pi pi-home', command: () => goTo('/') },
  { label: 'Usuários', icon: 'pi pi-user', command: () => goTo('/users') },
]

const darkMode = ref(false)
watch(darkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('my-app-dark')
  } else {
    document.documentElement.classList.remove('my-app-dark')
  }
})
const size = ref('small');
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
])
const selectedTheme = ref('Aura')
const themeOptions = ref([
  { label: 'Aura', value: 'Aura' },
  { label: 'Lara', value: 'Lara' },
])
function changeTheme() {
  currentTheme.value = selectedTheme.value === 'Aura' ? Aura : Lara
}

function goTo(path: string) {
  router.push(path)
}
</script>
