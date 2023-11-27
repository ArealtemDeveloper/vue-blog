<template>
  <v-app style="background-color: var(--background-color-primary)">
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useThemeStore } from './store/theme';

  const themeStore = useThemeStore()
  const {takeThemeFromStorage} = themeStore
  onMounted( () => {
      takeThemeFromStorage()
  })

</script>

<style >

</style>
