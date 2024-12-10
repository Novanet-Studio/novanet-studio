<script lang="ts" setup>
const aboutus = [
  {
    name: 'Nosotros',
    class: 'bg-columbia-blue text-raspberry bg-emblem-portafolio bg-no-repeat bg-right bg-[length:30rem] ',
    title: 'Portafolio. Creatividad y funcionalidad',
    description: 'Creamos identidades visuales, desde logotipos hasta materiales de marca coherentes.  Construimos aplicaciones interactivas y sitios web utilizando HTML5, CSS3 y frameworks de JavaScript.',
    titleClass: 'border-b-2 border-solid border-raspberry',
    descriptionClass: 'w-[60%] text-oxford-blue',
  }
]
</script>

<template>
  <CommonHero :content="aboutus" />
</template>