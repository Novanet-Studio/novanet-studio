<script lang="ts" setup>

// Custom function for logging console on the template 
const clog = (e: any) => {
  console.log(e);
};

// Object with home page content
const home = {
  principal: {
    title: 'Novanet Studio',
    description: 'Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.',
    buttonText: 'Conoce más',
    buttonLink: '#',
    image: 'images/principal-nina-mirando-izquierda.webp',
  }
}

</script>

<template>
  <!-- Contenedor raíz para todos los elementos -->

  <!-- Sección 1 -->
  <HomeSection
    class="bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-bottom lg:bg-[bottom_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]"
    :title="home.principal.title" :content="home.principal.description" :buttonText="home.principal.buttonText"
    :buttonLink="home.principal.buttonLink" :imageSrc="home.principal.image" />

  <!-- Sección 2 -->
  <HomeSection
    class="background-emblem-1 bg-oxford-blue text-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-bottom lg:bg-[length:65.5rem] md:bg-[length:47.50rem]"
    title="Creatividad"
    content="Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva."
    buttonText="Conoce más" buttonLink="#"
    buttonClass="p-3 pr-3 pl-3 w-28 text-s2 bg-azure text-columbia-blue flex justify-between md:w-56 md:p-[1.2rem] md:text-2 lg:text-p3 lg:p-6 lg:w-80"
    imageSrc="images/mujer-joven-sentada-sonriendo.webp" />

  <!-- Sección 3 -->
  <HomeSection
    class="background-emblem-2 bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-[bottom_right_6rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]"
    title="Innovación"
    content="Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes."
    buttonText="Conoce más" buttonLink="#" imageSrc="images/nino-casco-realidad-virtual.webp" />

  <!-- Sección 4 -->
  <HomeSection
    class="bg-columbia-blue text-oxford-blue bg-azure-reverse bg-no-repeat bg-[length:22.5rem] bg-[top_center] lg:bg-[top_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]"
    title="Colaboración"
    content="Creemos en el poder de trabajar en equipo, tanto con nuestros clientes como dentro de nuestro entorno, para alcanzar resultados excepcionales."
    buttonText="Conoce más" buttonLink="#" imageSrc="images/grupo-personas-juntando-manos.webp" />
</template>
