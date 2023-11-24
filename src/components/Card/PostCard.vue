<template>
    <div class="card">
        <img :src="img" class="img"  alt="img">
        <h1 class="card_title">{{ title }} </h1>
        <p class="card_desc">{{ text }}</p>
        <button @click="redirectToPost" class="btn">Learn more</button>
    </div>
</template>

<script setup lang="ts">
    import router from '@/router';
    const props = defineProps(['title', 'text', 'img', 'id'])

    const redirectToPost = () => {
        router.push(`/posts/${props.id}`)
    }
</script>

<style lang="scss" src="./PostCard.style.scss" scoped></style>