<template>
  <div class="footer flex flex-col items-center px-[10px] py-[32px] pt-[33px] gap-[32px]">
    <div class="logo-wrapper flex flex-col gap-[32px] items-center">
      <img :src="footerData[0].logo" alt="Logo" />
      <div class="flex gap-[32px] items-center">
        <img :src="footerData[0].mainP" alt="Main Partners" />
      </div>
    </div>
    <div class="p-wrapper">
      <!-- Один список, в котором для каждого партнёра создаётся элемент списка -->
      <ul class="p-list">
        <li v-for="(partner, index) in footerData[0].footerPartners" :key="index">
          <img :src="partner" alt="Partner logo" class="w-8 h-8" />
        </li>
      </ul>
    </div>
    <div class="footer-text">
      <p>{{ footerData[0].footerText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logoImg from "@assets/img/logo.png";
import mainPartnerts from "@assets/img/main-partners.svg";
import p1 from "@assets/img/partners/1.svg";
import p2 from "@assets/img/partners/2.svg";
import p3 from "@assets/img/partners/3.svg";
import p4 from "@assets/img/partners/4.svg";
import p5 from "@assets/img/partners/5.svg";
import p6 from "@assets/img/partners/6.svg";
import p7 from "@assets/img/partners/7.svg";
import p8 from "@assets/img/partners/8.svg";
import p9 from "@assets/img/partners/9.svg";
import p10 from "@assets/img/partners/10.svg";
import p11 from "@assets/img/partners/11.svg";
import p12 from "@assets/img/partners/12.svg";

const footerData = ref([
  {
    logo: logoImg,
    mainP: mainPartnerts,
    footerPartners: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12],
    footerText:
      "1xbet.com is operated by Caecus N.V., a company incorporated under the laws of Curaçao with Company Number 163779 and licensed by the Curaçao Gaming Control Board to offer games of chance under license number OGL/2024/1262/0493 in accordance with the National Ordinance on Offshore Games of Hazard. Payments are processed by Exidna Enterprises LTD and Kassifoni Enterprises LTD. To participate, you must first accept to be legally bound by the Responsible Gaming Agreement (RGA) and Gaming Terms of Service (GT&C). Copyright © 2025 All rights reserved and protected by law.",
  },
]);
</script>

<style lang="scss" scoped>
.footer {
  /* Стили для футера */
  .logo-wrapper {
    img {
      max-width: 200px;
    }
  }
  .p-wrapper {
    width: 100%;
  }
  .p-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px 30px;
    width: 100%;
    img {
      width: 100%;
      height: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .footer-text {
    font-size: 12px;
    color: #fff;
    text-align: center;
    max-width: 600px;
    opacity: 0.7;
    margin-top: -15px;
  }
}
</style>
