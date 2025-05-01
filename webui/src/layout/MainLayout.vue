<template>
  <div class="flex flex-col items-center w-full">
    <Menubar class="w-full max-w-4xl" :model="menuItems" />
  </div>
  <div class="flex gap-3 mt-3 justify-center w-full max-w-4xl">
      <Button label="Home" icon="pi pi-home" rounded @click="goTo('/')" />
      <Button label="Usuários" icon="pi pi-user" @click="goTo('/users')" />

<Button label="Toggle Dark Mode" @click="toggleDarkMode()" />

  </div>
  <main class="mt-5 w-full max-w-4xl">
    <RouterView />
  </main>
</template>

  <script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const menuItems = [
    { label: 'Home', icon: 'pi pi-home', command: () => goTo('/') },
    { label: 'Usuários', icon: 'pi pi-user', command: () => goTo('/users') },
  ]

  function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark');
}

  function goTo(path: string) {
    router.push(path)
  }
  </script>
