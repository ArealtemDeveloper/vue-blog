<template>
    <Layout>
    <BreadCrumb/>
    <div v-if="isLoading">
        <PageLoader/>
    </div>
        <div class="container">
            <div class="content">
                <SearchField/>
                <CategoriesList :data="posts"/>
                <PostsList :data="postsPagination" :isBlogList="isBlogList"/>
                <PagePagination :data="posts"/>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout/PageLayout.vue'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
import PostsList from '@/components/PostsList/PostsList.vue';
import PageLoader from '@/components/PageLoader/PageLoader.vue';
import CategoriesList from '@/components/CategoriesList/CategoriesList.vue';
import SearchField from '@/components/SearchField/SearchField.vue';
import PagePagination from '@/components/Pagination/PagePagination.vue';
import { usePostsStore } from '@/store/posts';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { ref } from 'vue';

const isBlogList = ref(true)
const postsStore = usePostsStore()
const { getPostsByPage, getAllPosts } = postsStore
const { isLoading, posts, postsPagination} = storeToRefs(postsStore)

onMounted(async() => {
        await getAllPosts();
        getPostsByPage(3,0)
})

</script>

<style scoped lang="scss" src="./BlogListView.style.scss"></style>