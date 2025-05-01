<template>
  <div class="flex flex-col items-center w-full">
    <Menubar class="w-full max-w-4xl" :model="menuItems" />
  </div>
  <div class="flex gap-3 mt-3 justify-center w-full max-w-4xl">
      <Button label="Home" icon="pi pi-home" rounded @click="goTo('/')" />
      <Button label="Usuários" icon="pi pi-user" outlined severity="danger" @click="goTo('/users')" />
      <Button label="Toggle Dark Mode" raised severity="success" @click="toggleDarkMode()" />
      <ToggleSwitch v-model="darkMode" />
  </div>
  <main class="mt-5 w-full max-w-4xl">
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

function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark');
}

const darkMode = ref(false)
watch(darkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('my-app-dark')
  } else {
    document.documentElement.classList.remove('my-app-dark')
  }
})


function goTo(path: string) {
  router.push(path)
}
</script>
