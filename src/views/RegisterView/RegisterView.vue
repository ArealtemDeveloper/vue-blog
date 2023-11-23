<template>
        <RouterLink to="/"><img class='home' src="../../assets/images/home.svg" alt=""></RouterLink>
        <AuthForm 
        title="SIGN UP" 
        btnName='Sign Up' 
        text="Have an account?"
        refTo='login'
        refName='Login'
        :login='login'
        />
</template>

<script setup lang="ts">
import AuthForm from '@/components/Form/AuthForm.vue';
import { ref } from 'vue'

const login = ref(false)
</script>

<style scoped lang="scss" src="./RegisterView.style.scss"></style>