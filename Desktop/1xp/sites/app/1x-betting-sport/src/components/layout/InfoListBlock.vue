<!-- src/components/InfoBlock.vue -->
<template>
  <div
    class="info-block flex flex-col items-center gap-[20px] bg-transparent px-[12px] py-[20px] text-start"
  >
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <img v-if="image" :src="image" :alt="title" class="w-full object-cover rounded-[10px]" />
    <p class="text-base">{{ content }}</p>
    <ul class="info-list flex flex-col gap-[10px]">
      <li
        v-for="(item, index) in listItems"
        :key="index"
        class="flex items-start gap-[7.5px]"
      >
        <span class="pt-[2.5px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75 0C3.46875 0 0 3.5 0 7.75C0 12.0312 3.46875 15.5 7.75 15.5C12 15.5 15.5 12.0312 15.5 7.75C15.5 3.5 12 0 7.75 0ZM7.75 1.5C11.1875 1.5 14 4.3125 14 7.75C14 11.2188 11.1875 14 7.75 14C4.28125 14 1.5 11.2188 1.5 7.75C1.5 4.3125 4.28125 1.5 7.75 1.5ZM12.125 5.59375L11.4062 4.875C11.2812 4.71875 11.0312 4.71875 10.875 4.875L6.46875 9.25L4.59375 7.375C4.4375 7.21875 4.21875 7.21875 4.0625 7.375L3.34375 8.0625C3.21875 8.21875 3.21875 8.46875 3.34375 8.59375L6.1875 11.4688C6.34375 11.625 6.5625 11.625 6.71875 11.4688L12.125 6.125C12.25 5.96875 12.25 5.71875 12.125 5.59375Z"
              fill="#14A0FF"
            />
          </svg>
        </span>
        {{ item }}
      </li>
    </ul>
    <p v-if="listDescription" class="text-base">
      {{ listDescription }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  image: { type: String, required: false },
  listItems: { type: Array, required: true },
  content: { type: String, required: true },
  listDescription: { type: String, required: false },
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
  p,li {
    font-size: 14px;
    line-height: 1.3;
    color: #ffffff;
  }
}

/* Стили для компонента InfoBlock */
</style>
