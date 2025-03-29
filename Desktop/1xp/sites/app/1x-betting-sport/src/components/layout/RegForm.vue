<!-- src/components/InfoBlock.vue -->
<template>
  <div class="nj-shadow-bg info-reg flex flex-col gap-[20px] items-center text-center px-[18px] py-[24px]">
    <div class="img-wrapper px-[20px]">
        <img :src="image" :alt="title" class="w-full object-cover" />
    </div>

    <div class="reg-body text-center w-full">
      <div class="title-group flex w-full justify-between items-center px-[5px] md:text-lg">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
            <img class="" :src="titleIcon" alt="" />
        </div>
      <p class="text-white text-medium px-[20px]">{{ content }}</p>
      <button class="btn-main">
        {{ btnText }}
      </button>

      <a :href="btnLink" class="link-reg">{{ linkText }}</a>

      <span class="used">{{ usedText }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  titleIcon: { type: String, required: true },
  content: { type: String, required: true },
  btnLink: { type: String, required: true },
  btnText: { type: String, required: true },
  linkText: { type: String, required: true },
  usedText: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.info-reg {
    background-image: url(../../assets/img/reg-bg-1.png);
    background-color: #141414;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 12px;
  .img-wrapper{
        width: 100%;
        background: linear-gradient(180deg, #D9D9D9, transparent);
        backdrop-filter: blur(3px);
        border-radius: 12px;
        display: flex;
        align-items: center;
        padding: 40px 0;
        img{
        max-width: 200px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        border-radius: 0;
        }
      }
  .reg-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title-group {
      h2 {
        font-size: 4.1vw;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.5;
        text-align: left;
      }
      img{
        width: 60px;
        padding-left: 10px;
        &:hover{
          filter: drop-shadow(0 0 2em #42b883aa);
        }
      }

    }
    .main-btn{
      max-width: 380px;
      margin: 0 auto;
    }
    .used {
      font-size: 3.5vw;
      line-height: 1.3;
      color: #ffffff;
      opacity: 0.8;
      font-weight: bold;
    }
    p{
        font-size: 16px;
        font-weight: 500;
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
      }
    .link-reg{
      color: #14A0FF;
      text-decoration: underline;
      transition: .3s ease-in;
      &:hover{
        transition: .3s ease-in;
        text-shadow: 0 0 15px #14A0FF, 0 0 35px #ffffff;
      }
    }
  }
}

/* Стили для компонента InfoBlock */
</style>
