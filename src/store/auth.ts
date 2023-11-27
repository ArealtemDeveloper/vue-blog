import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';
import { IUser } from '@/views/LoginView/LoginView.types';
import { IUserRegister } from '@/views/RegisterView/RegisterView.types';

export const useAuthStore = defineStore('auth', () => {
  const errorMsg = ref<string>('')

  //methods 

  const loginUser = async(user: IUser) => {
    try {
      const res = await axios.post('https://blog-backend-rosy.vercel.app/api/auth/login', user)
      localStorage.setItem('user', JSON.stringify(res.data))
      router.push('/')
    } catch (error) {
      errorMsg.value = error.response.data
      console.log(errorMsg.value)
    }
  }

  const registerUser = async(user: IUserRegister) => {
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
        localStorage.removeItem('user')
        window.location.reload()
      } catch (error) {
        errorMsg.value = error.response.data
      }
  }

  return {
    errorMsg,
    logout,
    loginUser,
    registerUser
  };
});