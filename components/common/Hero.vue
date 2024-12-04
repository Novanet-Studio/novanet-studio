<template>
  <section
    class="flex flex-col overflow-hidden w-full h-screen lg:flex-row lg:items-center justify-end"
  >
    <!-- Contenedor del Texto -->
    <div class="flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20">
      <!-- Título -->
      <h1 class="text-3 lg:text-6 md:text-5" :class="titleClass">{{ title }}</h1>

      <!-- Texto Largo -->
      <p class="text-s3  lg:text-p4  md:text-p2" :class="descriptionClass">
        {{ description }}
      </p>

      <!-- Botón -->
      <NuxtLink :href="buttonLink" :class="buttonType" class="transition duration-200 flex justify-between p-3 pr-3 pl-3 w-28 text-s2 lg:w-80 md:w-56 md:p-[1.2rem] md:text-2 lg:p-6 lg:text-p3 ">
        {{ buttonText }}
        <NuxtImg
          class="w-[0.5rem] md:w-[1rem] lg:w-[1.40rem]"
          :src="imgFlecha"
        ></NuxtImg>
      </NuxtLink>
    </div>
    <!-- Imagen -->

    <div v-if="imageSrc" class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
      <NuxtImg
        :src="imageSrc"
        class="flex align mx-auto w-[30rem] lg:w-[60rem] md:w-[43rem]"/>
    </div>
  </section>

</template>

<script>
export default {
  props: {
    title: {
      required: false,
    },

    description: {
      type: String,
      required: false,
    },

    buttonText: {
      type: String,
      required: false,
    },

    buttonLink: {
      type: String,
      required: false,
      default: "",
    },

    buttonType: {
      type: String,
      default:
        "",
    },

    imageSrc: {
      type: String,
      required: false,
    },

    imgFlecha: {
      type: String,
      required: false,
    },

    vectorSrc: {
      type: String,
      required: false,
      default: "",
    },

    titleClass: {
      type: String,
      default: "",
    },
    descriptionClass:{
      type: String,
      required: false,
      default: "",
    },
    imgColor:{
      type: String,
      required: false,
      default: "",

    }
  },
};
</script>