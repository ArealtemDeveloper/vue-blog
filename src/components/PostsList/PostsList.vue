<template>
    <h1 class="title" :class="{list: isBlogList}">Other Blog Posts</h1>
    <div class="container" :class="{list: isBlogList}">
        <div v-for="card in data" :key="card.id">
            <PostCard 
            :title="card.title" 
            :text="card.desc" 
            :img="card.img"
            :id="card.id"
            :date="card.date"
            :category="card.cat"
            :isBlogList="isBlogList"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import PostCard from '@/components/Card/PostCard.vue'
    const props = defineProps(["data", "isBlogList"])

</script>

<style scoped lang="scss" src="./PostsList.style.scss"></style>