<template>
    <Layout>
    <BreadCrumb/>
        <div v-if="isLoading">
            <PageLoader/>
        </div>
        <div class="container" v-else-if="post">
        <div class="main">
                <div class="img_container">
                    <img :src="post.img" class="img" alt="img">
                </div>
                <div class="content">
                    <p class="date">{{moment(post.date).fromNow()}}</p>
                    <div class="author">
                        <div v-if="post.userImg" class="avatar">
                            <img :src="post.userImg" alt="img">
                        </div>
                        <div v-else class="avatar avatar_placeholder">
                            <img src="../../assets/images/user.svg" alt="">
                        </div>
                        <span>{{post.username}}</span>
                    </div>
                    <h1>{{ post.title }}</h1>
                    <p>{{ post.desc }}</p>
                    <p class="extended">{{ post.extended }}</p>
                </div>
        </div>
        </div>
        <div v-else>
            ПОСТ НЕ НАЙДЕН
        </div>
    </Layout>
</template>

<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
import PageLoader from '@/components/PageLoader/PageLoader.vue';
import Layout from '@/layouts/Layout/PageLayout.vue';
import moment from 'moment';
import { onMounted,  } from 'vue';
import { usePostsStore } from '@/store/posts';
import { storeToRefs } from 'pinia';


const postsStore = usePostsStore()
const { getOnePost } = postsStore
const { post, isLoading } = storeToRefs(postsStore)
console.log(post)
onMounted(() => {
    getOnePost()
})
</script>

<style scoped lang="scss" src="./PostView.style.scss"></style>