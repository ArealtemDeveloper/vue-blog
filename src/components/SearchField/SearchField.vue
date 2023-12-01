<template>
    <div class="container">
        <div class="input_container">
            <input type="text" name="search" placeholder="Search Post" v-model="value" @keyup.enter="handleSearch">
            <div class="help" :class="{visible: value}">
                Press "Enter"
            </div>
            <img src="../../assets/images/search.svg" alt="search" @click="handleSearch">
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/store/posts';
import { ref } from 'vue';

 const postsStore = usePostsStore()
 const { getAllPostsByQuery } = postsStore
 const value = ref('')

 const handleSearch = () => {
     getAllPostsByQuery(value.value)
     value.value = ''
 }
</script>

<style scoped lang="scss" src="./SearchField.style.scss"></style>