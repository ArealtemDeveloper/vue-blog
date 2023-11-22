<template>
    <div class="container">
        <div v-for="card in BlogList" key="card.id">
            <PostCard 
            :title="card.title" 
            :text="card.text" 
            :img="card.img"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import PostCard from '@/components/Card/PostCard.vue'
    import { BlogList } from './data';
    import axios from 'axios';

</script>

<style scoped lang="scss" src="./PostsList.style.scss"></style>