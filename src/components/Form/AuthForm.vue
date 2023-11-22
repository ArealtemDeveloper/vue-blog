<template>
    <div class="wrapper">
        <form class="form">
        <h1>{{ title }}</h1>
            <div v-for="input in props.inputs" :key="input" class="input_wrapper">
                <img :src="input.img" alt="img">
                <input :type="input.type" :placeholder="input.placeholder">
            </div>
            <button class="btn">{{btnName}}</button>
            <p>{{ text }} <span><RouterLink class="link" :to="refTo">{{refName}}</RouterLink></span></p>
        </form>
        <div class="img_container">
            <img src="../../assets/images/login.svg" alt="image">
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['inputs', 'title', 'btnName', 'refTo', 'text', 'refName'])
    console.log(props.title)
</script>

<style scoped lang="scss" src="./AuthForm.style.scss"></style>