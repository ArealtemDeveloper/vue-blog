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
    import { Ref } from 'vue';
    import { inject } from 'vue'


    const theme:any = inject('theme')
    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
        document.body.setAttribute('data-theme', theme.value)
        localStorage.setItem('theme', theme.value)
    }
</script>

<style lang="scss">

    .toggle {
        display: flex;
        padding: 8px 16px;
        gap: 16px;
        border-radius: 29px;
        background: var(--color-purple);
        position: relative;
        cursor: pointer;
        user-select: none;
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