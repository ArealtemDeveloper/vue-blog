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
        :fetchUser="loginUser"
        :errorMsg="errorMsg"
        />
</div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/Form/AuthForm.vue';
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const login = ref(true)
const authStore = useAuthStore()
const { errorMsg } = storeToRefs(authStore)
const { loginUser} = authStore

</script>

<style scoped lang="scss" src="./LoginView.style.scss"></style>