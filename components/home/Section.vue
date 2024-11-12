<template>
  <section class="w-screen h-screen flex items-center p-20">
    <!-- Contenedor del Texto -->
    <div class="w-7/12">
      <!-- Título -->
      <h2 class="text-6xl text-slate-50 font-bold mb-4">{{ title }}</h2>

      <!-- Texto Largo -->
      <p class="text-4xl text-slate-50 mb-4">{{ content }}</p>

      <!-- Botón -->
      <a :href="buttonLink"
        class="mt-11 pt-6 pl-10 w-80 h-20 bg-oxford-blue inline-block text-columbia-blue font-semibold hover:bg-black hover:text-white transition duration-200">
        {{ buttonText }}
      </a>
    </div>

    <!-- Imagen -->

    <!-- Vector decorativo debajo de la imagen principal -->

    <img src="~/assets/images/novanet-hero-section.png" alt="Decorative Vector" class="relative w-full h-full object-cover  " />
  </section>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    vectorSrc: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
