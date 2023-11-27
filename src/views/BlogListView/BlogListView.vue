<template>
    <Layout>
    <BreadCrumb/>
    <div v-if="isLoading">
        <PageLoader/>
    </div>
        <div class="container">
         <PostsList :data="posts" :isBlogList="isBlogList"/>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout/PageLayout.vue'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
import PostsList from '@/components/PostsList/PostsList.vue';
import PageLoader from '@/components/PageLoader/PageLoader.vue';
import { usePostsStore } from '@/store/posts';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { ref } from 'vue';


const isBlogList = ref(true)
const postsStore = usePostsStore()
const { getAllPosts } = postsStore
const { isLoading, posts } = storeToRefs(postsStore)

onMounted(() => {
    getAllPosts()
})

</script>

<style scoped lang="scss" src="./BlogListView.style.scss"></style>