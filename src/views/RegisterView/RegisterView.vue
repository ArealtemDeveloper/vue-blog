<template>
        <RouterLink to="/"><img class='home' src="../../assets/images/home.svg" alt=""></RouterLink>
        <AuthForm 
        title="SIGN UP" 
        btnName='Sign Up' 
        text="Have an account?"
        refTo='login'
        refName='Login'
        :login='login'
        :fetchUser="fetchUser"
        :errorMsg="errorMsg"
        />
</template>

<script setup lang="ts">
import AuthForm from '@/components/Form/AuthForm.vue';
import { IUser } from './RegisterView.types'
import { ref } from 'vue'
import axios from 'axios';
import router from '@/router';

const login = ref<boolean>(false)
let errorMsg = ref('')
const fetchUser = async (user:IUser) => {
        try {
                const res = await axios.post('https://blog-backend-rosy.vercel.app/api/auth/register', user)
                router.push('/login')
        } catch (error) {
                errorMsg.value = error.response.data
        }
}
</script>

<style scoped lang="scss" src="./RegisterView.style.scss"></style>