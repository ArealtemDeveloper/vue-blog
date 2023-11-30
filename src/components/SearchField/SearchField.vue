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
import { storeToRefs } from 'pinia';

 const postsStore = usePostsStore()
 const { getAllPostsByQuery } = postsStore
 const { disabledAll, page_number } = storeToRefs(postsStore)
 const value = ref('')

 const handleSearch = () => {
     getAllPostsByQuery(value.value)
     disabledAll.value = true
     page_number.value = 1
     value.value = ''
 }
</script>

<style scoped lang="scss" src="./SearchField.style.scss"></style>