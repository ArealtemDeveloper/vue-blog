<template>
    <div class="container">
        <div 
        v-for="category in categories" 
        :key="category.id" class="category" 
        @click="onLoadCategories(category.name)"
        :class="{ active: selectedCategory === category.name}"
        >
            {{  category.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { categories } from './data';
import { usePostsStore } from '@/store/posts';
import { ref } from 'vue'
import { storeToRefs } from 'pinia';

const route = useRoute()
const postsStore = usePostsStore()
const { selectedCategory, page_number, disabledNext, disabledAll } = storeToRefs(postsStore)
const active = ref(false)
const { getAllPostsByCategories, getPostsByPage } = postsStore


const onLoadCategories = (name:string) => {
    if(name === 'All') {
        selectedCategory.value = name;
        route.query.cat = '';
        disabledAll.value = false
        getPostsByPage(3, 0)
        
    }else {
        selectedCategory.value = name;
        route.query.cat = 'name';
        getAllPostsByCategories(name)
        page_number.value = 1
        disabledNext.value = false
        disabledAll.value = true
    }
}
</script>

<style scoped lang="scss" src="./CategoriesList.style.scss"></style>