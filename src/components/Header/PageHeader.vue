<template>
<v-app-bar elevation="1" style="background-color: var(--color-background-primary);">
    <v-app-bar-nav-icon @click="navOpen = !navOpen" class="menu"/>
      <v-app-bar-title class="d-none d-lg-block">
        <h3 class="header_title">ArealtemBlog</h3>
      </v-app-bar-title>
      <v-text-field 
      density="compact" 
      class="d-none d-sm-block"
      variant="solo" 
      label="Search post" 
      append-inner-icon="mdi-magnify" 
      single-line 
      hide-details 
      flat/>
      <v-spacer></v-spacer>
      <ThemeSwitcher/>
  </v-app-bar>
  <v-card style="position: absolute;" v-show="navOpen" class="mt-2 ml-2" width="300" elevation="5">
    <v-layout> 
      <v-navigation-drawer
        floating
        permanent
        width="300"
        class="menuList"
      >
        <v-list
          density="compact"
          nav
        >
          <RouterLink style="text-decoration: none; color: inherit;" to="/"><v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item></RouterLink>
          <RouterLink style="text-decoration: none; color: inherit;" to="/about"><v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item></RouterLink>
          <v-list-item prepend-icon="mdi-post" title="Blog" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 150px" ></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
  import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue'
  import { ref } from 'vue';

  const navOpen = ref<boolean>(false)
</script>

<style scoped lang="scss" src="./PageHeader.style.scss"></style>
