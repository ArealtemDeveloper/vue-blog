<template>
  <Layout>
    <div v-if="isLoading">
        <PageLoader/>
    </div>
    <main class="main" v-else>
         <h1 class="title">THE BLOG</h1> 
         <LatestPosts :data="latestPosts"/>
         <PostsList :data="posts" :isBlogList="isBlogList"/>
         <RouterLink to="/blog" class="btn">See more Posts</RouterLink>
    </main>
  </Layout>
</template>

<script lang="ts" setup>
  import Layout from '@/layouts/Layout/PageLayout.vue';
  import PostsList from '@/components/PostsList/PostsList.vue';
  import LatestPosts from '@/components/LatestPosts/LatestPosts.vue';
  import PageLoader from '@/components/PageLoader/PageLoader.vue';
  import { onMounted } from 'vue';
  import { usePostsStore } from '@/store/posts';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';

  const isBlogList = ref(false)
  const postsStore = usePostsStore()
  const { getAllPosts } = postsStore
  const { isLoading, latestPosts, posts} = storeToRefs(postsStore)
  onMounted(( ) => {
    getAllPosts()
  })
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

  .btn {
    margin-top: 30px;
    padding: 10px 15px;
    background-color: var(--color-purple);
    border-radius: 10px;
    margin-bottom: 150px;
    color: #fff;
    text-decoration: none;
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
