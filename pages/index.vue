<template>
  <div class="w-screen h-screen">
    <!-- Contenedor raíz para todos los elementos -->

    <div class="bg-azure">

      <Header />

      <div>
        <!-- Sección 1 -->
        <Section
          class="text-columbia-blue"
          title="Novanet Studio"
          content="Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales."
          buttonText="Conoce más"
          buttonLink="#"
          imageSrc="novanet-hero-section.png"
          vectorSrc="Vector.svg"
        />
      </div>
    </div>

    <div class="bg-oxford-blue ">
      <!-- Sección 1 -->
      <Section
        class="text-columbia-blue"
        title="Creatividad"
        content="Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva."
        buttonText="Conoce más"
        buttonLink="#"
        imageSrc="novanet-hero-section.png"
      />
    </div>
    <div class="bg-azure">
      <!-- Sección 1 -->
      <Section
        title="Innovación"
        content="Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes."
        buttonText="Conoce más"
        buttonLink="#"
        imageSrc="novanet-hero-section.png"
        vectorSrc="Vector.svg"
      />
    </div>

    <div class="bg-columbia-blue">
      <!-- Sección 1 -->
      <Section
        title="Colaboración"
        content="Creemos en el poder de trabajar en equipo, tanto con nuestros clientes como dentro de nuestro entorno, para alcanzar resultados excepcionales."
        buttonText="Conoce más"
        buttonLink="#"
        imageSrc="novanet-hero-section.png"
      />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Section from '~/components/Section.vue'

export default {
  components: {
    Header,
    Section,
  },
}
</script>
