<template>
    <div class="wrapper">
        <form class="form">
            <div v-for="input in props.inputs" :key="input" class="input_wrapper">
                <input :type="input.type" :placeholder="input.placeholder">
            </div>
            <button>Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['inputs'])
</script>

<style scoped lang="scss" src="./AuthForm.style.scss"></style>