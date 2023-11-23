<template>
<div class="wrapper">
        <RouterLink to="/"><img class='home' src="../../assets/images/home.svg" alt=""></RouterLink>
        <AuthForm 
        title="WELCOME" 
        btnName='Login' 
        text="Don't have an account?"
        refTo='register'
        refName='Sign Up'
        :login='login'
        />
</div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/Form/AuthForm.vue';
import { ref } from 'vue'

const login = ref(true)

</script>

<style scoped lang="scss" src="./LoginView.style.scss"></style>