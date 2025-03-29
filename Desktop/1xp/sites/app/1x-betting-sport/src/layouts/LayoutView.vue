<template>
<HeaderApp />
<router-view />
<FooterApp/>
</template>

<script setup>
import HeaderApp from '../components/shared/HeaderApp.vue';
import FooterApp from '../components/shared/FooterApp.vue';
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>

