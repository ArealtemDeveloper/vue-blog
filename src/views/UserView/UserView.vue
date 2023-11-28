<template>
   <BreadCrumb/>
    <Layout>
    <div class="container">
    <div class="content">
        <div class="img_container">
         <img class="img" src="../../assets/images/user.svg" alt="user">
        </div>
        <div class="info">
            <div class="text" >
            <span>Email:</span>
            {{ user ? JSON.parse(user).email : null }}
            </div>
            <div class="text">
            <span>Username:</span>
            {{ user ? JSON.parse(user).username : null }}
            </div>
        </div>
    </div>
    </div>
    </Layout>
</template>

<script setup lang="ts">
    import { useUserStore } from '@/store/user';
    import { storeToRefs } from 'pinia';
    import Layout from '@/layouts/Layout/PageLayout.vue'
    import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue';

    const userStore = useUserStore();
    const user = localStorage.getItem('user');
    
</script>

<style scoped lang="scss" src="./UserView.style.scss"></style>