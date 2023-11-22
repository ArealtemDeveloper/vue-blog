<template>
    <div class="card">
        <img :src="img"  alt="img">
        <h1 class="card_title">{{ title }} </h1>
        <p class="card_desc">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['title', 'text', 'img'])
</script>

<style lang="scss" src="./PostCard.style.scss" scoped></style>