<template>
    <div class="wrapper">
        <form class="form">
        <h1>{{ title }}</h1>
            <div v-if="login" class='form_wrapper'>
                <div class='input_wrapper'>
                    <img src='../../assets/images/user.svg' alt="img">
                    <input v-model="username" type="text" name="username" placeholder="username">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/password.svg' alt="password">
                    <input v-model="password" type="password" name="password" placeholder="Password">
                </div>
            </div>
            <div v-else class='form_wrapper'>
                <div class='input_wrapper'>
                <img src='../../assets/images/mail.svg' alt="mail">
                    <input v-model="email" type="email" name="email" placeholder="E-mail">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/user.svg' alt="user">
                    <input v-model="username" type="text" name="Username" placeholder="Username">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/password.svg' alt="password">
                    <input v-model="password" type="password" name="password" placeholder="Password">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/password.svg' alt="password">
                    <input v-model="confirmPassword" type="password" name="password" placeholder="Confirm password">
                </div>
            </div>
            <button @click="(e) => onSubmit(e, login)" class="btn">{{btnName}}</button>
            <p class="error">{{ errorMsg.value }}</p>
            <p>{{ text }} <span><RouterLink class="link" :to="refTo">{{refName}}</RouterLink></span></p>
        </form>
        <div class="img_container">
            <img src="../../assets/images/login.svg" alt="image">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const props = defineProps([
        'title', 
        'btnName', 
        'refTo', 
        'text', 
        'refName', 
        'login',
        'fetchUser',
        'errorMsg'
    ])
    const email = ref('')
    const password = ref('')
    const username = ref('')
    const confirmPassword = ref('')

    const checkPassword = () => {
        if(password.value && confirmPassword.value) {
            password.value === confirmPassword.value ? null : props.errorMsg.value = 'Passwords do not match'
        }
    }
    let user = {}
    const onSubmit = (e:MouseEvent, login:boolean) => {
        e.preventDefault();
        login ? null: checkPassword()
        user = {
            email: email.value,
            password: password.value,
            username: username.value,
        }
        props.fetchUser(user)
        console.log(user)
    }
</script>

<style scoped lang="scss" src="./AuthForm.style.scss"></style>