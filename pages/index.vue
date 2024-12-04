<script lang="ts" setup>
// Custom function for logging console on the template
const clog = (e: any) => {
  console.log("Mi array tiene " + e.length + " items");
};

// Object with home page content
const home = [
  {
    name: "Principal",
    title: "Novanet Studio",
    class:
      "bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-bottom lg:bg-[bottom_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/principal-nina-mirando-izquierda.webp",
    imgFlecha: 'images/flecha-1.svg',
    buttonType: "bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white",
    descriptionClass:'lg:w-[90%] md:w-[90%]',
    
  },
  {
    name: "Creatividad",
    title: "Creatividad",
    class:
      "background-emblem-1 bg-oxford-blue text-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-bottom lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/mujer-joven-sentada-sonriendo.webp",
    imgFlecha: 'images/flecha-1.svg',
    buttonType:
      "bg-azure text-columbia-blue hover:bg-black hover:text-white",
    descriptionClass:'lg:w-[90%] md:w-[90%]'
  },
  {
    name: "Innovación",
    title: "Innovación",
    class:
      "background-emblem-2 bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-[bottom_right_6rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/nino-casco-realidad-virtual.webp",
    imgFlecha: 'images/flecha-1.svg',
    buttonType: "bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white",
    customClass: "justify-end lg:flex-row lg:items-center",
    descriptionClass:'lg:w-[90%] md:w-[90%]'
  },
  {
    name: "Colaboración",
    title: "Colaboración",
    class:
    "bg-columbia-blue text-oxford-blue bg-azure-reverse bg-no-repeat bg-[length:22.5rem] bg-[top_center] lg:bg-[top_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/grupo-personas-juntando-manos.webp",
    imgFlecha: 'images/flecha-1.svg',
    buttonType: "bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white",
    descriptionClass:'lg:w-[90%] md:w-[90%]'
  },
];
</script>

<template>
  <!-- Contenedor raíz para todos los elementos -->
  <CommonHero
    v-for="(item, index) in home"
    :key="index"
    :sectionClass="item.class"
    :title="item.title"
    :description="item.description"
    :buttonText="item.buttonText"
    :buttonLink="item.buttonLink"
    :imageSrc="item.image"
    :imgFlecha="item.imgFlecha"
    :class="item.class"
    :buttonType="item.buttonType"
    :descriptionClass="item.descriptionClass"
  />
</template>
