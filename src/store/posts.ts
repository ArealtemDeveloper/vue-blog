import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

export const usePostsStore = defineStore('posts', () => {
    const posts = ref([]);
    const post = ref()
    const latestPosts = ref([]);
    const isLoading = ref<boolean>(false)
    const btnVisible = ref<boolean>(false)

    const route = useRoute();


    //methods 
    const getAllPosts = async () => {
        isLoading.value = true
        try {
            const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/posts`)
            btnVisible.value = false
            if(res) {
                posts.value = res.data
                latestPosts.value = res.data.slice(-3)
            }
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            isLoading.value = false
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    const getAllPostsByQuery = async (text:string) => {
        isLoading.value = true
        try {
            const res = await axios.post('https://blog-backend-rosy.vercel.app/api/posts/search/get', {"text": text})
            btnVisible.value = true
            if(res) posts.value = res.data
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            isLoading.value = false
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    const getAllPostsByCategories = async (category?:string) => {
        isLoading.value = true
        try {
            const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/posts/?cat=${category}`)
            btnVisible.value = false
            if(res) posts.value = res.data
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            isLoading.value = false
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    const getOnePost = async () => {
        isLoading.value = true
        try {
            const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/posts/${+route.params.id}`)
            if(res) post.value = res.data
            console.log(res.data)
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    return {
        posts,
        post,
        latestPosts,
        btnVisible,
        getAllPostsByQuery,
        getAllPostsByCategories,
        isLoading,
        getAllPosts,
        getOnePost
    }
})