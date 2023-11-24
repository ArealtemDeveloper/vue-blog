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
        :fetchUser="fetchUser"
        :errorMsg="errorMsg"
        />
</div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/Form/AuthForm.vue';
import { ref } from 'vue'
import axios from 'axios';
import router from '@/router';
import { IUser } from './LoginView.types';

let errorMsg = ref('')
const login = ref(true)
const fetchUser = async (user:IUser) => {
        try {
                const res = await axios.post('https://blog-backend-rosy.vercel.app/api/auth/login', user)
                localStorage.setItem('user', JSON.stringify(res.data))
                router.push('/')
        } catch (error) {
                errorMsg.value = error.response.data
                console.log(errorMsg.value)
        }
}

</script>

<style scoped lang="scss" src="./LoginView.style.scss"></style>