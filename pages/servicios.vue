

<script lang="ts" setup>
const aboutus = [
  {
    name: 'Nosotros',
    class: 'content-center bg-background-emblem-3 bg-emblem-columbia-blue bg-bottom bg-no-repeat text-oxford-blue   ',
    title: 'Nuestros servicios están orientados a los usuarios',
    description: 'Analizamos en detalle para comprender sus requerimientos, deseos y comportamientos y así crear soluciones que resuelvan eficazmente sus problemas y mejoren su experiencia.',
    titleClass: 'border-b-2 border-solid border-azure w-[55%]',
    descriptionClass: 'w-[56%] text-oxford-blue',
    containerClass:'h-0'

  }
]

const services = [
  {
    name: "Principal",
    title: "Diseño gráfico",
    class:
      "bg-columbia-blue text-oxford-blue lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Proporcionamos soluciones creativas que conectan a las empresas con sus usuarios y fortalecen sus marcas. Con un enfoque en la reatividad, colaboramos estrechamente con nuestros clientes para crear diseños de alto impacto.",
    image: "images/diseno-grafico.webp",

    descriptionClass: 'lg:w-[90%] md:w-[90%]',

  },

  {
    name: "Principal",
    title: "Tecnologías web",
    class:
      "bg-oxford-blue text-columbia-blue lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Utilizamos las tecnologías más modernas para crear sitios y aplicaciones que conectan los servicios y productos de las empresas con los usuarios. Con un enfoque en la innovación y la eficiencia, construimos soluciones digitales robustas, seguras y escalables.",
    image: "images/tecnologia.webp",
    buttonType: "bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white",
    descriptionClass: 'lg:w-[90%] md:w-[90%]',

  },



  {
    name: "Principal",
    title: "Asesoria",
    class:
      "bg-azure text-columbia-blue lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Asesoramos con orientación en la colaboración y el trabajo en equipo para ofrecer soluciones personalizadas que conectan a las empresas con sus objetivos. Trabajamos estrechamente con nuestros clientes, integrando sus conocimientos y experiencias con las nuestras, para crear estrategias efectivas que impulsen el crecimiento",
    buttonLink: "#",
    image: "images/asesoria.webp",
    
    descriptionClass: 'lg:w-[90%] md:w-[90%]',

  }





]

  




</script>

<template>
  <div>
    <CommonHero :content="aboutus"/>
    <ServicesCebolla :content="services" />

  </div>
</template>



