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
      <div>
        
      </div>
      <img class='logout' v-if="user"
      src="../../assets/images/exit.svg"
      @click="logout"
      />
      <LoginBtn v-else
      :name="'Login'"
      :url="'/login'"
      />
      <span class="username" v-if="user">
      {{ JSON.parse(user).username }}
      <img src="../../assets/images/settings.svg" alt="img">
      </span>
      <ThemeSwitcher/>
  </v-app-bar>
  <v-card  v-show="navOpen" class="mt-2 ml-2 popUp" width="300" elevation="5">
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
          <RouterLink style="text-decoration: none; color: inherit;" to="/about"><v-list-item prepend-icon="mdi-information" title="About" value="about"></v-list-item></RouterLink>
          <RouterLink style="text-decoration: none; color: inherit;" to="/blog"><v-list-item prepend-icon="mdi-view-list" title="Blog" value="blog"></v-list-item></RouterLink>
          <RouterLink style="text-decoration: none; color: inherit;" to="/about"><v-list-item prepend-icon="mdi-post" title="Create Post" value="Create Post"></v-list-item></RouterLink>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 180px" ></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
  import LoginBtn from '@/components/LoginBtn/LoginBtn.vue'
  import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue'
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth';
  const user = ref(localStorage.getItem('user'))

  const navOpen = ref<boolean>(false)
  const authStore = useAuthStore()
  const { logout } = authStore
</script>

<style scoped lang="scss" src="./PageHeader.style.scss"></style>
