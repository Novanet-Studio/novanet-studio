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
    name: 'Mision',
    titleMision: 'Mision',
    class:'bg-columbia-blue bg-emblem-white bg-no-repeat bg-[length:30rem]',
    imageMision: "images/mujer-posicion-triunfo.webp",
    descriptionMision: 'Ofrecer ideas creativas e innovadoras que permitan a nuestros clientes conectar con sus usuarios de manera auténtica y consolidar sus emprendimientos en el mundo digital. Nos esforzamos por diseñar y desarrollar productos orientados al usuario que marquen la diferencia y generen un impacto positivo en la vida de las personas y en el éxito de los negocios.',
    titleVision:'Vision',   
    descriptionVision:'Aspiramos a ser reconocidos como líderes en el campo del marketing digital y la comunicación visual, ofreciendo soluciones de vanguardia que inspiren, motiven y transformen. Nos visualizamos como socios estratégicos de nuestros clientes, colaborando estrechamente con ellos para impulsar el crecimiento y la innovación en el mercado digital',
    imageVision: "images/mujer-heroina.webp",
  },
]
</script>
<template>
  <CommonHero :content="aboutus" />
  <AboutTomate :content="filosofia" />
</template>
