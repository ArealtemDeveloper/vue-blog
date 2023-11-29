<template>
    <div class="card" :class="{list: isBlogList}">
        <div>
            <img :src="img" class="img"  alt="img">
        </div>
        <div class="content">
        <p class="date">{{ moment(date).fromNow() }}</p>
        <div class="title_block">
            <h1 class="card_title">{{ title }} </h1>
            <button @click="redirectToPost"><img src="../../assets/images/arrow.svg" alt=""></button>
        </div>
        <p class="card_desc">{{ text }}</p>
        <div class="categories">
            <div class="category">{{ category }}</div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { router } from '@/router';
    import moment from 'moment';
    const props = defineProps(['title', 'text', 'img', 'id', 'date', 'category', "isBlogList"])

    const redirectToPost = () => {
        router.push(`/posts/${props.id}`)
    }
</script>

<style lang="scss" src="./PostCard.style.scss" scoped></style>