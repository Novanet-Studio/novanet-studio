<template>
  <section
    class="overflow-hidden w-screen h-screen flex flex-col justify-end lg:flex-row lg:items-center"
  >
    <!-- Contenedor del Texto -->
    <div
      class="flex pl-5 pr-5 flex-col gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:w-3/4 lg:h-4/6 lg:pl-20"
    >
      <!-- Título -->
      <h1 class="text-3 lg:text-6 md:text-5">{{ title }}</h1>

      <!-- Texto Largo -->
      <p class="text-s3 lg:w-[90%] lg:text-p4 md:w-[90%] md:text-p2">
        {{ content }}
      </p>

      <!-- Botón -->
      <NuxtLink :href="buttonLink" :class="buttonClass">
        {{ buttonText }}
        <NuxtImg class=" w-[0.5rem] md:w-[1rem] lg:w-[1.40rem]" src="images/flecha.svg"></NuxtImg>
      </NuxtLink>
    </div>
    <!-- Imagen -->

     <div class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
      <NuxtImg
        :src="imageSrc"
        class="flex align mx-auto w-[30rem] lg:w-[60rem] md:w-[43rem]"
        :style="{ marginLeft: generalClass2 }"
      />
    </div> 
  </section>
</template>


<script>
 export default {
   props: {
     title: {

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
         " bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white transition duration-200 flex justify-between p-3 pr-3 pl-3 w-28 text-s2 lg:w-80 md:w-56 md:p-[1.2rem] md:text-2 lg:p-6 lg:text-p3 ",
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

     generalClass2: {
       type: String,
       default: "",
     },
   },
 };
</script>

