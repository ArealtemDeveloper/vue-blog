<template>
  <Layout>
    <main class="main">
         <h1 class="title">THE BLOG</h1> 
         <PostsList/>
    </main>
  </Layout>
</template>

<script lang="ts" setup>
  import Layout from '@/layouts/Layout/PageLayout.vue';
  import PostsList from '@/components/PostsList/PostsList.vue';
</script>

<style lang="scss" scoped>
  .main {
    max-width: 100vw;
    height: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background-primary);
    flex-direction: column;
    margin-top: 20px;
  }
  .title {
    font-size: 243.8px;
    text-align: center;
    padding: 20px;
    color: var(--color-text-primary);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  @media( max-width: 1200px) {
    .title {
      font-size: 170px;
    }
  }
  @media( max-width: 865px) {
    .title {
      font-size: 100px;
    }
  }
  @media( max-width: 530) {
    .title {
      font-size: 80px;
    }
  }
</style>
