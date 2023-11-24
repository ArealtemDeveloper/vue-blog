<template>
    <Layout>
        <div class="container" v-if="data">
                <div class="img_container">
                    <img :src="data.img" class="img" alt="img">
                </div>
                <div class="content">
                    <p class="date">{{data.date.replace(/\T.*/, "")}}</p>
                    <div class="author">
                        <div v-if="data.userImg" class="avatar">
                            <img :src="data.userImg" alt="img">
                        </div>
                        <div v-else class="avatar">
                            <img src="../../assets/images/user.svg" alt="">
                        </div>
                        <span>{{data.username}}</span>
                    </div>
                    <h1>{{ data.title }}</h1>
                    <p>{{ data.desc }}</p>
                </div>
        </div>
        <div v-else>
            <p>This post doesn't exist</p>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout/PageLayout.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const data = ref()
const postId = +route.params.id

onMounted(async() => {
    try {
        const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/posts/${postId}`)
        data.value = res.data
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
})
</script>

<style scoped lang="scss" src="./PostView.style.scss"></style>