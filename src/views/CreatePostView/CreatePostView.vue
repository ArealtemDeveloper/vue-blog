<template>
    <BreadCrumb/>
    <Layout>
        <div class="container">
            <div class="content">
            <h1>Create your own Post</h1>
            <div class="inputs_container">
                <div class="input_container">
                    <label class="label" for="title">Title</label>
                    <input class="input-text" id="title" name="title" type="text" placeholder="Title">
                </div>
                <div class="input_container">
                    <label class="label" for="desc">Desc</label>
                    <input class="input-text" id="desc" type="text" placeholder="Short Description">
                </div>
            </div>
                <div class="buttons" v-if="editor">
                <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('bold') }">
                    <img src="../../assets/images/italic.svg" alt="img">
                </button>
                <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                    <img src="../../assets/images/bold.svg" alt="img">
                </button>
                <button @click="editor.chain().focus().unsetAllMarks().run()">
                    <img src="../../assets/images/return.svg" alt="img">
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                    <img src="../../assets/images/h1.svg" alt="img">
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                    <img src="../../assets/images/h2.svg" alt="img">
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                    <img src="../../assets/images/h3.svg" alt="img">
                </button>
                </div>
                <div class="editor_container">
                <span class="label">Main Text</span>
                    <editor-content :editor="editor" class="editor" v-model="content" />
                </div>
                <button class="btn" >Create Post</button>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout/PageLayout.vue'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import Heading from '@tiptap/extension-heading'
import StarterKit from '@tiptap/starter-kit'
import { ref } from 'vue';

const content = ref<string>('')
console.log(content.value)
const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
    Heading.configure({
        levels: [1, 2, 3]
    })
  ],
})

</script>

<style scoped lang="scss" src="./CreatePostView.style.scss"></style>