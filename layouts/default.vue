<script lang="ts" setup>
//importas tus iconos
import emblemaAzure from "~/assets/images/novanet-emblema-azure-logo.svg";
import emblemaBlanco from "~/assets/images/novanet-emblema.svg";
import mapaOxford from "/images/icono-de-mapa.svg"
import mapaColumbia from "/images/icono-de-mapa-blanco.svg"
import faceOxford from "/images/icono-de-facebook.svg"
import faceColumbia from "/images/icono-de-facebook-blanco.svg"
import whatsOxford from "/images/icono-de-whatsapp.svg"
import whatsColumbia from "/images/icono-de-whatsapp-blanco.svg"
import instaOxford from "/images/icono-de-instagram.svg"
import instaColumbia from "/images/icono-de-instagram-blanco.svg"



//este es el objeto donde se van a ir listando todos los atributos que necesitas
const customCss = ref({
  bgColor: "",
  icon: emblemaBlanco,
  textMenu: "text-oxford-blue",
  activeClass: "border-b-2 border-oxford-blue text-5xl",
  baseClass:"pb-2 hover:border-b-2 hover:border-oxford-blue text-center w-[6.5rem]",
  titleColor:"",
  descriptionColor:"",
  buttonColor:"",
  footerColor:"text-oxford-blue",
  iconMap: mapaOxford,
  iconFace: faceOxford,
  iconWhats: whatsOxford,
  iconInsta: instaOxford


});

const custom = ref({
  bgColor: "",
  iconNosotros: emblemaBlanco,



});

const handleScroll = (event: Event) => {
  const { scrollTop } = (event.target as Element);

  //aqui vamos cambiando segun el scroll

  if (scrollTop >= 0 && scrollTop <= 840) {
    customCss.value.icon = emblemaBlanco;
    customCss.value.textMenu = "text-oxford-blue";
    customCss.value.footerColor = "text-oxford-blue";
    customCss.value.activeClass = "border-b-2 border-oxford-blue text-5xl";
    customCss.value.baseClass = "pb-2 hover:border-b-2 hover:border-oxford-blue text-center w-[6.5rem]";
    customCss.value.iconMap = mapaOxford
    customCss.value.iconFace = faceOxford
    customCss.value.iconWhats = whatsOxford
    customCss.value.iconInsta = instaOxford
  }

  if (scrollTop >= 900 && scrollTop <= 1800) {
    customCss.value.icon = emblemaAzure;
    customCss.value.textMenu = "text-columbia-blue";
    customCss.value.footerColor = "text-columbia-blue"
    customCss.value.activeClass = "border-b-2 border-columbi-blue text-5xl";
    customCss.value.baseClass = "pb-2 hover:border-b-2 hover:border-columia-blue text-center w-[6.5rem]";
    customCss.value.iconMap = mapaColumbia
    customCss.value.iconFace = faceColumbia
    customCss.value.iconWhats = whatsColumbia
    customCss.value.iconInsta = instaColumbia
  }

  if (scrollTop >= 1880 && scrollTop <= 2720) {
    customCss.value.icon = emblemaBlanco;
    customCss.value.textMenu = "text-oxford-blue";
    customCss.value.footerColor = "text-oxford-blue"
    customCss.value.activeClass = "border-b-2 border-oxford-blue text-5xl";
    customCss.value.baseClass = "pb-2 hover:border-b-2 hover:border-oxford-blue text-center w-[6.5rem]";
    customCss.value.iconMap = mapaOxford
    customCss.value.iconFace = faceOxford
    customCss.value.iconWhats = whatsOxford
    customCss.value.iconInsta = instaOxford
  }

  if (scrollTop >= 2818) {
    customCss.value.icon = emblemaAzure;
    customCss.value.textMenu = "text-oxford-blue";
    customCss.value.footerColor = "text-oxford-blue"
    customCss.value.activeClass = "border-b-2 border-oxford-blue text-5xl";
    customCss.value.baseClass = "pb-2 hover:border-b-2 hover:border-oxford-blue text-center w-[6.5rem]";
    customCss.value.iconMap = mapaOxford
    customCss.value.iconFace = faceOxford
    customCss.value.iconWhats = whatsOxford
    customCss.value.iconInsta = instaOxford
  }

  if (scrollTop >= 0 && scrollTop <= 840) {
    custom.value.iconNosotros = emblemaAzure;
  }

  console.log(scrollTop);
};
</script>

<template>
  <div  @scroll="handleScroll">
    <!-- :config es el nombre de la prop en AppHeader customCss el nobmre de tu
    variable que tiene todos los atributos -->
    <AppHeader :config="customCss" />
    <main>
      <slot/>
    </main>
    <AppFooter :config="customCss"/>
  </div>

  <!-- class="h-screen overflow-scroll" -->
</template>
