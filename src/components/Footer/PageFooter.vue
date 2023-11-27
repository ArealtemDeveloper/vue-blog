<template>
    <div class="container" v-if="!isLoading">
        <div class="logo">
            <p class="copyright">© 2023</p>
            <span>ArealtemBlog</span>
        </div>
        <div class="socials">
            <a href="#"><img src="../../assets/images/insta.svg" alt="insta"></a>
            <a href="#"><img src="../../assets/images/telegram.svg" alt="telegram"></a>
            <a href="#"><img src="../../assets/images/twitter.svg" alt="twitter"></a>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePostsStore } from '../../store/posts';
    import { storeToRefs } from 'pinia';
    const postsStore = usePostsStore()
    const { isLoading } = storeToRefs(postsStore)
</script>

<style scoped lang="scss" src="./PageFooter.style.scss"></style>