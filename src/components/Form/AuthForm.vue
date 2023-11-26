<template>
    <div class="wrapper">
        <form class="form" @submit.prevent="onSubmit">
        <h1>{{ title }}</h1>
            <div v-if="login" class='form_wrapper'>
                <div class='input_wrapper'>
                    <img src='../../assets/images/user.svg' alt="img">
                    <input required v-model="username" type="text" name="username" placeholder="username">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/password.svg' alt="password">
                    <input required v-model="password" type="password" name="password" placeholder="Password">
                </div>
                <div v-if="errorMsg" class="error">
                    {{ errorMsg }}
                </div>
            </div>
            <div v-else class='form_wrapper'>
                <div class='input_wrapper'>
                <img src='../../assets/images/mail.svg' alt="mail">
                    <input required v-model="email" type="email" name="email" placeholder="E-mail">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/user.svg' alt="user">
                    <input required v-model="username" type="text" name="Username" placeholder="Username">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/password.svg' alt="password">
                    <input minlength="6" required v-model="password" type="password" name="password" placeholder="Password">
                </div>
                <div class='input_wrapper'>
                    <img src='../../assets/images/password.svg' alt="password">
                    <input required v-model="confirmPassword" type="password" name="password" placeholder="Confirm password">
                </div>
                <div v-if="errorConfirmPassword">
                    {{errorConfirmPassword}}
                </div>
                <div v-if="errorMsg" class="error">
                    {{ errorMsg }}
                </div>
            </div>
            <button class="btn">{{btnName}}</button>
            <p class="error">{{ errorMsg.value }}</p>
            <p>{{ text }} <span><RouterLink class="link" :to="refTo">{{refName}}</RouterLink></span></p>
        </form>
        <div class="img_container">
            <img src="../../assets/images/login.svg" alt="image">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
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
    const email = ref(null)
    const password = ref(null)
    const username = ref(null)
    const confirmPassword = ref(null)
    const errorConfirmPassword = computed(() => {
        return confirmPassword.value === password.value ? '' : "Passwords do not match"
    })

    let user = {}
    const onSubmit = () => {
        if( !props.login ) {
            if(errorConfirmPassword.value) {
                return
            }
        }
        user = {
            email: email.value,
            password: password.value,
            username: username.value,
        }
        props.fetchUser(user)
    }
</script>

<style scoped lang="scss" src="./AuthForm.style.scss"></style>