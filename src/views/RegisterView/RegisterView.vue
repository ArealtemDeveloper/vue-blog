<template>
        <RouterLink to="/"><img class='home' src="../../assets/images/home.svg" alt=""></RouterLink>
        <AuthForm 
        :inputs="data" 
        title="SIGN UP" 
        btnName='Sign Up' 
        text="Have an account?"
        refTo='login'
        refName='Login'
        />
</template>

<script setup lang="ts">
import AuthForm from '@/components/Form/AuthForm.vue';
import { data } from './data'

</script>

<style scoped lang="scss" src="./RegisterView.style.scss"></style>