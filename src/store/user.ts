import { PathNames } from "@/constants/route.constants";
import { router } from "@/router";
import axios from "axios";
import { defineStore } from "pinia"


export const useUserStore = defineStore('user', () => {
    const getUserInfo = async(id:number) => {
        try {  
                const res = await axios.get(`https://blog-backend-rosy.vercel.app/api/users/${id}`);
                router.push({ name: PathNames.USER })
                return res.data
            
        } catch (error) {
            console.log(error)
        }
    }


    return {
        getUserInfo
    }
});