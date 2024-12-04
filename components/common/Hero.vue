<script setup lang="ts">
const clog = (e: any) => {
  console.log(e);
};

defineProps<{ contenido }>()
</script>

<template>
  <section v-for="(item, index) in contenido" :key="index"
    class="flex flex-col overflow-hidden w-full h-screen lg:flex-row lg:items-center justify-end" :class="item.class">
    <!-- Contenedor del Texto -->
    <div class="flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20">
      <!-- Título -->
      <h1 class="text-3 lg:text-6 md:text-5">{{ item.title }}</h1>

      <!-- Texto Largo -->
      <p class="text-s3  lg:text-p4  md:text-p2" :class="item.descriptionClass">
        {{ item.description }}
      </p>

      <!-- Botón -->
      <NuxtLink :href="item.buttonLink" :class="item.buttonType"
        class="transition duration-200 flex justify-between p-3 pr-3 pl-3 w-28 text-s2 lg:w-80 md:w-56 md:p-[1.2rem] md:text-2 lg:p-6 lg:text-p3 ">
        {{ item.buttonText }}
        <span>🡒</span>
      </NuxtLink>
    </div>
    <!-- Imagen -->

    <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
      <NuxtImg :src="item.image" class="flex align mx-auto w-[30rem] lg:w-[60rem] md:w-[43rem]" />
    </div>
  </section>

</template>
