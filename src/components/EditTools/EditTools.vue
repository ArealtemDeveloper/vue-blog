<template>
    <div class="tools_container">
        <div class="tool_container" @click="deletePost">
            <span>Delete</span>
            <img src="../../assets/images/deleteItem.svg" alt="delete">
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/store/posts';

const postsStore = usePostsStore()
const { deletePost } = postsStore

</script>

<style scoped lang="scss" src="./EditTools.style.scss"></style>