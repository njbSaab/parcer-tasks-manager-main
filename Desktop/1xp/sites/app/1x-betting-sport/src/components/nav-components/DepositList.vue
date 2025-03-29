//Dep.vue
<template>
  <div class="pt-[22px] pb-[40px] bg-main-b rounded-[10px] text-left">    
    <InfoListBlock
      :title="infoData.title" 
      :content="infoData.content" 
      :listItems="infoData.listItems"
      :image="infoData.image"
      :listDescription="infoData.listDescription"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InfoListBlock from "../layout/InfoListBlock.vue"; 
import image from "../../assets/img/deposit.png";


const infoData = ref({
  title: "Депозит и вывод средств для игроков на 1xBet",
  content: `1xBet упрощает процесс внесения и вывода средств для игроков. Платформа поддерживает широкий спектр платежных методов, включая банковские карты, электронные кошельки, банковские переводы и даже криптовалюты. Такое разнообразие гарантирует, что игроки из разных регионов могут легко совершать транзакции.`,
  listItems: [
    "Депозит: Депозиты обрабатываются мгновенно, что позволяет игрокам начать делать ставки без промедления.",
    "Вывод средств: Вывод средств оптимизирован и безопасен, а платформа обеспечивает своевременную обработку. Продолжительность вывода средств может варьироваться в зависимости от выбранного метода, но 1xBet стремится завершать транзакции как можно быстрее.",
  ],
    image: image,
    listDescription:`Процессы пополнения и вывода средств разработаны с учетом безопасности и удобства пользователей, что делает 1xBet надежной платформой для управления средствами для ставок.`,
});
</script>


<style lang="scss" scoped>

</style>