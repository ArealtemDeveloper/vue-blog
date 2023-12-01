import { router } from "@/router";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

interface IPost {
    title: string;
    desc: string,
    img: string,
    extended: string,
    cat: string,
    date: string,
    uid: number,
}

export const usePostsStore = defineStore('posts', () => {
    const posts = ref([]);
    const postsPagination = ref([]);
    const post = ref()
    const msg = ref<string>('')
    const latestPosts = ref([]);
    const postsPreview = ref([]);
    const isLoading = ref<boolean>(false)
    const btnVisible = ref<boolean>(false)
    const selectedCategory = ref<string>('All')
    const page_size = ref<number>(3)
    const pages_total = ref<number>()
    const page_number = ref<number>(1)
    const disabledNext = ref<boolean>(false)
    const disabledAll = ref<boolean>(false)

    const route = useRoute();


    //methods 
    const getAllPosts = async () => {
        isLoading.value = true
        try {
            const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/posts`)
            btnVisible.value = false
            selectedCategory.value='All'
            if(res) {
                posts.value = res.data
                latestPosts.value = res.data.slice(-3)
                postsPreview.value = res.data.slice(-6)
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
            const res = await axios.get('https://blog-backend-rosy.vercel.app/api/posts/search/get', {
                params: {
                    text: text,
                }
            })
            selectedCategory.value='All'
            btnVisible.value = true
            disabledAll.value = true
            
            page_number.value = 1
            if(res) {
                postsPagination.value = res.data
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

    const getPostsByPage = async ( page_size:number, amount:number) => {
        isLoading.value = true
        try {
            const res = await axios.get('https://blog-backend-rosy.vercel.app/api/posts/page/get', {
                params: {
                    limit: page_size,
                    offset: amount
                }
            })
            selectedCategory.value='All'
            btnVisible.value = false
            if(res) {
                pages_total.value = posts.value.length / 3
                postsPagination.value = res.data
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

    const getAllPostsByCategories = async (category:string) => {
        isLoading.value = true
        try {
            const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/posts/?cat=${category}`)
            selectedCategory.value=category
            btnVisible.value = false
            page_number.value = 1
            disabledNext.value = false
            disabledAll.value = true
            if(res) [
                postsPagination.value = res.data
            ]
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

    const createPost = async (post:IPost) => {
        isLoading.value = true
        try {
            const res = await axios.post(`https://blog-backend-rosy.vercel.app/api/posts`, post)
            if(res) {
                msg.value = res.data
                router.push('/')
            }  
        } catch (error) {
            console.log(error)
            msg.value = 'Error | Post has not been created'
        } finally {
            isLoading.value = false
        }
    }

    return {
        posts,
        postsPagination,
        post,
        latestPosts,
        msg,
        postsPreview,
        selectedCategory,
        page_size,
        disabledNext,
        disabledAll,
        pages_total,
        page_number,
        btnVisible,
        getPostsByPage,
        isLoading,
        getAllPostsByQuery,
        getAllPostsByCategories,
        getAllPosts,
        getOnePost,
        createPost
    }
})