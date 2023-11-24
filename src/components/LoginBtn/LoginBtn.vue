<template> 
<div class="container">
    <RouterLink :to="url" class="link" @click="logout">
        {{ name }}
    </RouterLink>
</div>
</template>

<script setup lang="ts">
    import { BtnType } from './LoginBtn.types'

    const props = defineProps<BtnType>()
</script>

<style scoped lang="scss" src="./LoginBtn.style.scss"></style>