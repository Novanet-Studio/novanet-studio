<script lang="ts" setup>
const aboutus = [
  {
    name: 'Nosotros',
    class: 'bg-columbia-blue pt-[10rem] text-raspberry bg-emblem-portafolio bg-no-repeat bg-right-bottom bg-right bg-[length:12rem]',
    title: 'Portafolio. Creatividad y funcionalidad',
    description: 'Creamos identidades visuales, desde logotipos hasta materiales de marca coherentes.  Construimos aplicaciones interactivas y sitios web utilizando HTML5, CSS3 y frameworks de JavaScript.',
    titleClass: 'border-b-2 border-solid border-raspberry',
    descriptionClass: 'w-[95%] text-oxford-blue',
  }
]
</script>

<template>
  <CommonHero :content="aboutus" />
</template>