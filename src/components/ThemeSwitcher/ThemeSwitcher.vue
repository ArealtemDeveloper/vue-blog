<template>
    <v-sheet class='mx-4 rounded' style="background-color: var(--color-background-primary);">
        <div class="toggle" @click="toggleTheme">
            <img src="../../assets/images/sun.svg" alt="sun">
            <img src="../../assets/images/moon.svg" alt="moon">
            <div class="ball" :class="theme"></div>
        </div>
    </v-sheet>
</template>

<script setup lang="ts">
    import { useThemeStore } from '@/store/theme';
    import { storeToRefs } from 'pinia';

    const themeStore = useThemeStore()
    const { theme } = storeToRefs(themeStore);
    const { toggleTheme } = themeStore

</script>

<style scoped lang="scss" src="./ThemeSwitcher.style.scss"></style>