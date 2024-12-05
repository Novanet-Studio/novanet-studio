<script lang="ts" setup>

// Object with home page content
const aboutus = [
  {
    name: 'Nosotros',
    class: 'bg-oxford-blue text-chartreuse bg-Background-autronaut bg-no-repeat bg-right bg-[length:30rem] ',
    title: 'Nosotros',
    description: 'Somos una agencia de marketing digital que ofrece soluciones creativas e innovadoras para conectar empresas con sus usuarios y fortalecer sus emprendimientos. Nos especializamos en diseño y desarrollo orientado al usuario en comunicación visual y tecnologías de la información. Con un enfoque en creatividad, innovación y colaboración, creamos soluciones a medida para impulsar el crecimiento y éxito digital.',
    buttonText: 'Conoce más',
    buttonLink: '#',
    buttonType: 'bg-chartreuse text-oxford-blue hover:bg-black hover:text-white transition duration-200 flex justify-between p-3 pr-3 pl-3 w-28 text-s2 lg:w-80 md:w-56 md:p-[1.2rem] md:text-2 lg:p-6 lg:text-p3',
    titleClass: 'border-b-2 border-solid border-chartreuse',
    descriptionClass: 'w-[60%] text-columbia-blue',
  }
]

const filosofia = [
  {
    name: 'Nosotros',
    title: 'Nosotros',
    description: 'Somos una agencia de marketing digital que ofrece soluciones creativas e innovadoras para conectar empresas con sus usuarios y fortalecer sus emprendimientos. Nos especializamos en diseño y desarrollo orientado al usuario en comunicación visual y tecnologías de la información. Con un enfoque en creatividad, innovación y colaboración, creamos soluciones a medida para impulsar el crecimiento y éxito digital.',    
  },
]
</script>


<template>
  <CommonHero :content="aboutus" />
  <AboutTomate :content="filosofia" />
</template>
