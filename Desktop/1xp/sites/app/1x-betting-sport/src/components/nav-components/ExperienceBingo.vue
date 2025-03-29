<template>
    <div class="pt-[22px] pb-[40px] bg-main-b rounded-[10px] text-left">
      <InfoShortBlock
        :title="infoData.title"
        :image="infoData.image"
        :content="infoData.content"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import InfoShortBlock from "../layout/InfoShortBlock.vue"
  import bingoImg from "../../assets/img/live-casino.png"

  
  const infoData = ref({
    title: "Попробуйте бинго на онлайн-платформе 1xBet",
    content: `1xBet — это не только ставки на спорт; он также предлагает яркие впечатления от игры в бинго. Онлайн-платформа предлагает множество игр в бинго, включая традиционные и современные версии с различными темами и шаблонами. Благодаря регулярным акциям и бонусам, бинго на 1xBet не только развлекает, но и предлагает множество возможностей для выигрыша. Удобный интерфейс и функция чата в сообществе добавляют веселья, что делает его отличным выбором как для опытных игроков в бинго, так и для новичков.`,
    image: bingoImg, 
  });

  
  </script>
  
  <style lang="scss" scoped></style>
  