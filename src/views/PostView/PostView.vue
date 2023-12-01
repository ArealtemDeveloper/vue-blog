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
                    <div class="title_tools">
                        <h1 class="title">{{ post.title }}</h1>
                        <div v-if="post.username === userUsername">
                            <EditTools/>
                        </div>
                    </div>
                    <p>{{ post.desc }}</p>
                    <p class="extended">{{ post.extended }}</p>
                </div>
        </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
import EditTools from '@/components/EditTools/EditTools.vue'
import PageLoader from '@/components/PageLoader/PageLoader.vue';
import Layout from '@/layouts/Layout/PageLayout.vue';
import moment from 'moment';
import { onMounted,  } from 'vue';
import { usePostsStore } from '@/store/posts';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';


const postsStore = usePostsStore()
const { getOnePost } = postsStore
const { post, isLoading } = storeToRefs(postsStore)
const user = ref(localStorage.getItem('user'))
const userUsername = ref<string>('');
user.value ? userUsername.value = JSON.parse(user.value).username : null

onMounted(() => {
    getOnePost()
})
</script>

<style scoped lang="scss" src="./PostView.style.scss"></style>