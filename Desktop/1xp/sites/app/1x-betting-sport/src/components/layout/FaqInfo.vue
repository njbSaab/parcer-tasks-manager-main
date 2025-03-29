<!-- src/layout/FaqInfo.vue -->
<template>
  <div class="info-block bg-tr-30 flex flex-col items-start gap-[12px] pt-[23px] pb-[23px] rounded-[6px] border text-white border-white px-[13px] text-left">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="text-base">{{ content }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.info-block {
  text-align: start;
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.5;
  }
  p {
    font-size: 14px;
    line-height: 1.3;
    color: #ffffff;
    // text-shadow: 0 0 5px white;
    // opacity: 0.9;
  }
}
</style>