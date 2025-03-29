<!-- src/components/InfoBlock.vue -->
<template>
  <div
    class="info-block flex flex-col items-center gap-[30px] bg-transparent px-[12px] py-[20px]"
  >
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="text-base">{{ content }}</p>
    <img :src="image" :alt="title" class="w-full object-cover rounded-[10px]" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.info-block {
  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.5;
  }
  p {
    font-size: 14px;
    line-height: 1.3;
    color: #ffffff;
    opacity: 0.9;
  }
}

/* Стили для компонента InfoBlock */
</style>
