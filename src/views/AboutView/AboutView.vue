<template>
    <Layout>
    <BreadCrumb/>
      <div class="container">
        <div class="content">
        <div class="content_left">
          <h1 class="title">ArealtemBlog</h1>
          <p class="desc">Here you can post your mind freely</p>
          <p class="desc">Just <RouterLink to="/register">Sign Up</RouterLink> and post everything you want</p>
        </div>
        <div class="content_right">
          <h1>Share your ideas with us</h1>
          <img src="../../assets/images/about-img.png" alt="img">
        </div>
        </div>
      </div>
    </Layout>
</template>

<script setup lang="ts">
  import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
  import Layout from '@/layouts/Layout/PageLayout.vue';
</script>

<style scoped lang="scss" src="./AboutView.style.scss"></style>