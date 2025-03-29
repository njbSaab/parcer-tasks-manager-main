<template>
  <div class="banner">
    <BannerMain />
  </div>
  <div class="introduse-to bg-main px-[19px] py-[20px] relative">
    <NavApp />
  </div>
  <!-- intro -->
  <div id="introduction-to" class="introduse-to bg-main px-[19px] py-[20px] relative">
    <IntroduceTo />
  </div>
  <!-- reg -->
  <div class="px-[19px] py-[20px] bg-main">
    <RegComponent />
  </div>
  <div id="advantages-of" class="advantages bg-main px-[19px] py-[20px] relative">
    <AdvantagesOfChoosing />
  </div>
  <!-- list sport -->
  <div id="variety-of" class="variety-of-sports bg-main px-[19px] py-[20px] relative">
    <VarietyOfSports />
  </div>
  <!-- reg -->
  <div class="px-[19px] py-[20px] bg-main">
    <RegComponent />
  </div>
  <div id="access-your" class="access-to bg-main px-[19px] py-[20px] relative">
    <AccessToAccount />
  </div>
  <!-- bingo -->
  <div id="experience-bingo" class="experience-bingo bg-main px-[19px] py-[20px] relative">
    <ExperienceBingo />
  </div>
  <!-- bingo -->
  <div id="deal-with" class="deal-with bg-main px-[19px] py-[20px] relative">
    <DealWith />
  </div>
  <!-- virtual cas-->
  <div id="1xbet-virtual" class="virt-casino bg-main px-[19px] py-[20px] relative">
    <VirtualCasino />
  </div>
  <!-- virtual cas-->
  <div id="gambling-on" class="ea-betting bg-main px-[19px] py-[20px] relative">
    <EaBatting />
  </div>
  <!-- reg -->
  <div class="px-[19px] py-[20px] bg-main">
    <RegComponent />
  </div>
  <!-- bonus betting-->
  <div id="exclusive-1xbet" class="bonus-betting bg-main px-[19px] py-[20px] relative">
    <BonusBetting />
  </div>
  <!-- dep list -->
  <div id="deposit-and" class="dep-list bg-main px-[19px] py-[20px] relative">
    <DepositList />
  </div>

  <div id="faq" class="faq-info bg-main relative">
    <FaqInfo />
  </div>
</template>

<script setup>
import AdvantagesOfChoosing from "../components/nav-components/AdvantagesOfChoosing.vue";
import IntroduceTo from "../components/nav-components/IntroduceTo.vue";
import VarietyOfSports from "../components/nav-components/VarietyOfSports.vue";
import AccessToAccount from "../components/nav-components/AccessToAccount.vue";
import DealWith from "../components/nav-components/DealWith.vue";
import VirtualCasino from "../components/nav-components/VirtualCasino.vue";
import EaBatting from "../components/nav-components/EaBatting.vue";
import BonusBetting from "../components/nav-components/BonusBetting.vue";
import DepositList from "../components/nav-components/DepositList.vue";
import FaqInfo from "../components/nav-components/FaqInfo.vue";
import RegComponent from "../components/shared/RegComponent.vue";
import BannerMain from "../components/layout/BannerMain.vue";
import ExperienceBingo from "../components/nav-components/ExperienceBingo.vue";
import NavApp from "../components/shared/NavApp.vue"
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>
