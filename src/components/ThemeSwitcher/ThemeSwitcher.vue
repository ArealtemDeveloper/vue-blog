<template>
    <v-sheet class='mx-4 rounded container'>
        <!-- <v-btn @click="toggleTheme" elevation="5"><v-icon size="25" icon="mdi-theme-light-dark"></v-icon></v-btn> -->
        <div class="toggle" @click="toggleTheme">
            <img src="../../assets/images/sun.svg" alt="sun">
            <img src="../../assets/images/moon.svg" alt="moon">
            <div class="ball" :class="theme"></div>
        </div>
    </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    //Theme Switcher Vuetify
    // import { useTheme } from 'vuetify/lib/framework.mjs';
    // const theme = useTheme()
    // const toggleTheme = () => {
    // theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    //   }

let theme = ref('light')
const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
}
</script>

<style scoped>

    .container {
        background-color: var(--color-background-primary);
    }
    .toggle {
        display: flex;
        padding: 8px 16px;
        gap: 16px;
        border-radius: 29px;
        background: #6941C6;
        position: relative;
        cursor: pointer;
    }

    .ball {
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: var(--color-background-secondary);
        border-radius: 50%;
    }
    .light {
        left: 16px;
    }
    .dark {
        right: 16px;
    }
</style>