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
        class="mt-5 p-6 w-80 bg-oxford-blue inline-block text-columbia-blue font-semibold hover:bg-black hover:text-white transition duration-200"
      >
        {{ buttonText }}
      </a>
      
    </div>

    <!-- Imagen -->

    <div class="w-2/5 h-full flex flex-col justify-end">
      <NuxtImg 
      :src="imageSrc"
      class="object-cover w-[52.25rem]"
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
  },
};
</script>
