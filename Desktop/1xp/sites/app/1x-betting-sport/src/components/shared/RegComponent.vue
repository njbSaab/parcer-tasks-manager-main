<template>
  <div class="">
    <RegForm
      :title="RegData.title"
      :image="RegData.image"
      :content="RegData.content"
      :btnLink="RegData.btnLink"
      :btnText="RegData.btnText"
      :linkText="RegData.linkText"
      :usedText="RegData.usedText"
      :titleIcon="RegData.titleIcon"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import RegForm from "../layout/RegForm.vue";
import image from "../../assets/img/logo.svg";
import icon from "../../assets/img/icons/Tested.svg";

const RegData = ref({
  title: "Регистрируйтесь на 1XBET",
  content: `Получите 120% бонус на первый депозит до 78,000 иен!`,
  image: image,
  titleIcon: icon,
  btnLink: "https://1xbet.com/",
  btnText: `Играть с промокодом`,
  linkText: `Смотреть полную информацию`,
  usedText: `Последнее использование 6 минут назад`,
});
</script>
