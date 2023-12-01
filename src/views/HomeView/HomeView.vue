<template>
  <Layout>
    <div v-if="isLoading">
        <PageLoader/>
    </div>
    <main class="main" v-else>
         <h1 class="title">THE BLOG</h1> 
         <LatestPosts :data="latestPosts"/>
         <PostsList :data="postsPreview" :isBlogList="isBlogList"/>
         <RouterLink to="/blog" class="btn">See more Posts</RouterLink>
         <div class="msg" v-if="msg">
            {{ msg }}
         </div>
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
  const { isLoading, latestPosts, postsPreview, msg} = storeToRefs(postsStore)
  
  onMounted(() => {
    if(msg) {
      setTimeout(() => {
          msg.value = ''
      }, 1500);
    }
    getAllPosts()
  })
</script>

<style lang="scss" scoped src="./HomeView.style.scss"></style>
