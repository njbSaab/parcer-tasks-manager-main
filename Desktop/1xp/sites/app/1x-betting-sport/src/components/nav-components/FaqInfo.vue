<template>
  <div class="faq-info pt-[33px] pb-[63px] px-[20px] nj-bg-accent text-left">
    <h2 class="text-2xl text-white font-bold pb-[25px] flex items-center gap-3">
      <span><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.2381 25.381H7.80952L0 33.1905V1.95238C0 1.43458 0.205697 0.937981 0.571839 0.571839C0.937981 0.205697 1.43458 0 1.95238 0H31.2381C31.7559 0 32.2525 0.205697 32.6186 0.571839C32.9848 0.937981 33.1905 1.43458 33.1905 1.95238V23.4286C33.1905 23.9464 32.9848 24.443 32.6186 24.8091C32.2525 25.1753 31.7559 25.381 31.2381 25.381ZM41 13.6667V41L33.1905 33.1905H11.7143C11.1965 33.1905 10.6999 32.9848 10.3337 32.6186C9.9676 32.2525 9.7619 31.7559 9.7619 31.2381V29.2857H37.0952V11.7143H39.0476C39.5654 11.7143 40.062 11.92 40.4282 12.2861C40.7943 12.6523 41 13.1489 41 13.6667ZM12.0852 3.90476C10.3867 3.90476 9.02 4.29524 7.96571 5.05667C6.95048 5.85714 6.44286 6.97 6.46238 8.51238L6.4819 8.57095H10.25C10.2695 7.98524 10.4452 7.53619 10.7967 7.22381C11.1582 6.92401 11.6157 6.76458 12.0852 6.77476C12.6905 6.77476 13.1981 6.97 13.5495 7.32143C13.901 7.69238 14.0571 8.2 14.0571 8.78571C14.0571 9.41048 13.9205 9.93762 13.6081 10.3867C13.3348 10.8357 12.9248 11.2262 12.4171 11.5386C11.4214 12.2024 10.7381 12.7881 10.3671 13.3152C9.97667 13.8229 9.7619 14.6429 9.7619 15.619H13.6667C13.6667 15.0138 13.7448 14.5257 13.9205 14.1743C14.0962 13.8229 14.4281 13.4714 14.9162 13.159C15.7948 12.6905 16.5171 12.1243 17.0833 11.3433C17.6495 10.5624 17.9424 9.7619 17.9424 8.78571C17.9424 7.3019 17.4152 6.11095 16.361 5.23238C15.3262 4.35381 13.901 3.90476 12.0852 3.90476ZM9.7619 17.5714V21.4762H13.6667V17.5714H9.7619ZM21.4762 21.4762H25.381V17.5714H21.4762V21.4762ZM21.4762 3.90476V15.619H25.381V3.90476H21.4762Z" fill="#14A0FF"/>
</svg>
</span>
      FAQ
    </h2>
    <div class="flex flex-col gap-[20px]">
      <FaqInfo :title="infoData1.title" :content="infoData1.content" />
      <FaqInfo :title="infoData2.title" :content="infoData2.content" />
      <FaqInfo :title="infoData3.title" :content="infoData3.content" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FaqInfo from "../layout/FaqInfo.vue";

const infoData1 = ref({
  title: "What Security Measures Does 1xBet Take?",
  content:
    "1xBet simplifies the process of depositing and withdrawing funds for bettors. Theplatform supports a wide range of payment methods, including bank cards, e-wallets, bank transfers, and even cryptocurrencies. This diversity ensures that bettors from different regions can transact easily.",
});
const infoData2 = ref({
  title: "How to Start Betting on 1xBet?",
  content: `Starting your betting journey on 1xBet is
straightforward: ${"\n"}
 -Create an Account: Register on the 1xBet
website or through the app. ${"\n"}
 -Deposit Funds: Choose from the various
deposit methods available to add funds
to your account. ${"\n"}
 -Explore Betting Options: Navigate
through the wide range of sports and
casino games. ${"\n"}
 -Place Your Bets: Select your preferred
event, choose your bet type, and place
your bet.`,
});
const infoData3 = ref({
  title: "How to Start Betting on 1xBet?",
  content: `To download the 1xBet app: ${"\n"}
For Android: Visit the 1xBet website, download the .apk file, and install it on your device (make sure to allow installation from unknown sources in your device’s settings). ${"\n"}
For iOS: Search for 1xBet in the App Store and download the app directly to your Apple device.`,
});
</script>

<style lang="scss" scoped></style>
