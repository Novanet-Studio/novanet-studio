<template>
  <section class="w-screen h-screen flex items-center ">
    <!-- Contenedor del Texto -->
    <div class="w-/4 h-full flex flex-col pl-20 justify-center gap-5">
      <!-- Título -->
      <h2 class="w-full text-6xl text-slate-50 font-bold">{{ title }}</h2>

      <!-- Texto Largo -->
      <p class="text-4xl text-slate-50">{{ content }}</p>

      <!-- Botón -->
      <a
        :href="buttonLink"
        class="mt-5 p-6 w-80 bg-oxford-blue inline-block text-columbia-blue font-semibold hover:bg-black hover:text-white transition duration-200"
      >
        {{ buttonText }}
      </a>
      
    </div>

    <!-- Imagen -->

    <div class="w-5/6 h-full flex flex-col justify-end">
      <NuxtImg 
      :src="imageSrc"
      class="object-cover w-[35rem]"
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
