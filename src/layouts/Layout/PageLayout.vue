<template>
    <div class="container">
        <Header />
        <slot></slot>
        <Footer/>
    </div>
</template>

<script lang="ts" setup>
    import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
    import Header from '@/components/Header/PageHeader.vue';
    import Footer from '@/components/Footer/PageFooter.vue'
</script>

<style lang="scss" scoped>

</style>