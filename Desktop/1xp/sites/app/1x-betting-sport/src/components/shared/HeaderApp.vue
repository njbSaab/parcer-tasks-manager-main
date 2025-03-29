<template>
  <div class="flex items-center justify-between header">
    <div class="logo-wrapper mr-[30px]">
      <img :src="headerData[0].logo" alt="Logo" />
      <!-- Статический путь работает, но лучше использовать импорт -->
    </div>
    <div class="controlls-group flex gap-[12px] items-center">
      <div class="btn-wrapper">
        <button class="btn btn-ghost">Registration</button>
      </div>
      <div class="lang-wrapper flex items-center h-auto relative w-[45px]">
        <ul
          class="flex flex-col items-center"
          :class="{ 'gap-2, active': isMenuActive }"
          @click="toggleLang"
        >
          <li
            class="border border-white rounded-full p-0.5"
            :class="{ active: isMenuActive }"
          >
            <img :src="headerData[0].langs[1]" alt="Language" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logoImg from "@assets/img/logo.png";
import us1Img from "@assets/img/us1.svg";

const isLangActive = ref(false);
const isMenuActive = ref(false);

const toggleLang = () => {
  isMenuActive.value = !isMenuActive.value;

  console.log(isMenuActive.value);
};

const headerData = ref([
  {
    logo: logoImg,
    langs: [us1Img, us1Img],
  },
]);
</script>

<style lang="scss" scoped>
.header {
  background: #141414;
  padding: 22px 20px 22px 19px;
  ul {
    margin-left: 6px;
    padding: 6.5px;
    background: #313131;
    border-radius: 12px;
  }
  .active li {
  }
}
</style>
