<template>
    <Menubar :model="menuItems">
      <template #end>
          <div class="flex items-center gap-2">
            <Button
            :icon="darkMode ? 'pi pi-moon' : 'pi pi-sun'"
            aria-label="Toggle Dark Mode"
            severity="secondary"
            :size="size"
            @click="darkMode = !darkMode"
            />
            <ToggleSwitch class="align-self-center" v-model="darkMode" severity="secondary" :size="size"/>
            <SelectButton
            v-model="selectedTheme"
            :options="themeOptions"
            optionLabel="label"
            optionValue="value"
            @change="changeTheme"
            :size="size"
          />
          <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" :size="size"/>
          </div>
      </template>
    </Menubar>
  <div class="flex gap-2 mt-2 justify-center items-center">
      <Button label="Home" icon="pi pi-home" outlined severity="warn" @click="goTo('/')" :size="size" />
      <Button label="Usuários" icon="pi pi-user" outlined severity="danger" :size="size" @click="goTo('/users')" />
  </div>
  <main class="mt-2 w-full max-w-4xl">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()

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
    { label: 'S', value: 'small' },
    { label: 'M', value: 'normal' },
    { label: 'L ', value: 'large' }
])
const selectedTheme = ref(localStorage.getItem('theme') || 'Aura')
const themeOptions = ref([
  { label: 'Aura', value: 'Aura' },
  { label: 'Lara', value: 'Lara' },
  { label: 'Nora', value: 'Nora' },
  { label: 'Material', value: 'Material' },
])
function changeTheme() {
  localStorage.setItem('theme', selectedTheme.value)
  window.location.reload()
}

function goTo(path: string) {
  router.push(path)
}
</script>
