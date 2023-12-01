<template>
    <div class="container" v-if="pages_total">
        <img 
        src="../../assets/images/backPage.svg" 
        alt="back" 
        :class="{disabled: disabledAll}"
        @click="goPreviousPage"
        >
        <button class="btn">{{page_number}}</button>
        <img 
        src="../../assets/images/forwardPage.svg" 
        alt="forward"
        :class="{disabled: disabledNext || disabledAll}"
        @click="goNextPage"
         >
    </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '../../store/posts';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const postsStore = usePostsStore()
const { pages_total, page_size, page_number, disabledNext, disabledAll } = storeToRefs(postsStore)
const { getPostsByPage } = postsStore

onMounted( () => {
    page_number.value = 1
    disabledNext.value = false
})


const goNextPage = () => {
    if(pages_total.value && page_number.value < pages_total.value){
        console.log(page_number.value)
        page_number.value += 1;
        page_number.value > pages_total.value ? disabledNext.value = true : disabledNext.value = false
        getPostsByPage(page_size.value, page_size.value * (page_number.value - 1))
    }
}
const goPreviousPage = () => {
    if( pages_total.value && page_number.value > 1){
        disabledNext.value = false
        page_number.value -= 1;
        getPostsByPage(page_size.value, page_size.value * (page_number.value - 1))
    }
}

</script>

<style scoped lang="scss" src="./PagePagination.style.scss"></style>