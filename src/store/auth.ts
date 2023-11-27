import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';
import { IUser } from '@/views/LoginView/LoginView.types';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(false);
  const errorMsg = ref<string>('')
  const user = ref(localStorage.getItem('user'))

  //methods 

  const loginUser = async(user: IUser) => {
    try {
      const res = await axios.post('https://blog-backend-rosy.vercel.app/api/auth/login', user)
      if(res) isAuth.value = true
      localStorage.setItem('user', JSON.stringify(res.data))
      router.push('/')
    } catch (error) {
      errorMsg.value = error.response.data
      console.log(errorMsg.value)
    }
  }

  const registerUser = async(user: IUser) => {
    try {
      const res = await axios.post('https://blog-backend-rosy.vercel.app/api/auth/register', user)
      router.push('/login')
    } catch (error) {
      errorMsg.value = error.response.data
    }
  }

  const logout = async() => {
    try {
        const res = await axios.post('https://blog-backend-rosy.vercel.app/api/auth/logout')
        if(res) isAuth.value = false
        localStorage.removeItem('user')
        window.location.reload()
      } catch (error) {
        errorMsg.value = error.response.data
      }
  }

  return {
    isAuth,
    errorMsg,
    user,
    logout,
    loginUser,
    registerUser
  };
});