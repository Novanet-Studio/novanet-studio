<script lang="ts" setup>

// Custom function for logging console on the template 
const clog = (e: any) => {
  console.log("Mi array tiene " + e.length + " items");
};

// Object with home page content
const home = [
  {
    name: 'Principal',
    title: 'Novanet Studio',
    description: 'Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.',
    buttonText: 'Conoce más',
    buttonLink: '#',
    image: 'images/principal-nina-mirando-izquierda.webp',
    class: 'bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-bottom lg:bg-[bottom_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]'
  },
  {
    name: 'Creatividad',
    title: 'Creatividad',
    description: 'Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..',
    buttonText: 'Conoce más',
    buttonLink: '#',
    image: 'images/mujer-joven-sentada-sonriendo.webp',
    class: 'background-emblem-1 bg-oxford-blue text-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-bottom lg:bg-[length:65.5rem] md:bg-[length:47.50rem]',
    buttonClass: 'bg-azure text-columbia-blue hover:bg-black hover:text-white transition duration-200 flex justify-between p-3 pr-3 pl-3 w-28 text-s2 lg:w-80 md:w-56 md:p-[1.2rem] md:text-2 lg:p-6 lg:text-p3'
  },
  {
    name: 'Innovación',
    title: 'Innovación',
    description: 'Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.',
    buttonText: 'Conoce más',
    buttonLink: '#',
    image: 'images/nino-casco-realidad-virtual.webp',
    class: 'background-emblem-2 bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-[bottom_right_6rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]',
    
  },
  {
    name: 'Colaboración',
    title: 'Colaboración',
    description: 'Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.',
    buttonText: 'Conoce más',
    buttonLink: '#',
    image: 'images/grupo-personas-juntando-manos.webp',
    class: 'bg-columbia-blue text-oxford-blue bg-azure-reverse bg-no-repeat bg-[length:22.5rem] bg-[top_center] lg:bg-[top_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]',
    
  },


]
</script>

<template>
  <!-- Contenedor raíz para todos los elementos -->

  <!-- Sección 1 -->

  <div>
    <HomeSection
      v-for="(item, index) in home"
      :key="index"
      :sectionClass="item.class"
      :title="item.title"
      :content="item.description"
      :buttonText="item.buttonText"
      :buttonLink="item.buttonLink"
      :imageSrc="item.image"
      :class="item.class"
      :buttonClass="item.buttonClass"

    />
  </div>

</template>
