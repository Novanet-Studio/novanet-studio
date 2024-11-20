<template>
  <section class="w-screen h-screen flex items-center ">
      <!-- Contenedor del Texto -->
      <div class="flex flex-col gap-2 lg:gap-5 pl-5 lg:w-3/4 lg:h-4/6 lg:pl-20">
        <!-- Título -->
        <h1 class="text-3 lg:text-6">{{ title }}</h1>

        <!-- Texto Largo -->
        <p class=" text-s2 lg:w-[90%] lg:text-p4 ">{{ content }}</p>

        <!-- Botón -->
        <NuxtLink :href="buttonLink" :class="buttonClass">

          {{ buttonText }}
          <NuxtImg src="images/flecha.svg"></NuxtImg>
        </NuxtLink>
      </div>

      <!-- Imagen -->

      <div class="lg:w-2/4 h-full flex flex-col justify-end">
        <NuxtImg
          :src="imageSrc"
          class="flex align"
          :style="{ width: imageSize, maxWidth: generalClass, marginLeft:generalClass2 }"
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
      default: "",
    },


    buttonClass: {
      type: String,
      default:
        " bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white transition duration-200 flex justify-between lg:w-80 lg:p-6 lg:text-p3  ",
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
      default: "", 
    },

    generalClass: {
      type: String,
      default: "", 
    },
    generalClass2: {
      type: String,
      default: "", 
    },
    
  },
};
</script>c
