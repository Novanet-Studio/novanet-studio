<template>
  <section class="w-screen h-screen flex items-center ">
    <!-- Contenedor del Texto -->
    <div class="w-3/5 h-4/6 flex flex-col pl-20 gap-5">
      <!-- Título -->
      <h1 class="w-full text-xl">{{ title }}</h1>

      <!-- Texto Largo -->
      <p class=" text-p1">{{ content }}</p>

      <!-- Botón -->
      <a
        :href="buttonLink"
        :class="buttonClass"

      >
        {{ buttonText}} 
        <NuxtImg src="/assets/images/flecha.svg"></NuxtImg> 
      </a>
      
    </div>

    <!-- Imagen -->

    <div class="w-2/5 h-full flex flex-col justify-end">
      <NuxtImg 
      :src="imageSrc"
      class="object-cover"
       :style="{ width: imageSize }"
      />
      
    </div>
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
      default: ''
    },

    buttonClass: {
      type: String,
      default: 'p-6 w-80 bg-oxford-blue text-columbia-blue font-semibold hover:bg-black hover:text-white transition duration-200 flex'
    },
    imageSrc: {
      type: String,
      required: true,
    },
    vectorSrc: {
      type: String,
      required: false,
      default: "",
    },
    imageSize: {
      type: String,
      default: "52.25rem", // Tamaño por defecto
    },
  },
};
</script>
