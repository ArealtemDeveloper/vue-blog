<template>
  <v-app style="background-color: var(--background-color-primary)">
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { provide, onMounted, ref} from 'vue';

let theme = ref<string>('light')
provide('theme', theme)
    onMounted( () => {
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme) {
            theme.value = savedTheme
            document.body.setAttribute('data-theme', savedTheme)
        }else {
          localStorage.setItem('theme', 'light')
          document.body.setAttribute('data-theme', 'light')
        }
    })

</script>

<style >

</style>
