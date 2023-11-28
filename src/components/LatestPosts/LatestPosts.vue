<template>
    <h1 class="title">Latest Posts</h1>
    <div class="container">
        <div 
        class="card" 
        v-for="card in data" 
        :key="card.id"
        @click="redirectToPost(card.id)"
        >
            <div class="img">
                <img class="img" :src="card.img" alt="">
                <div class="title_block">
                    <h1 class="card_title">{{ card.title }} </h1>
                </div>
            </div>
            <div class="content">
                <p class="card_desc">{{ card.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { router } from '@/router';
    
   const props = defineProps(['data'])
   const redirectToPost = (id:number) => {
        router.push(`/posts/${id}`)
    }
</script>

<style scoped lang="scss" src="./LatestPosts.style.scss"></style>