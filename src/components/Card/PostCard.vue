<template>
    <div class="card">
        <div>
            <img :src="img" class="img"  alt="img">
        </div>
        <p class="date">{{ date.replace(/\T.*/, "") }}</p>
        <div class="title_block">
            <h1 class="card_title">{{ title }} </h1>
            <button @click="redirectToPost"><img src="../../assets/images/arrow.svg" alt=""></button>
        </div>
        <p class="card_desc">{{ text }}</p>
        <div class="categories">
            <div v-for="category in categoryArr" :key="category" class="category">{{ category }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import router from '@/router';
    const props = defineProps(['title', 'text', 'img', 'id', 'date', 'category'])
    const categoryArr = props.category.split(' ')

    const redirectToPost = () => {
        router.push(`/posts/${props.id}`)
    }
</script>

<style lang="scss" src="./PostCard.style.scss" scoped></style>