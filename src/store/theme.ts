import { defineStore } from "pinia"
import { ref } from "vue"


export const useThemeStore = defineStore('theme', () => {
    let theme = ref<string>('light')

        //methods

        const takeThemeFromStorage = () => {
            const savedTheme = localStorage.getItem('theme')
            if(savedTheme) {
                theme.value = savedTheme
                document.body.setAttribute('data-theme', savedTheme)
            }else {
            localStorage.setItem('theme', 'light')
            document.body.setAttribute('data-theme', 'light')
        }
        }

        const toggleTheme = () => {
            theme.value = theme.value === 'light'? 'dark' : 'light'
            document.body.setAttribute('data-theme', theme.value)
            localStorage.setItem('theme', theme.value)
        }

        return {
            theme,
            takeThemeFromStorage,
            toggleTheme
        }
    
})