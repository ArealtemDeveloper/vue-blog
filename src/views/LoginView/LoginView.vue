<template>
    <Layout>
        <AuthForm :inputs="data"/>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout/PageLayout.vue';
import AuthForm from '@/components/Form/AuthForm.vue';
import { data } from './data'

</script>

<style scoped lang="scss" src="./LoginView.style.scss"></style>