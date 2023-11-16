<template>
  <Layout>
    <v-main class="main">
         <h1 class="title">THE BLOG</h1> 
    </v-main>
  </Layout>
</template>

<script lang="ts" setup>
  import Layout from '@/layouts/LayoutPage.vue';
</script>

<style scoped>
  .main {
    max-width: 100vw;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 243.8px;
    background-color: var(--color-background-primary);
  }
  .title {
    font-size: 243.8px;
    padding: 20px;
    color: var(--color-text-primary);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }
</style>
