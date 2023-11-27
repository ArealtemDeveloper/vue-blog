<template>
        <RouterLink to="/"><img class='home' src="../../assets/images/home.svg" alt=""></RouterLink>
        <AuthForm 
        title="SIGN UP" 
        btnName='Sign Up' 
        text="Have an account?"
        refTo='login'
        refName='Login'
        :login='login'
        :fetchUser="registerUser"
        :errorMsg="errorMsg"
        />
</template>

<script setup lang="ts">
import AuthForm from '@/components/Form/AuthForm.vue';
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const login = ref<boolean>(false)
const authStore = useAuthStore()
const { registerUser } = authStore
const { errorMsg } = storeToRefs(authStore)
</script>

<style scoped lang="scss" src="./RegisterView.style.scss"></style>