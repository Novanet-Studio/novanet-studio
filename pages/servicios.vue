<script lang="ts" setup>
const aboutus = [
  {
    name: 'Nosotros',
    class: ' text-oxford-blue  bg-no-repeat bg-right bg-[length:30rem] ',
    title: 'Nuestros servicios están orientados a los usuarios',
    description: 'Analizamos en detalle para comprender sus requerimientos, deseos y comportamientos y así crear soluciones que resuelvan eficazmente sus problemas y mejoren su experiencia.',
    titleClass: 'border-b-2 border-solid border-chartreuse',
    descriptionClass: 'w-[56%] text-oxford-blue',
    containerClass:'h-0'

  }
]

</script>

<template>
  <div>
    <CommonHero :content="aboutus" />
  </div>
</template>



