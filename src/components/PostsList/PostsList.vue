<template>
    <div class="container">
        <div v-for="card in data" :key="card.id">
            <PostCard 
            :title="card.title" 
            :text="card.desc" 
            :img="card.img"
            :id="card.id"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import PostCard from '@/components/Card/PostCard.vue'
    import axios from 'axios';

    const props = defineProps(["data"])

</script>

<style scoped lang="scss" src="./PostsList.style.scss"></style>