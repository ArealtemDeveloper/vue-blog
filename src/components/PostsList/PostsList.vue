<template>
    <h1 class="title" :class="{list: isBlogList}">Other Blog Posts</h1>
    <div class="container" :class="{list: isBlogList}">
    <button class="back" 
    :class="{active: btnVisible}" 
    @click="backToAllPosts"
    >
        <img src="../../assets/images/back.svg" alt="back">
    </button>
        <div v-for="card in data" :key="card.id">
            <PostCard 
            :title="card.title" 
            :text="card.desc" 
            :img="card.img"
            :id="card.id"
            :date="card.date"
            :category="card.cat"
            :isBlogList="isBlogList"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import PostCard from '@/components/Card/PostCard.vue'
import { usePostsStore } from '@/store/posts';
import { storeToRefs } from 'pinia';
    const props = defineProps(["data", "isBlogList"])

    const postsStore = usePostsStore()
    const { getAllPosts } = postsStore
    const { btnVisible } = storeToRefs(postsStore)

    const backToAllPosts = () => {
        getAllPosts()
    }

</script>

<style scoped lang="scss" src="./PostsList.style.scss"></style>