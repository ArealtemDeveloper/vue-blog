<template>
    <div class="container">
        <div v-for="category in categories" :key="category.id" class="category" @click="onLoadCategories(category.name)">
            {{  category.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { categories } from './data';
import { usePostsStore } from '@/store/posts';

const route = useRoute()
const postsStore = usePostsStore()
const { getAllPostsByCategories } = postsStore
const onLoadCategories = (name:string) => {
    route.query.cat = name;
    getAllPostsByCategories(name);    
}
</script>

<style scoped lang="scss" src="./CategoriesList.style.scss"></style>