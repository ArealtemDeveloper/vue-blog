<template>
    <Layout>
        <div class="container">
                <div class="img_container">
                    <img :src="data.img" class="img" alt="">
                </div>
                <div class="content">
                    <p class="date">{{data.date}}</p>
                    <h1>{{ data.title }}</h1>
                    <p>{{ data.desc }}</p>
                </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout/PageLayout.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const data = ref([])
const postId = +route.params.id

onMounted(async() => {
    try {
        const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/posts/${postId}`)
        data.value = res.data
    } catch (error) {
        console.log(error)
    }
})
</script>

<style scoped lang="scss" src="./PostView.style.scss"></style>