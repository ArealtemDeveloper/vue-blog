<template>
    <v-sheet class='mx-4 rounded'>
        <v-btn @click="toggleTheme" elevation="5"><v-icon size="25" icon="mdi-theme-light-dark"></v-icon></v-btn>
    </v-sheet>
</template>

<script setup lang="ts">
    //Theme Switcher
    import { useTheme } from 'vuetify/lib/framework.mjs';
    const theme = useTheme()
    const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>

<style scoped>

</style>