<template>
    <div class="pt-[22px] pb-[40px] bg-main-b rounded-[10px] text-left">
      <InfoShortBlock
        :title="infoData.title"
        :image="infoData.image"
        :content="infoData.content"
      />
      <span class="line-bottom"></span>
      <InfoShortBlock
        :title="infoData2.title"
        :image="infoData2.image"
        :content="infoData2.content"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import InfoShortBlock from "../layout/InfoShortBlock.vue"
  import image from "../../assets/img/slots.png"
  import image2 from "../../assets/img/slots-1.png"
  
  
  const infoData = ref({
    title: "Виртуальное казино 1xBet",
    content: `Виртуальное казино 1xBet выделяется своим разнообразным ассортиментом цифровых игр. Этот раздел предназначен для тех, кто предпочитает динамичный игровой опыт. С современной графикой и безупречным игровым процессом виртуальное казино включает в себя множество тематических слотов, видеопокера и других электронных игр. Это идеальное сочетание технологий и развлечений, предлагающее уникальный и увлекательный способ игры онлайн.`,
    image: image, 
  });
  const infoData2 = ref({
    title: "Игровые автоматы",
    content: `Игровые автоматы 1xBet — это рай для любителей слотов. Платформа может похвастаться обширной коллекцией слотов от известных поставщиков, включая классические фруктовые автоматы, современные видеослоты и прогрессивные джекпоты. Темы варьируются от древних цивилизаций до футуристических приключений, что гарантирует наличие слота на любой вкус. Благодаря регулярным обновлениям библиотека слот-игр всегда свежая и захватывающая.`,
    image: image2, 
  });
  
  </script>
  
  <style lang="scss" scoped></style>
  









