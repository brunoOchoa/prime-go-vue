<template>
      <Menubar>
        <template #start >
          <div class="flex gap-3 justify-center items-center">
            <Button label="Home" icon="pi pi-home" severity="warn" @click="goTo('/')" :size="size" />
            <Button label="Usuários" icon="pi pi-user"  severity="danger" :size="size" @click="goTo('/users')" />
        </div>
        </template>
      <template #end>
          <div class="flex items-center gap-2">
            <ColorPicker v-model="primaryColor" @change="updatePrimaryColor" class="align-self-center"/>
            <Button
            :icon="darkMode ? 'pi pi-moon' : 'pi pi-sun'"
            aria-label="Toggle Dark Mode"
            severity="secondary"
            :size="size"
            @click="darkMode = !darkMode"
            outlined
            />
            <ToggleSwitch class="align-self-center" v-model="darkMode"  :size="size"/>
            <SelectButton
            v-model="selectedTheme"
            :options="themeOptions"
            optionLabel="label"
            optionValue="value"
            @change="changeTheme"
            :size="size"
          />
          <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" :size="size"/>
          <Button
          icon="pi pi-cog"
          @click="toggleMenu"
          class="ml-2"
          :size="size"
          text
          severity="secondary"
          aria-haspopup="true"
        />
          <OverlayPanel ref="menuPanel" class="" >
            <div class="flex flex-column gap-2 mt-2">
              <div class="flex align-items-center gap-1 ">
                <span class="text-xs font-bold">Dark Mode:</span>
              </div>
              <div class="flex align-items-center gap-2">
                <Button
                :icon="darkMode ? 'pi pi-moon' : 'pi pi-sun'"
                aria-label="Toggle Dark Mode"
                severity="secondary"
                :size="size"
                @click="darkMode = !darkMode"
                outlined
                />
                <ToggleSwitch v-model="darkMode" severity="secondary" :size="size" aria-label="Dark Mode" />
              </div>
              <div class="flex align-items-center gap-2 mt-2">
                <span class="text-xs font-bold">Theme:</span>
              </div>
              <div class="flex align-items-center gap-2">
                <SelectButton v-model="selectedTheme" :options="themeOptions" optionLabel="label" optionValue="value" @change="changeTheme" :size="size" aria-label="Tema" />
              </div>
              <div class="flex align-items-center gap-2 mt-2">
                <span class="text-xs font-bold">Size:</span>
              </div>
              <div class="flex align-items-center gap-2">
                <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" :size="size" aria-label="Tamanho" />
              </div>
            </div>
          </OverlayPanel>
        </div>
      </template>
    </Menubar>
  <main class="mt-2 w-full max-w-4xl">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()

// const menuItems = [
//   { label: 'Home', icon: 'pi pi-home', command: () => goTo('/') },
//   { label: 'Usuários', icon: 'pi pi-user', command: () => goTo('/users') },
// ]

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

const menuPanel = ref()
function toggleMenu(event: MouseEvent) {
  menuPanel.value.toggle(event)
}

const primaryColor = ref('#42b983')

function updatePrimaryColor() {
  document.documentElement.style.setProperty('--primary-color', primaryColor.value)
}

function goTo(path: string) {
  router.push(path)
}
</script>
