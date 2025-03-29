//IntroduceTo.vue
<template>
  <div class="pt-[22px] pb-[40px] bg-main-b rounded-[10px] text-left">    
    <InfoBlockImgBottom
      :title="introduceData.title" 
      :image="introduceData.img" 
      :content="introduceData.content" 
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InfoBlockImgBottom from "../layout/InfoShortBlockImgBottom.vue"; 
import introduceImg from "../../assets/img/introduction.png";

const introduceData = ref({
  title: "Введение в 1xBet",
  content: `1xBet является лидером в мире ставок онлайн, особенно в Японии. Эта платформа — не просто еще один букмекер; это центр, где любители ставок погружаются в море возможностей спортивных ставок, вооружившись трюками ставок 1xBet для улучшения своих стратегий ставок. Основанная с целью произвести революцию в сфере ставок, 1xBet последовательно выполняет свое обещание предоставлять исключительный опыт ставок. Ее обширное покрытие, удобный интерфейс и приверженность безопасности завоевали преданных поклонников среди японских игроков.`,
  img: introduceImg
});
</script>


<style lang="scss" scoped>

</style>