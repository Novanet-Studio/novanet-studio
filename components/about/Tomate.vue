<script setup lang="ts">

defineProps<{ content: any }>()

</script>

<template>
  <section v-for="(item, index) in content" :key="index"  class="flex flex-col overflow-hidden w-full h-screen px-4 lg:flex-row lg:items-center lg:px-20 " :class="item.class">

    <div class="flex pt-[3.500rem] ">
    <div v-if="item.imageMision" class="lg:flex lg:flex-col lg:justify-center  ">
      <NuxtImg :src="item.imageMision" class=" w-[12rem] lg:w-[25rem]"/>
    </div>

    <div class="flex flex-col gap-2  lg:pl-0 lg:gap-3 justify-center">
      <!-- Título -->
      <h1 class="text-oxford-blue font-bold text-s3 lg:text-6 md:text-5">{{ item.titleMision }}</h1>

      <!-- Descripción -->
      <p class=" text-oxford-blue text-s1 lg:text-p3 md:text-p2" :class="item.descriptionClass">
        {{ item.descriptionMision }}
      </p>
    </div>
    </div>


<div class="flex ">
    <div v-if="item.imageVision" class="lg:flex lg:flex-col lg:justify-center ">
      <NuxtImg :src="item.imageVision" class="w-[12rem] lg:w-[25rem]" />
    </div>

    <div class="flex flex-col gap-2  lg:pl-0 lg:gap-3 justify-center  ">
      <!-- Título -->
      <h1 class="text-oxford-blue font-bold text-s3  lg:text-6 md:text-5">{{ item.titleVision }}</h1>

      <!-- Descripción -->
      <p class=" text-oxford-blue text-s1 lg:text-p3  md:text-p2" :class="item.descriptionClass">
        {{ item.descriptionVision }}
      </p>
    </div>
  </div>
  </section>
</template>
