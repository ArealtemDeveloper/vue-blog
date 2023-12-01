<template>
    <BreadCrumb/>
    <Layout>
        <div class="container">
            <form class="content" @submit.prevent="onSumbitForm">
            <h1>Create your own Post</h1>
            <div class="inputs_container">
                <div class="input_container">
                    <label class="label" for="title">Title</label>
                    <input 
                    minlength="10" 
                    required 
                    class="input-text" 
                    id="title" 
                    name="title" 
                    type="text" 
                    placeholder="Title"
                    v-model="post.title"
                    >
                </div>
                <div class="input_container">
                    <label class="label" for="desc">Desc</label>
                    <input 
                    minlength="10" 
                    required 
                    class="input-text" 
                    id="desc" 
                    type="text" 
                    placeholder="Short Description"
                    v-model="post.desc"
                    >
                </div>
                <div class="input_container">
                    <label class="label" for="img">Img</label>
                    <input 
                    required 
                    class="input-text" 
                    id="img" 
                    type="text" 
                    placeholder="Enter img URL"
                    v-model="post.img"
                    >
                </div>
            </div>
                <div class="editor_container">
                <label class="label" for="content">Content</label>
                    <textarea 
                    class="editor" 
                    id="content" 
                    placeholder="Your post text" 
                    v-model="post.extended"
                    cols="30" 
                    rows="10">
                    </textarea>
                </div>
                <div class="chooseCategory">
                <span class="chooseCategory_title">Choose one category</span>
                <div class="categories_container">
                    <div 
                    class="category" 
                    v-for="category in availableCategories" 
                    :key="category.id" 
                    @click="onChooseCategory(category)"
                    :class="{ selected: selected === category.name}"
                    >
                        {{ category.name }}
                    </div>
                </div>
                </div>
                <div class="errorMsg" v-if="errorMsg">
                    {{  errorMsg }}
                </div>
                <button class="btn" >Create Post</button>
            </form>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout/PageLayout.vue'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
import { availableCategories } from './data'
import { ref } from 'vue';
import { ICategory } from './CreatePostView.types'
import { reactive } from 'vue'
import { usePostsStore } from '@/store/posts';
import moment from 'moment';

const postsStore = usePostsStore()
const { createPost } = postsStore
const selected = ref<string>('')
const errorMsg = ref<string>('')
const user = localStorage.getItem('user')
console.log(user)
const post = reactive({
    title: '',
    desc: '',
    img: '',
    extended: '',
    cat: '',
    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    uid: JSON.parse(user).id,
})
const onChooseCategory = (category: ICategory) => {
    selected.value = category.name
    post.cat = category.name
}
const onSumbitForm = () => {
    if(selected.value === '') {
        errorMsg.value = 'Please choose a category'
        return
    }
    console.log(post)
    createPost(post)
    errorMsg.value = ''
}

</script>

<style scoped lang="scss" src="./CreatePostView.style.scss"></style>