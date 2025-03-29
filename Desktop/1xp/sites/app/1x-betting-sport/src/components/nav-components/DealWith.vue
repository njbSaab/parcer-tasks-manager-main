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
  import bingoImg from "../../assets/img/live-casino-2.png"

  
  const infoData = ref({
    title: "Сделка с живыми дилерами в казино 1xBet",
    content: `Казино 1xBet поднимает игровой опыт онлайн на новый уровень с помощью игр с живыми дилерами. Игроки могут наслаждаться игрой в реальном времени с профессиональными дилерами, перенося аутентичную атмосферу казино прямо на свои экраны. Раздел живого казино предлагает множество игр, включая живую рулетку, блэкджек и баккара, каждая из которых проводится опытными дилерами. Высококачественная потоковая трансляция и интерактивные функции позволяют игрокам погрузиться в реалистичный опыт казино, дополненный живым чатом и различными углами камеры.`,
    image: bingoImg, 
  });

  
  </script>
  
  <style lang="scss" scoped></style>
  