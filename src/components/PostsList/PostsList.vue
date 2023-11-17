<template>
    <div class="container">
        <div v-for="card in BlogList">
            <PostCard 
            :key="card.id" 
            :title="card.title" 
            :text="card.text" 
            :img="card.img"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { BlogList } from './data'
    import PostCard from '@/components/Card/PostCard.vue'
</script>

<style scoped lang="scss" src="./PostsList.style.scss"></style>