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
    <span class="line-bottom"></span>
    <InfoShortBlock
      :title="infolol.title"
      :image="infolol.image"
      :content="infolol.content"
    />
    <span class="line-bottom"></span>
    <InfoShortBlock
      :title="infoCs2.title"
      :image="infoCs2.image"
      :content="infoCs2.content"
    />
    <span class="line-bottom"></span>
    <InfoShortBlock
      :title="infoFifa.title"
      :image="infoFifa.image"
      :content="infoFifa.content"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InfoShortBlock from "../layout/InfoShortBlock.vue";
import image from "../../assets/img/ea/slots-3.png";
import image2 from "../../assets/img/ea/dota-2.png";
import image3 from "../../assets/img/ea/lol.png";
import image4 from "../../assets/img/ea/cs2.png";
import image5 from "../../assets/img/ea/fifa.png";

const infoData = ref({
  title: "Игровые автоматы",
  content: `Игровые автоматы 1xBet — это рай для любителей слотов. Платформа может похвастаться обширной коллекцией слотов от известных поставщиков, включая классические фруктовые автоматы, современные видеослоты и прогрессивные джекпоты. Темы варьируются от древних цивилизаций до футуристических приключений, что гарантирует наличие слота на любой вкус. Благодаря регулярным обновлениям библиотека слот-игр всегда свежая и захватывающая.`,
  image: image,
});
const infoData2 = ref({
  title: "Дота 2",
  content: ``,
  image: image2,
});
const infolol = ref({
  title: "Лига Легенд",
  content: `1xBet предоставляет обширные возможности ставок для поклонников Dota 2. Охватывая такие крупные турниры, как The International и различные региональные лиги, платформа предлагает ряд рынков ставок, включая победителей матчей, общее количество убийств и первого Рошана. Доступны прямые трансляции и ставки в игре, что позволяет игрокам участвовать в игре по мере ее развития, добавляя азарта этому популярному киберспорту.`,
  image: image3,
});
const infoCs2 = ref({
  title: "КС 2",
  content: `Counter-Strike 2 (CS:GO) — еще одна изюминка в портфолио киберспорта 1xBet. Игроки имеют доступ к широкому спектру вариантов ставок на крупные турниры CS 2 (CS:GO), включая победителей карт, общее количество раундов и ставки с гандикапом. Платформа гарантирует игрокам возможность оставаться в курсе событий благодаря трансляции в прямом эфире и ставкам в игре, что делает ее выбором для любителей ставок на CS 2 (CS:GO).`,
  image: image4,
});
const infoFifa = ref({
  title: "ФИФА",
  content: `Для поклонников игр FIFA 1xBet предлагает захватывающий опыт ставок. Охватывая как международные турниры, так и местные соревнования, платформа предлагает различные рынки ставок, такие как победитель матча, общее количество голов и автор первого гола. Благодаря функциям ставок в реальном времени ставки на FIFA на 1xBet становятся динамичным и увлекательным занятием, особенно во время крупных киберспортивных турниров.`,
  image: image5,
});
</script>

<style lang="scss" scoped></style>
