<template>
  <div class="pt-[22px] pb-[40px] bg-main-b rounded-[10px] text-left">
    <InfoShortBlock
      :title="regData.title"
      :image="regData.image"
      :content="regData.content"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InfoShortBlock from "../layout/InfoShortBlock.vue";
import regImg from "../../assets/img/reg-1.jpg";

const regData = ref({
  title: "Register on 1xBet",
  content: `Accessing your 1xBet account is
streamlined for ease and efficiency.
Whether you’re on desktop or using the
mobile app, logging in is a breeze. The
platform ensures secure access with
advanced encryption, safeguarding your
personal and financial information. Once
logged in, you can easily navigate through
various sports, view your betting history,
manage your account, and place bets with
just a few clicks.`,
  image: regImg, 
});
</script>

<style lang="scss" scoped></style>
