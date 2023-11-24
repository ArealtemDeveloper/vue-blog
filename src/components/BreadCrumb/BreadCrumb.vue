<template>
  <div class="breadcrumbs-wrapper">
    <div :key="index" v-for="(breadcrumb, index) in breadcrumbs" class="breadcrumbs">
      <RouterLink v-if="breadcrumb.link" :to="breadcrumb.link">{{
        breadcrumb.title + '/'
      }}</RouterLink>
      <p v-else>{{ breadcrumb.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from 'router';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = ref<IBreadcrumb[]>();

breadcrumbs.value = route.meta.breadcrumb(route);

watch(route, (newRoute) => {
  breadcrumbs.value = newRoute.meta.breadcrumb(route);
});
</script>

<style src="./BreadCrumb.style.scss" lang="scss" scoped></style>